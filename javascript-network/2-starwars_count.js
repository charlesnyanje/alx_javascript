const request = require("request");

const characterId = `${process.argv[3]}`

const url = `https://swapi-api.alx-tools.com/api/films/${characterId}`


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
    `${filmsWithWedgeAntilles.length}`
  );
});
}

getCharacterID(characterId)
