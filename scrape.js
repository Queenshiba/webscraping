const request = require('request');
const cheerio = require('cheerio');

request('https://natureworksbest.com/naturopathy-works/food-cravings/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        //  $('tbody').find('tr').each(function(index,element){
        //     console.log($(element).html())
        // });
        // console.log(table)





        var data = $('tbody').text()
        var arr = []
        for (let i = 0; i < data.length; i++) {
            if (data[i] == $('td')) {
                arr.push(data[i].nodeValue);
                continue;
            }
            arr.push(data[i])

            // console.log(arr)
        }

                $('tbody').each(function () {
                    const cravingChart = [];
                    const cravingThis = $('tr').children('td').first().text();
                    const reason = $('tr').children('td').slice(1).eq(0).text();
                    const solution = $('tr').children('td').last().text();

                    
                    cravingChart.push({
                        cravingThis: cravingThis,
                        reason: reason,
                        solution: solution,
                    });


            console.log(cravingChart)
        })
    }
});
