// const fs = require('fs');
// const path = require('path');
const handlers = require('./handler');
module.exports = function (request, response) {
  const url = request.url;
  const extension = url.split('.')[1];
  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (extension === 'css' || extension === 'js' || extension === 'html' || extension === 'ico') {
    handlers.servePublic(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
};
