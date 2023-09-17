const request = require('request');

// Function to fetch characters from a Star Wars movie by Movie ID
function fetchMovieCharacters(movieId) {
  const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
  
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      //console.log(`Characters in ${movieData.title}:`);
      
      movieData.characters.forEach(characterUrl => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(`${characterData.name}`);
          } else {
            console.error('Error fetching character:', charError);
          }
        });
      });
    } else {
      console.error('Error fetching movie data:', error);
    }
  });
}

// Usage: Pass the Movie ID as a command-line argument
const movieId = process.argv[2];

if (!movieId) {
  console.log('Please provide a Movie ID as an argument.');
} else {
  fetchMovieCharacters(movieId);
}
