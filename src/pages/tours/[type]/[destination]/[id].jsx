import TourDetailsScreen from "@/components/screens/tour_details/tour_details";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";

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
      `${destination}.json`
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
      `${id}.docx`
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
      docUrl: `/tours/${type}/${destination}/itineraries/${id}.docx`,
    },
  };
}

const TourDetailsPage = ({ detailsHTML, tourData, docUrl }) => {
  return (
    <TourDetailsScreen
      tour={tourData}
      detailsHTML={detailsHTML}
      docUrl={docUrl}
    />
  );
};

export default TourDetailsPage;