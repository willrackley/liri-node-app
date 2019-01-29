# liri-node-app
A command line node app that takes in parameters and gives you back data. This app searches Spotify for songs, Bands in Town for concerts, and OMDB for movies. The app also reads text from a file (random.txt)to run commands and pushes user output to a log.text file.


[link to liri app screenshots and video demo!](https://willrackley.github.io/liri-node-app/)


## CLI Screenshoots

## do-what-it-says
![do-what-it-says](doWhatItSays.png) 

The user types in 'do-what-it-says' and the liri.js file reads the random.text file and runs that in the command line.

## concert-this
![concert-this](concertThis.png) 

The user types in 'concert-this' and the name of a band/artist and liri.js takes that information and makes a call to the bands in town api. The output displays the name of the venue, venue location, and date of the event.

## movie-this
![movie-this](movieThis.png) 

The user types in 'movie-this' and the name of a movie. Liri.js takes that information and makes a call to the omdb api. The output displays the title of the movie, year, imdb rating, rotten tomatoes rating, country where it was produces, language of the movie, plot, and the actors in the movie. 

## spotify-this-song
![spotify-this-song](spotifyThis.png)

The user types in 'spotify-this-song' and the name of a song. Liri.js takes that information and makes a call to the spotify api. The output displays the artist name, song name, preview link (if availabe), and the album that the song is from. If the user does not initially specify a song, then 'The Sign' by Ace of Spades is displayed.

## log.txt file
![log.txt](logSS.png)
Once the user inputs the info that they are looking for, that output is then appended to a 'log.txt' file.

## random.txt file
![random.txt](randomSS.png)
This file is used for the liri.js file to read and execute the action written inside.
