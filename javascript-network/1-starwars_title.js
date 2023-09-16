const request = require("request");

function getMovieTitleByID(id) {
  const url = `https://swapi.dev/api/films/${id}`;
  request.get(url, (err, response, body) => {
    const movieData = JSON.parse(body);
    console.log(`${movieData.title}`);
  });
}

const id = `${process.argv[2]}`;

getMovieTitleByID(id);
