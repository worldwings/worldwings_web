const fs = require('fs');

const descriptions = {
    "almaty": "Discover the stunning landscapes, rich history, and vibrant culture of Almaty.",
    "andaman": "Experience the pristine beaches, coral reefs, and crystal clear waters of Andaman.",
    "australia": "Explore the diverse wildlife, iconic landmarks, and beautiful beaches of Australia.",
    "azerbaijan": "Immerse yourself in the rich history, fire mountains, and modern beauty of Azerbaijan.",
    "bali": "Relax in the tropical paradise of Bali with its beautiful temples, terraces, and beaches.",
    "dubai": "Marvel at the futuristic architecture, luxury shopping, and desert safaris in Dubai.",
    "europe-uk": "Journey through the historic cities, majestic Alps, and diverse cultures of Europe and the UK.",
    "georgia": "Experience the ancient history, unique wine culture, and breathtaking mountain scenery of Georgia.",
    "holyland": "Embark on a spiritual journey through the sacred sites and ancient biblical cities of the Holyland.",
    "japan": "Discover the unique blend of ancient traditions, beautiful cherry blossoms, and modern technology in Japan.",
    "kashmir": "Witness the unparalleled natural beauty, snow-capped peaks, and serene lakes of Kashmir.",
    "langkawi": "Enjoy the lush rainforests, mangroves, and beautiful beaches of Langkawi.",
    "malaysia": "Experience the vibrant mix of cultures, amazing food, and stunning landscapes of Malaysia.",
    "maldives": "Relax in luxury at the beautiful overwater bungalows and turquoise lagoons of the Maldives.",
    "mauritius": "Discover the stunning beaches, botanical gardens, and clear waters of Mauritius.",
    "oman": "Explore the rich history, ancient forts, and beautiful desert landscapes of Oman.",
    "russia": "Discover the grand architecture, world-class museums, and rich culture of Russia.",
    "scandinavia": "Experience the stunning fjords, stylish cities, and northern lights of Scandinavia.",
    "singapore": "Marvel at the modern skyline, Gardens by the Bay, and vibrant street food culture of Singapore.",
    "south-korea": "Explore the fascinating history, serene palaces, and dynamic pop culture of South Korea.",
    "sri-lanka": "Discover the ancient ruins, lush tea gardens, and beautiful beaches of Sri Lanka.",
    "uk": "Explore the historic landmarks, royal palaces, and charming countryside of the UK.",
    "vietnam": "Experience the stunning natural beauty, bustling cities, and rich history of Vietnam."
};

const filepath = 'src/constants/tours.js';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace(/(id:\s*"([^"]+)",[\s\S]*?)(?=\s*images:)/g, (match, prefix, id) => {
    const desc = descriptions[id] || "Discover this amazing destination and create unforgettable memories.";
    return prefix + 'description: "' + desc + '",\n    ';
});

fs.writeFileSync(filepath, content);
console.log("Descriptions added successfully.");
