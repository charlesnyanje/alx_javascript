const request = require('request');

const GET = "";

request
.get(GET)
.on('response', function(response) {
    console.log("code:",response.statusCode);
})