import TourDetailsScreen from "@/components/screens/tour_details/tour_details";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

function parseTourHTML(html) {
  if (!html) return null;
  const $ = cheerio.load(html);

  const data = {
    title: "",
    overview: "",
    highlights: "",
    hotel: "",
    itinerary: [],
    price: "",
    inclusions: [],
    exclusions: [],
  };

  // 👉 Title
  data.title = $("p strong").first().text().trim();

  // 👉 Overview & Highlights
  $("p strong").each((i, el) => {
    const heading = $(el).text().toLowerCase();

    if (heading.includes("overview")) {
      data.overview = $(el).parent().next("p").text().trim();
    }

    if (heading.includes("tour highlights")) {
      data.highlights = $(el).parent().next("p").text().trim();
    }

    if (heading.includes("hotel option")) {
      data.hotel = $(el).parent().next("p").text().trim();
    }

    if (heading.includes("cost")) {
      data.price = $(el).parent().next("p").text().trim();
    }
  });

  // 👉 Itinerary
  $("p strong").each((i, el) => {
    const text = $(el).text();

    if (text.toLowerCase().includes("day")) {
      const parent = $(el).parent();

      const title = text.trim();
      const description = parent
        .html()
        .replace(`<strong>${text}</strong><br>`, "")
        .replace(`<strong>${text}</strong>`, "")
        .trim();

      data.itinerary.push({
        title,
        description: cheerio.load(description).text().trim(),
      });
    }
  });

  // 👉 Inclusions
  $("strong:contains('Inclusion')")
    .parent()
    .next("ul")
    .find("li")
    .each((i, el) => {
      data.inclusions.push($(el).text().trim());
    });

  // 👉 Exclusions
  $("strong:contains('Exclusion')")
    .parent()
    .next("ul")
    .find("li")
    .each((i, el) => {
      data.exclusions.push($(el).text().trim());
    });

  return data;
}

export async function getServerSideProps(context) {
  const { type, destination, id } = context.params;

  let detailsHTML = null;
  let tourData = null;

  try {
    // ✅ 1. Load JSON (tour data)
    const jsonPath = path.join(
      process.cwd(),
      "public",
      "tours",
      type,
      destination,
      `${destination}.json`,
    );

    const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    tourData = jsonData.find((t) => t.name === id) || null;

    // ✅ 2. Load DOCX (itinerary)
    const docPath = path.join(
      process.cwd(),
      "public",
      "tours",
      type,
      destination,
      "itineraries",
      `${id}.docx`,
    );

    if (fs.existsSync(docPath)) {
      const buffer = fs.readFileSync(docPath);

      const result = await mammoth.convertToHtml({ buffer });

      detailsHTML = result.value;
    } else {
      console.warn("DOCX not found:", docPath);
    }
  } catch (err) {
    console.error("SSR ERROR:", err);
  }

  return {
    props: {
      detailsHTML,
      tourData,
      parsedData: parseTourHTML(detailsHTML),
      docUrl: `/tours/${type}/${destination}/itineraries/${id}.docx`,
    },
  };
}

const TourDetailsPage = ({
  detailsHTML,
  tourData,
  parsedData,
  docUrl,
  setShowEnquiryModal,
}) => {

  
  

  return (
    <TourDetailsScreen
      tour={tourData}
      detailsHTML={detailsHTML}
      parsedData={parsedData}
      docUrl={docUrl}
      setShowEnquiryModal={setShowEnquiryModal}
    />
  );
};

export default TourDetailsPage;
