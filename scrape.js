const request = require('request');
const cheerio = require('cheerio');

request('https://natureworksbest.com/naturopathy-works/food-cravings/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        //  $('tbody').find('tr').each(function(index,element){
        //     console.log($(element).html())
        // });
        // console.log(table)


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
        $('tr').each(function () {
            // push the target to json form 
            for (let i = 1; i < 35; i++) {
                const chart = [];
                const small = []
                
                const data = $('tr').eq(i).text()
                // const cleandata = data.replace(/\n/g, "");
                const splitdata = data.split('\n')
            
                chart.push({splitdata})

                const cravingThis = splitdata[1];
                const reason = splitdata[2];
                const solution = splitdata[3];                

               small.push({
                    cravingThis: cravingThis,
                    reason: reason,
                    solution: solution,

                })
                console.log(small)
            };
            
        }
            
            // look like this
            // [ { cravingThis: 'Chocolate',
            // reason: 'Magnesium',
            // solution:
            //  'Vitamin C supplements or orange, green and red fruits and vegetables' } ]
        
        )
    }
});
