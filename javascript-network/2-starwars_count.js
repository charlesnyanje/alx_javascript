const request = require("request");


  const url = `${process.argv[2]}`;
  const characterId = 18;

  request.get(url, (err, response, body) => {
    const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(
        `${url}/${characterId}/`
      )
    );

    console.log(`${filmsWithWedgeAntilles.length}`);
  });




