const request = require('request');

request
.get("https://intranet.alxswe.com/doesn't exist")
.on('response', function(response) {
    console.log("code:",response.statusCode);
})