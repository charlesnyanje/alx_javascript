const request = require("request");

function getCharacterID(characterId) {
  const url = `${process.argv[2]}`;
  request.get(url, (err, response, body) => {
    const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(
        `${url}/${characterId}/`
      )
    );

    console.log(`${filmsWithWedgeAntilles.length}`);
  });
}
const characterId = `${process.argv[3]}`;

getCharacterID(characterId);
