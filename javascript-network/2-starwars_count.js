const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = `${process.argv[3]}`;


request.get(url, (err, response, body) => {
  const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

  
    console.log(`${filmsWithWedgeAntilles.length}`);
  }
);
