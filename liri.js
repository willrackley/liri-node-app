require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var userQuestion = process.argv.slice(3);

switch(action){
    case "spotify-this-song": 
        spotifySearch();
        break;
    case "concert-this": 
        concertSearch();
        break;
    case "movie-this": 
        if(process.argv.length === 3){
            userQuestion = "Mr. Nobody."
            movieSearch();
        } else {
        movieSearch();
        }
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;


}

function spotifySearch(){
    if(process.argv.length === 3){
        userQuestion = "The Sign"
        spotify.search({ type: 'track', query: userQuestion ,limit: 10 })
        .then(function(response) {
        console.log("==========");
        console.log("");
        
        //artist name
        console.log("Artists: " + response.tracks.items[9].album.artists[0].name);
        //song name
        console.log("Song Title: " + response.tracks.items[9].name);
        //preview link
        console.log("Preview Url: " + response.tracks.items[9].preview_url);
        //album name
        console.log("Album Title: " + response.tracks.items[9].album.name);
        
        console.log("");
        console.log("==========");
    })
    .catch(function(err) {
    console.log(err);
    });
    } else {
    spotify.search({ type: 'track', query: userQuestion ,limit: 1 })
    .then(function(response) {
        console.log("==========");
        console.log("");

        //artist name
        console.log("Artists: " + response.tracks.items[0].album.artists[0].name);
        //song name
        console.log("Song Title: " + response.tracks.items[0].name);
        //preview link
        console.log("Preview Url: " + response.tracks.items[0].preview_url);
        //album name
        console.log("Album Title: " + response.tracks.items[0].album.name);

        console.log("");
        console.log("==========");
    })
    .catch(function(err) {
    console.log(err);
    });
}
}

function concertSearch(){
    axios.get("https://rest.bandsintown.com/artists/" + userQuestion + "/events?app_id=codingbootcamp").then(
    function(response) {
        var venueDate =response.data[0].datetime;
        console.log("==========");
        console.log("");
        //Name of the venue
        console.log("Venue Name: " + response.data[0].venue.name);
        //Venue location
        console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
        //Date of the Event (use moment to format this as "MM/DD/YYYY")
        console.log("Event Date: " + moment(venueDate).format("MM/DD/YYYY"));
        console.log("");
        console.log("==========");
    }
);
}

function movieSearch(){
    axios.get("http://www.omdbapi.com/?t=" + userQuestion + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("==========");
        console.log("");
        //Title of the movie.
        console.log("Movie Title: " + response.data.Title);
        //Release Date
        console.log("Release Date: " + response.data.Released);
        // IMDB Rating of the movie.
        console.log("IMDB Ratinge: " + response.data.imdbRating);
        //Rotten Tomatoes Rating of the movie.
        console.log("Rotten Tomatoes Ratinge: " + response.data.Ratings[1].Value);
        //Country where the movie was produced.
        console.log("Country: " + response.data.Country);
        //Language of the movie.
        console.log("Language: " + response.data.Language);
        //Plot of the movie.
        console.log("Plot: " + response.data.Plot);
        //Actors in the movie.
        console.log("Actors: " + response.data.Actors);
        console.log("");
        console.log("==========");
    }
    );
}

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
    
      var dataArr = data.split(","); 

      action = dataArr[0];
      userQuestion = dataArr[1];

      switch(action){
        case "spotify-this-song": 
            spotifySearch();
            break;
        case "concert-this": 
            //checks if the second index is in quotes, if so then we remove them because it gives an error
            if(userQuestion.charAt(0) === '"'){
                userQuestion =  userQuestion.substr(1).slice(0, -1);
                concertSearch();
            } else {
            concertSearch();
            }
            break;
        case "movie-this": 
            movieSearch();
            break;           
      }
    });
     
    
    
}