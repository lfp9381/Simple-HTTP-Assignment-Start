const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(index);
  response.end();
};

module.exports.getImage = getImage;
