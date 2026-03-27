const fs = require('fs');
const path = require('path');
const base = 'e:/self/NOD Projects/worldwings/app/public/destinations';
const result = {};
if (fs.existsSync(base)) {
    fs.readdirSync(base).forEach(dir => {
        const dirPath = path.join(base, dir);
        if (fs.statSync(dirPath).isDirectory()) {
            result[dir] = fs.readdirSync(dirPath).filter(f => fs.statSync(path.join(dirPath, f)).isFile());
        }
    });
}
fs.writeFileSync('e:/self/NOD Projects/worldwings/app/tmp_images.json', JSON.stringify(result, null, 2));
console.log("Images extracted successfully to tmp_images.json");
