const request = require('request');
const cheerio = require('cheerio');

request('https://natureworksbest.com/naturopathy-works/food-cravings/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        //  $('tbody').find('tr').each(function(index,element){
        //     console.log($(element).html())
        // });
        // console.log(table)



        var data = $('tr').text()
        var arr = []
        var arrp = arr.push(data)

        // try to use for loop but does't work

        // for (let i = 0; i < 10; i++) {
        //     var splitspace = data.split(',')
        //     // if (data[i] == $('td')) {
        //     //     arr.push(data[i].nodeValue);
        //     //     continue;
        //     // }
        //     arr.push(data[i])

            // console.log(arrp)
        // }

                // extract each target
                $('tbody').each(function () {
                    const cravingChart = [];
                    const cravingThis = $('tr').children('td').first().text();
                    const reason = $('tr').children('td').slice(1).eq(0).text();
                    const solution = $('tr').children('td').last().text();

                    // push the target to json form
                    cravingChart.push({
                        cravingThis: cravingThis,
                        reason: reason,
                        solution: solution,
                    });
            console.log(cravingChart)
            // look like this
            // [ { cravingThis: 'Chocolate',
            // reason: 'Magnesium',
            // solution:
            //  'Vitamin C supplements or orange, green and red fruits and vegetables' } ]

        })
    }
});
