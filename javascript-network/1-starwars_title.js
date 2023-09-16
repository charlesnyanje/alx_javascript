const request = require('request');

// Function to get the title of a Star Wars movie by episode number
function getMovieTitleByEpisode(id) {
  const apiUrl = `https://swapi.dev/api/films/${id}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(`Title of Episode ${id}: ${movieData.title}`);
    } else {
      console.error(`Error fetching data: ${error}`);
    }
  });
}

// Usage: Provide the episode number as a command line argument
const id = process.argv[2];

if (!id) {
  console.error('Please provide an episode number as an argument.');
} else {
  getMovieTitleByEpisode(id);
}
