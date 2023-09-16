const request = require('request');


const URL = process.argv[0]

request
  .get(URL)
  .on('response', function(response) {
    console.log(`code: ${response.statusCode}`); // 200
  })
