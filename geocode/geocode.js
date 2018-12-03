const request = require('request');

var geocodeAddress = (address, callback) => {
    
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=zMVp5TwxSTxGpKG9rDGvXZ0vRaLzLfbE&location=${encodedAddress}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          callback("ERROR - " + error )
        } else {
            callback(undefined, {
                address:body.results[0].locations[0].adminArea5+" "+body.results[0].locations[0].adminArea4+ " "+body.results[0].locations[0].adminArea1,
                latitude: body.results[0].locations[0].displayLatLng.lat,
                longitude: body.results[0].locations[0].displayLatLng.lng,
            })
            
         
        }
        
        
       
         
      });
      

};

module.exports.geocodeAddress = geocodeAddress;