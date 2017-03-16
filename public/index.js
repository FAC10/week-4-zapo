/*eslint-disable*/

// fetch on keyup

var inputs = document.querySelectorAll('input');

// foreach - fetch api

inputs.forEach (function(input) {
  input.addEventListener('keyup', function() {
    if (input.value === '') return;
    var url = makeUrl(input.name, input.id, input.value);
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
    console.log(option);
    datalist.appendChild(option);
  })
}

// contruct url

function makeUrl(type, id, query) {
  return 'https://warm-bayou-62114.herokuapp.com/api/words';
  // return 'https://warm-bayou-62114.herokuapp.com/api/words?type=' + type + '&id=' + id + '&query=' + query;
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
