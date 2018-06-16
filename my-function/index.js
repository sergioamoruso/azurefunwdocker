module.exports = function (context) { // whenever I receive a request do...    

    console.log("JavaScript HTTP Trigger function processed a request.");

    try {

        var json = context.req.body; // Get JSON object

        console.log(JSON.stringify(json));

        var sum = 0;

        for (var key in json) {

            if (json.hasOwnProperty(key)) {

                sum += json[key];

            }

        } // END of for (var key in json)

        var result = (sum / Object.keys(json).length);

        if (isNaN(result)) {

            context.res.body = "This function accepts only numbers as values.";

        } else {

            context.res.body = "The average is: " + result ;

        }

    } catch (error) {

        context.res.body = "Unable to process request.";

    } // END of TRY clause

    context.done();

};