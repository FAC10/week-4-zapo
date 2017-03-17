const handlers = require('../handlers/handler');
const handleAPI = require('../handlers/handleAPI.js');

module.exports = function (request, response) {
  const url = request.url;
  const extension = url.split('.')[1];
  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (extension === 'css' || extension === 'js' || extension === 'html' || extension === 'ico') {
    handlers.servePublic(request, response);
  } else if (url.indexOf('/api/words') !== -1) {
    handlers.serveAPI(response, handleAPI(url));
  } else {
    handlers.pageNotFound(request, response);
  }
};
