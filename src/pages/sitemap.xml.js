import fs from "fs";
import path from "path";
import { BLOG_POSTS } from "@/constants/constants";
import { SERVICES } from "@/constants/services";

const EXTERNAL_DATA_URL = "https://worldwings.in"; // Adjust this if the domain is different

function generateSiteMap(urls) {
  const currentDate = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
      .map((url) => {
        const priority = url === "https://worldwings.in" || url === "https://worldwings.in/" ? "1.0" : "0.8";
        return `
       <url>
           <loc>${url}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
      })
      .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const urls = [];

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/visas",
    "/blog",
    "/services",
  ];
  staticPages.forEach((page) => {
    urls.push(`${EXTERNAL_DATA_URL}${page}`);
  });

  // 2. Services (Categories and specific services)
  SERVICES.forEach((service) => {
    urls.push(`${EXTERNAL_DATA_URL}/services/${service.category}`);
    urls.push(
      `${EXTERNAL_DATA_URL}/services/${service.category}/${service.id}`
    );
  });

  // 3. Blog Posts
  BLOG_POSTS.forEach((post) => {
    urls.push(`${EXTERNAL_DATA_URL}/blog/${post.id}`);
  });

  // 4. Tours (Dynamically read from /public/tours)
  const toursDir = path.join(process.cwd(), "public", "tours");
  if (fs.existsSync(toursDir)) {
    const types = fs.readdirSync(toursDir);
    types.forEach((type) => {
      const typePath = path.join(toursDir, type);
      if (fs.statSync(typePath).isDirectory()) {
        // Add tour type page (e.g. /tours/domestic)
        urls.push(`${EXTERNAL_DATA_URL}/tours/${type}`);

        const destinations = fs.readdirSync(typePath);
        destinations.forEach((destination) => {
          const destPath = path.join(typePath, destination);
          if (fs.statSync(destPath).isDirectory()) {
            // Add tour destination page (e.g. /tours/domestic/south_india)
            urls.push(`${EXTERNAL_DATA_URL}/tours/${type}/${destination}`);

            // Parse the JSON to add specific tours
            const jsonPath = path.join(destPath, `${destination}.json`);
            if (fs.existsSync(jsonPath)) {
              try {
                const fileData = fs.readFileSync(jsonPath, "utf-8");
                const tourData = JSON.parse(fileData);
                if (Array.isArray(tourData)) {
                  tourData.forEach((tour) => {
                    if (tour.name) {
                      urls.push(
                        `${EXTERNAL_DATA_URL}/tours/${type}/${destination}/${encodeURIComponent(
                          tour.name
                        )}`
                      );
                    }
                  });
                }
              } catch (e) {
                console.error("Error parsing tour JSON:", jsonPath, e);
              }
            }
          }
        });
      }
    });
  }

  // Deduplicate URLs
  const uniqueUrls = [...new Set(urls)];

  // Generate the XML sitemap
  const sitemap = generateSiteMap(uniqueUrls);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
