const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
// const writeStream = fs.createWriteStream('cravinginfo.json');

// write headers
// writeStream.write(`cravingdata \n`);

request('https://natureworksbest.com/naturopathy-works/food-cravings/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        // extract each target
        // $('tr').each(function () {
        // push the target to json form 
        for (let i = 0; i < 35; i++) {
            // const chart = []
            // const small = [];

            const data = $('tr').eq(i).text()
            const splitdata = data.split('\n')

            const cravingThis = splitdata[1];
            const reason = splitdata[2];
            const solution = splitdata[3];

            const info = ({
                cravingThis: cravingThis,
                reason: reason,
                solution: solution,
            })
            

            // writeStream.write(`${info} \n`);
            console.log(info)
        }


        console.log('well done');
    }

});
