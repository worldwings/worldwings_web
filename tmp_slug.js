const fs = require('fs');

const filepath = 'src/constants/tours.js';
let content = fs.readFileSync(filepath, 'utf8');

const slugify = (text) => text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

content = content.replace(/destination:\s*"([^"]+)",/g, (match, destName) => {
    return 'title: "' + destName + '",';
});

content = content.replace(/(category:\s*"([^"]+)",\s*subCategory:\s*"([^"]+)",)/g, (match, prefix, category, subCategory) => {
    const type = slugify(category);
    const dest = slugify(subCategory);
    return prefix + '\n    type: "' + type + '",\n    destination: "' + dest + '",';
});

fs.writeFileSync(filepath, content);
console.log("Updated tours.js successfully.");
