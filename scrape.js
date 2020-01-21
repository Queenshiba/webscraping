const request = require('request');
const cheerio = require('cheerio');

request('https://natureworksbest.com/naturopathy-works/food-cravings/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let test = [];
        $('tr').each((index, item) => {
            const obj = {
                craving:"",
                reason:"",
                solution:""
            }
            $(item).find('td').each((index,td)=>{
                // console.log(index, $(td).text())
                if(index === 0) {
                    obj.craving = $(td).text();
                }
                if(index === 1) {
                    obj.reason = $(td).text();
                }
                if(index === 2) {
                    obj.solution = $(td).text();
                }
            });
            test.push(obj)
        });
        console.log(test);
    }
});
