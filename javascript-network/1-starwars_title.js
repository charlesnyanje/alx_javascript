const request = require('request');

const url = `${process.argv[3]}`

const id = `${process.argv[2]}${url}`;



request
  .get(URL)
  .on('response', function(response) {
    console.log(`code: ${response.statusCode}`); // 200
  })
