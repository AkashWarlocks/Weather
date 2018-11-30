const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch for',
        string:true
    }
}).help()
.alias('help','h').argv;

var encodedURI = encodeURIComponent(argv.address);

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=zMVp5TwxSTxGpKG9rDGvXZ0vRaLzLfbE&location=${encodedURI}',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body));
});
