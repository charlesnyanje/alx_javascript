const request = require("request");

function getCharacterID(characterId) {
  const url = "https://swapi-api.alx-tools.com/api/films/";
  request.get(url, (err, response, body) => {
    const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(
        `https://swapi-api.alx-tools.com/api/people/${characterId}/`
      )
    );

    console.log(`${filmsWithWedgeAntilles.length}`);
  });
}
const characterId = `${process.argv[3]}`;

getCharacterID(characterId);
