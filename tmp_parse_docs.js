const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

let content = fs.readFileSync(path.join(__dirname, 'src/constants/tours.js'), 'utf8');
let jsonStr = content.replace('export const TOUR_PACKAGES = ', '').replace(/;\s*$/, '');

let tours;
try {
    tours = eval('(' + jsonStr + ')');
} catch (e) {
    console.log("Eval error:", e);
    process.exit(1);
}

const processTours = async () => {
    for (const tour of tours) {
        if (tour.itineraries && tour.itineraries.length > 0) {
            const docxFile = tour.itineraries.find(f => f.toLowerCase().endsWith('.docx'));
            if (docxFile) {
                const docPath = path.join(__dirname, 'public/ITINERARIES', docxFile);
                if (fs.existsSync(docPath)) {
                    try {
                        const result = await mammoth.convertToHtml({ path: docPath });
                        tour.itineraryHtml = result.value;
                    } catch (e) {
                        console.error('Error processing', docPath, e.message);
                    }
                }
            }
        }
    }

    const newFileContent = 'export const TOUR_PACKAGES = ' + JSON.stringify(tours, null, 4) + ';\n';
    fs.writeFileSync(path.join(__dirname, 'src/constants/tours.js'), newFileContent);
    console.log('Saved itineraryHtml to tours.js');
};

processTours();
