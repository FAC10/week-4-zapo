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

function handleAPI(url) {
  const splitUrl = url.replace('/api/words?', '').split('&');

  const dataHolder = {};


  splitUrl.forEach((e) => {
    const keyValue = e.split('=');
    dataHolder[keyValue[0]] = keyValue[1];
  });

  dataHolder.query = dataHolder.query.replace(/[^A-z]|\[|\]/gi, '');

  if (dataHolder.query.length === 0) {
    return {
      id: dataHolder.id,
      words: ['Please only enter alphabetical characters'],
    };
  }
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
  return APIResponse;
}

module.exports = handleAPI;
