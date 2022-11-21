const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);


request(args[0], (error, response, body) => {
  fs.writeFile(args[0], body, 'utf8', () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]} `);
  })
});