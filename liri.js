require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

/*fs.readFile("random.txt", "utf8", function(err, rtData) {
    if (err) {
      return console.log(err);
    }

    rtData = rtData.split(",");
    console.log(rtData);
});*/

spotify.search({ type: 'track', query: 'All the Small Things' })
.then(function(response) {
  console.log(response);
})
.catch(function(err) {
  console.log(err);
});
