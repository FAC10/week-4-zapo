const fs = require('fs');
const path = require('path');
const handleAPI = require('./handleAPI');

const handlers = module.exports = {};

handlers.serveLanding = function (request, response) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.write(`<h1>500 Server Error:</h1><h2>${err}</h2>`);
      response.end();
    }
    response.writeHead(200, 'Content-Type: text/html');
    response.end(file);
  });
};

handlers.servePublic = function (request, response) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', request.url), (err, file) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.write(`<h1>500 Server Error:</h1><h2>${err}</h2>`);
      response.end();
    }
    const extension = request.url.split('.')[1];
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',
    };
    response.writeHead(200, { 'content-type': extensionType[extension] });
    response.end(file);
  });
};

handlers.pageNotFound = function (request, response) {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.write('<h1>404 Page Requested Cannot be Found</h1>');
  response.end();
};


handlers.serveAPI = function (request, response) {
  response.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
  response.end(JSON.stringify(handleAPI(request.url)));
};
