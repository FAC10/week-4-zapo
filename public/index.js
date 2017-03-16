  /*eslint-disable*/

// fetch on keyup

var inputs = document.querySelectorAll('input');

// foreach - fetch api

inputs.forEach (function(input) {
  input.addEventListener('keyup', function() {
    var value = input.value.replace(/[^A-z]/gi, '');
    if (value === '') return;
    var url = makeUrl(input.name, input.id, value);
    fetch('GET', url, showSuggestions);
  })
})

// DOM update function

function showSuggestions(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  var datalist = document.getElementById('suggested-' + data.id);
  datalist.innerHTML = '';
  data.words.slice(0, 10).forEach(function(word) {
    var option = document.createElement('option');
    option.value = word;
    datalist.appendChild(option);
  })
}

// construct url

function makeUrl(type, id, query) {
  return 'https://warm-bayou-62114.herokuapp.com/api/words?type=' + type + '&id=' + id + '&query=' + query;
}

// fetch request

function fetch(method, url, handleResponseCallback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonObj = JSON.parse(xhr.responseText);
      handleResponseCallback(null, jsonObj);
    }
  };
  xhr.onerror = function () {
    handleResponseCallback('Api response error');
  };
  xhr.open(method, url, true);
  xhr.send();
}

// Building story

var form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
  var arr = [];
function handleSubmit(event) {
  event.preventDefault();
  Object.keys(event.target).forEach(function(key) {
    arr.push(event.target[key].value);
  })
  form.style = 'display:none';
  buildStory(arr, resultsOnDOM);
}

function buildStory(words, cb) {
  var story = 'Today I am ' + words[0] + ' and would ' + words[1]+ ' like to ' + words[2]+ ' a ' + words[3] + ' ' + words[4] + '. Hopefully my ' + words[5] + ' who is being a bit of a ' + words[6] + ' will stop trying to ' + words[7] + ' me. Normally when I’m ' + words[8] + ', I like to ' + words[9] + ' myself ' + words[10] + ' until I feel ' + words[11] + ' again. Thank god I have a ' + words[12] + ' to help me ' + words[13] + ' ' + words[14] + '.';
  if (cb) {
  cb(story);
}
  return story;
}

function resultsOnDOM(toAdd) {
var paragraph = document.createElement('p');
var div = document.createElement('div');
paragraph.textContent = toAdd;
paragraph.className = 'result';
div.id = 'button';
var app = document.getElementById('app');
app.appendChild(paragraph);
app.appendChild(div);
div.appendChild(reset);
}

// reset

var reset = document.getElementById('reset');
reset.addEventListener('click', function() {
  location.reload();
})
