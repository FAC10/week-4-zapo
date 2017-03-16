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

    // const dataHolder = { type: 'noun', id: '0', query: 'aus' };
    const queryLetter = dataHolder.query[0];
    let letterArr = jsonHolder[dataHolder.type][queryLetter.toLowerCase()];

    letterArr = letterArr.filter((value) => {
      const noCase = value.toLowerCase();
      return noCase.startsWith(dataHolder.query.toLowerCase());
    });
    const APIResponse = {};
    APIResponse.id = dataHolder.id;
    APIResponse.words = letterArr.slice(0, 10);

    handlers.handleAPI(response, letterArr);
  } else {
    handlers.pageNotFound(request, response);
  }
};
