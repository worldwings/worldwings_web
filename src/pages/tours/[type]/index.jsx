import React from "react";
import { useRouter } from "next/router";
import TourDestinationsScreen from "@/components/screens/tour_destinations/tour_destinations";
import { PAGES, POPULAR_DESTINATIONS } from "@/constants/constants";

const TourTypePage = ({ type, title, destinations, bannerImage }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <TourDestinationsScreen
      type={type}
      title={title}
      destinations={destinations}
      bannerImage={bannerImage}
    />
  );
};

import fs from 'fs';
import path from 'path';

export async function getServerSideProps(context) {
  const { type } = context.params;

  const typeImages = {
    domestic: "/images/Domestic Tour_ Home Page  Poster.jpg",
    international: "/images/international tour_ Home Page Poster.jpg",
    pilgrimage: "/tours/pilgrimage/holyland/images/holyland (1).jpg",
    inbound: "/images/inbound.webp"
  };

  const toursMenu = PAGES.find(p => p.title === "Tours");
  if (!toursMenu) return { notFound: true };

  const tourType = toursMenu.dropdown.find(d =>
    d.title.toLowerCase().replace("-", "").replace(" ", "").includes(type.toLowerCase().replace("-", "").replace(" ", ""))
  );

  if (!tourType) {
    return { notFound: true };
  }

  const destinationsWithImages = (tourType.dropdown || []).map(dest => {
    // Extract destination slug from href
    const destinationSlug = dest.href.split("/").pop();
    const typeSlug = type.includes("domestic") ? "domestic" :
      type.includes("international") ? "international" :
        type.includes("pilgrimage") ? "pilgrimage" :
          type.includes("inbound") ? "inbound" : type;

    let image = null;

    // Try to read the JSON file for this destination to get any tour image
    try {
      const jsonPath = path.join(process.cwd(), "public", "tours", typeSlug, destinationSlug, `${destinationSlug}.json`);
      if (fs.existsSync(jsonPath)) {
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        if (jsonData.length > 0 && jsonData[0].images?.length > 0) {
          image = jsonData[0].images[0];
        }
      }
    } catch (err) {
      console.error(`Error reading JSON for ${destinationSlug}:`, err);
    }

    // Fallback to POPULAR_DESTINATIONS if no image found in JSON
    if (!image) {
      const popularMatch = POPULAR_DESTINATIONS.find(p =>
        p.name.toLowerCase() === dest.title.toLowerCase() ||
        dest.title.toLowerCase().includes(p.name.toLowerCase())
      );

      const typeKey = Object.keys(typeImages).find(k => type.toLowerCase().includes(k));
      image = popularMatch ? popularMatch.images[0] : (typeKey ? typeImages[typeKey] : "/images/domestic.jpg");
    }

    return {
      ...dest,
      image
    };
  });

  const typeKey = Object.keys(typeImages).find(k => type.toLowerCase().includes(k));

  return {
    props: {
      type,
      title: tourType.title,
      destinations: destinationsWithImages,
      bannerImage: typeKey ? typeImages[typeKey] : "/images/international.jpg"
    }
  };
}

export default TourTypePage;
