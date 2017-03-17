const test = require('tape');
const handleAPI = require('../../src/handlers/handleAPI.js');
const noun = require('../../src/words/nouns.json');
const verb = require('../../src/words/verbs.json');
const adjective = require('../../src/words/adjectives.json');
const adverb = require('../../src/words/adverbs.json');

const jsonHolder = {
  noun,
  verb,
  adjective,
  adverb,
};


test('handleAPI control test', (t) => {
  const query = 'a';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Aachen', 'Aarhus', 'Aaron', 'Abadan', 'Abaddon', 'Abbasid', 'Abbasids', 'Abbevillian', 'Abbotsford', 'Abbott'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be same as expected when passed a valid input');
  t.end();
});

test('handleAPI test with single number', (t) => {
  const query = '0';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Please only enter alphabetical characters'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be a warning if given invalid input');
  t.end();
});

test('handleAPI test with single dash', (t) => {
  const query = '-';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Please only enter alphabetical characters'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be a warning if given invalid input');
  t.end();
});

test('handleAPI test with string of invalid characters', (t) => {
  const query = '12345-+={}()';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Please only enter alphabetical characters'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be a warning if given invalid input');
  t.end();
});

test('handleAPI test with string with square brackets', (t) => {
  const query = '[';
  const url = `/api/words?type=noun&id=0&query=${query}`;
  const expected = {
    id: '0',
    words: ['Please only enter alphabetical characters'],
  };
  const actual = handleAPI(url);
  t.deepEqual(expected, actual, 'return value of handleAPI should be a warning if given invalid input');
  t.end();
});
