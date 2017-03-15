const fs = require('fs');
const path = require('path');

const handlers = module.exports = {};

handlers.serveLanding = function (request, response) {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), function(err, file) {
      if (err) return err;
      response.writeHead(200, 'Content-Type: text/html');
      response.end(file);
    })
}

handlers.servePublic = function(request, response) {
  fs.readFile(path.join(__dirname, '..', 'public',  request.url), function(err, file) {
    if (err) return err;
    var extension = request.url.split('.')[1];
    var extensionType = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'ico': 'image/x-icon'
    }
    response.writeHead(200, { 'content-type': extensionType[extension] });
    response.end(file);
  });
}

handlers.pageNotFound = function(request, response) {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.write('<h1>404 Page Requested Cannot be Found</h1>');
  response.end();
}
