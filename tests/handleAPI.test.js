const test = require('tape');
const handleAPI = require('../src/handleAPI.js');
const noun = require('../src/words/nouns.json');
const verb = require('../src/words/verbs.json');
const adjective = require('../src/words/adjectives.json');
const adverb = require('../src/words/adverbs.json');

const jsonHolder = {
  noun,
  verb,
  adjective,
  adverb,
};

// console.log(handleAPI);


test('handleAPI control test', (t) => {
  t.plan(1);
  const query = 'a';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Aachen', 'Aarhus', 'Aaron', 'Abadan', 'Abaddon', 'Abbasid', 'Abbasids', 'Abbevillian', 'Abbotsford', 'Abbott'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be same as expected when passed a valid input');
});

test('handleAPI test', (t) => {
  t.plan(1);
  const query = '0';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Please only enter alphabetical characters'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be a warning if given invalid input');
});
