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
  } else if (url.indexOf('/api/words') !== -1) {
    url = url.replace('/api/words/?', '').split('&');

    const dataHolder = {};

    myUrl = myUrl.forEach((e) => {
      const keyValue = e.split('=');
      dataHolder[a[0]] = a[1];
    });


    console.log(obj);

    console.log(url);

    handlers.handleAPI(response, { id: '4', words: ['aardvark', 'abacus', 'Aberdeen', 'Aldine'] });
  } else {
    handlers.pageNotFound(request, response);
  }
};
