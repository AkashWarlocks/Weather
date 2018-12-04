//322eb8c20e982f170398e83cc6ead804
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const request = require('request');

var weatherDetails = (latitude, longitude,callback) => {

    request({
        url:`https://api.darksky.net/forecast/322eb8c20e982f170398e83cc6ead804/${latitude},${longitude}`,
        json:true,
    }, (error, response, body)=>{
        if(error) {
            callback('Error in weather api '+error);
        }
        else {
            callback(undefined,{
                weatherReport:body.currently.summary,
                Temperature: body.currently.temperature,
            })
        }
    }

    )
}
module.exports.weatherDetails = weatherDetails;
