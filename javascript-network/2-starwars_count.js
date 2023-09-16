const request = require("request");

const url = "https://swapi-api.alx-tools.com/api/films/";

const characterId = "";
function getCharacterID(characterId){

request.get(url, (err, response, body) => {
  const filmsData = JSON.parse(body);

  const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
    film.characters.includes(
      `https://swapi-api.alx-tools.com/api/people/${characterId}/`
    )
  );

  // Print the number of films where "Wedge Antilles" is present
  console.log(
    `Number of films with Wedge Antilles: ${filmsWithWedgeAntilles.length}`
  );
});
}

getCharacterID(characterId)
