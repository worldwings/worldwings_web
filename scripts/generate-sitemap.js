const fs = require('fs');
const path = require('path');

const EXTERNAL_DATA_URL = "https://worldwings.in";

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

function getStaticAndConstantUrls() {
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

  // 2. Services (extracted manually or we can scan the constants file)
  // Let's just read src/constants/services.js and regex it.
  try {
    const servicesContent = fs.readFileSync(path.join(__dirname, '../src/constants/services.js'), 'utf-8');
    const idRegex = /id:\s*["']([^"']+)["']/g;
    const categoryRegex = /category:\s*["']([^"']+)["']/g;
    
    let idMatch;
    let categoryMatch;
    const ids = [];
    const categories = new Set();
    
    while ((idMatch = idRegex.exec(servicesContent)) !== null) {
      ids.push(idMatch[1]);
    }
    
    // Quick and dirty manual matching since the file structure is predictable
    // Actually, let's just use eval or regex. A simple regex for objects:
    const blockRegex = /{\s*id:\s*["']([^"']+)["'],\s*category:\s*["']([^"']+)["']/g;
    let blockMatch;
    while ((blockMatch = blockRegex.exec(servicesContent)) !== null) {
      categories.add(blockMatch[2]);
      urls.push(`${EXTERNAL_DATA_URL}/services/${blockMatch[2]}/${blockMatch[1]}`);
    }
    categories.forEach(cat => {
      urls.push(`${EXTERNAL_DATA_URL}/services/${cat}`);
    });
  } catch(e) {
    console.error("Could not parse services.js", e);
  }

  // 3. Blog Posts
  try {
    const constantsContent = fs.readFileSync(path.join(__dirname, '../src/constants/constants.js'), 'utf-8');
    const blogBlock = constantsContent.substring(constantsContent.indexOf('export const BLOG_POSTS'));
    const idRegex = /id:\s*["']([^"']+)["']/g;
    let idMatch;
    while ((idMatch = idRegex.exec(blogBlock)) !== null) {
      urls.push(`${EXTERNAL_DATA_URL}/blog/${idMatch[1]}`);
    }
  } catch(e) {
    console.error("Could not parse constants.js", e);
  }
  
  return urls;
}

function run() {
  const urls = getStaticAndConstantUrls();

  // 4. Tours (Dynamically read from /public/tours)
  const toursDir = path.join(__dirname, "../public", "tours");
  if (fs.existsSync(toursDir)) {
    const types = fs.readdirSync(toursDir);
    types.forEach((type) => {
      const typePath = path.join(toursDir, type);
      if (fs.statSync(typePath).isDirectory()) {
        urls.push(`${EXTERNAL_DATA_URL}/tours/${type}`);

        const destinations = fs.readdirSync(typePath);
        destinations.forEach((destination) => {
          const destPath = path.join(typePath, destination);
          if (fs.statSync(destPath).isDirectory()) {
            urls.push(`${EXTERNAL_DATA_URL}/tours/${type}/${destination}`);

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

  const uniqueUrls = [...new Set(urls)];
  const sitemap = generateSiteMap(uniqueUrls);

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log("Sitemap generated successfully at public/sitemap.xml");
}

run();
