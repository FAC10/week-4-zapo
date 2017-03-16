// const fs = require('fs');
// const path = require('path');
const handlers = require('./handler');
const noun = require('./words/nouns.json');
const verb = require('./words/verbs.json');
const adjective = require('./words/adjectives.json');
const adverb = require('./words/adverbs.json');

const jsonHolder = {
  noun,
  verb,
  adjective,
  adverb,
};

module.exports = function (request, response) {
  const url = request.url;
  const extension = url.split('.')[1];
  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (extension === 'css' || extension === 'js' || extension === 'html' || extension === 'ico') {
    handlers.servePublic(request, response);
  } else if (url.indexOf('/api/words') !== -1) {
    const splitUrl = url.replace('/api/words/?', '').split('&');

    const dataHolder = {};

    splitUrl.forEach((e) => {
      const keyValue = e.split('=');
      dataHolder[keyValue[0]] = keyValue[1];
    });

    // { type: 'noun', id: '0', query: 'abc' }
    const queryLetter = dataHolder.query[0];
    const letterArr = jsonHolder[dataHolder.type][queryLetter];


    handlers.handleAPI(response, { id: '4', words: ['aardvark', 'abacus', 'Aberdeen', 'Aldine'] });
  } else {
    handlers.pageNotFound(request, response);
  }
};
