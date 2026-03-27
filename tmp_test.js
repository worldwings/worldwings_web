const mammoth = require('mammoth');
const path = require('path');

const filepath = path.join(__dirname, 'public/ITINERARIES/Almaty/3 Days Almaty Holiday Package.docx');

mammoth.extractRawText({ path: filepath })
    .then(function (result) {
        const text = result.value; // The raw text 
        console.log(text.substring(0, 500));
    })
    .catch(console.error);
