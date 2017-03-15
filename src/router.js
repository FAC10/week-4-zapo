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

  } else if (url === '/api/words') {

    handlers.handleAPI(response, { id: '4', words: ['aardvark', 'abacus', 'Aberdeen', 'Aldine'] });

  } else {
    handlers.pageNotFound(request, response);
  }
};
