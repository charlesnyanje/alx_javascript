const request = require('request');

const URL = "";

request
.get(URL)
.on('response', function(response) {
    console.log("code:",response.statusCode);
})