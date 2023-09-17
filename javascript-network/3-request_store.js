const request = require('request');
const fs = require('fs');

// Check if the required arguments are provided
/* if (process.argv.length !== 4) {
  console.error('Usage: node fetchAndStore.js <URL> <FilePath>');
  process.exit(1);
} */

const url = process.argv[2];
const filePath = process.argv[3];

// Function to fetch the webpage content and save it to a file
function fetchAndStoreWebpage(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`HTTP Status Code: ${response.statusCode}`);
      return;
    }

    // Save the webpage content to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        //console.log(`${filePath}`);
      }
    });
  });
}

// Fetch and store the webpage
fetchAndStoreWebpage(url, filePath);
