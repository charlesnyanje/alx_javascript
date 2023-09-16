const request = require('request');

// Function to get the title of a Star Wars movie by episode number
function getMovieTitleByID(id) {
  const apiUrl = `https://swapi.dev/api/films/${id}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(`${movieData.title}`);
    } else {
      console.error(`Error fetching data: ${error}`);
    }
  });
}

// Usage: Provide the episode number as a command line argument
const id = process.argv[2];

getMovieTitleByID(1);