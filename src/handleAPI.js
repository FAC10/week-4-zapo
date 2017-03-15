function handleAPI(response, api) {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify(api));
}

module.exports = handleAPI;
