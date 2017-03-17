const fs = require('fs');
const path = require('path');

// this file is only run a couple of times during the set up of the project to make the .txt files we got from the web into alphabetized .JSON files. After the initial set up it has no connection to our app.

let words = {};
// Loop through character codes from a-z and create a key in our word
// object for each one with an empty array ready for us to populate
for (let i = 97; i <= 122; i += 1) {
  words[String.fromCharCode(i)] = [];
}

// console.log(JSON.stringify(words));

function createJSONFile(filename) {
  console.log(filename.split('.')[0]);
  fs.writeFile(`${filename.split('.')[0]}.json`, JSON.stringify(words));
}

function buildObject(err, array, filename) {
  if (err) throw new Error(err);
  array.forEach((word) => {
    // console.log(words[word.charAt(0).toLowerCase()]);
    words[word.charAt(0).toLowerCase()].push(word);
  });
  createJSONFile(filename);
  words = {};
}

function processFile(err, file, filename) {
  if (err) throw new Error(err);
  buildObject(null, file.toString().split(/\r?\n/), filename);
}

function getFile(filename) {
  fs.readFile(path.join(__dirname, 'source-files', filename), (err, file) => {
    if (err) {
      processFile(err);
    } else {
      processFile(null, file, filename);
    }
  });
}

getFile(process.argv[2]);
