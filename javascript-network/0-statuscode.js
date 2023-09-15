const request = require('request');


request
.get(GET)
.on('response', function(response) {
    console.log("code:",response.statusCode);
})