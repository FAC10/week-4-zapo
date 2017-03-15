/*eslint-disable*/

// fetch on keyup

var inputs = document.querySelectorAll('input');

// foreach - fetch api

inputs.forEach (function(e) {
  e.addEventListener('keyup', function() {
    var url = makeUrl(e.name, e.id, e.value);
    fetch('GET', url, showSuggestions);
  })
})

// DOM update function

function showSuggestions(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  data.words.forEach(function(e) {
    console.log('working');
    // var option = document.createElement('option');
    // console.log(option);
    // option.value = e;
    document.getElementById('suggested-' + data.id).innerHTML+='<option value="' + e + '"/>';
  })
}

// contruct url

function makeUrl(type, id, query) {
  return 'https://warm-bayou-62114.herokuapp.com/api/words';
  // return 'harokuthing/api/words/?type=' + type + '&id=' + id + '&query=' + query;
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
