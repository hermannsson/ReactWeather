var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=3f1ce8ce65f9cbc4ce6f949ac76f2b83';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        return res.data.main.temp;
      } else {
        throw new Error('Unable to fetch weather for that location');
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
