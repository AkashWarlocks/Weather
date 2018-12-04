const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./geocode/weather')


const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch for',
        string:true
    }
}).help()
.alias('help','h').argv;

geocode.geocodeAddress(argv.address, (errorMsg , results) => {
  if(errorMsg){
    console.log(errorMsg)
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    weather.weatherDetails(results.latitude,results.longitude, (weatherError, weatherResults)=>{
      if (weatherError){
        console.log(weatherError)
      } else {
        console.log(JSON.stringify(weatherResults, undefined,2) )
      }

    })
  }

});
//322eb8c20e982f170398e83cc6ead804
