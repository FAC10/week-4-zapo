QUnit.module('Check to see if tests are working', (asserts) => {
  QUnit.test('if 1, equal 1', (asserts) => {
    asserts.equal(1, 1, '1 does equal 1');
  });
});

QUnit.module('See if function makeUrl works', (asserts) => {
  QUnit.test('return the correct url', (asserts) => {
    asserts.equal(makeUrl('noun', '4', 'ab'), 'https://warm-bayou-62114.herokuapp.com/api/words?type=noun&id=4&query=ab', 'this creates the correct url');
  });

  QUnit.test('return the correct url', (asserts) => {
    asserts.equal(makeUrl('verb', '12', 'australia'), 'https://warm-bayou-62114.herokuapp.com/api/words?type=verb&id=12&query=australia', 'this creates the correct url');
  });
});

QUnit.module('Check if buildStory function is working', (asserts) => {
  QUnit.test('Check if buildStory function is working', (asserts) => {
    asserts.equal(buildStory(['Today', 'would', 'Thank', 'like', 'again', 'cat', 'shoebox', 'thursday', 'I', 'you', 'to', 'towards', 'me', 'being', 'computer'], null),
    'Today I am Today and would would like to Thank a like again. Hopefully my cat who is being a bit of a shoebox will stop trying to thursday me. Normally when I’m I, I like to you myself to until I feel towards again. Thank god I have a me to help me being computer.');
  });
  QUnit.test('Check if buildStory function is working', (asserts) => {
    asserts.equal(buildStory(['computer', 'cat', 'radio', 'rainbow', 'laces', 'hero', 'knife', 'cave', 'boulder', 'make', 'her', 'up', 'pink', 'table', 'goat'], null),
    'Today I am computer and would cat like to radio a rainbow laces. Hopefully my hero who is being a bit of a knife will stop trying to cave me. Normally when I’m boulder, I like to make myself her until I feel up again. Thank god I have a pink to help me table goat.');
  });
});
