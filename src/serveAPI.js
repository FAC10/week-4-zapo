function serveAPI(response, api) {
  response.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
  response.end(JSON.stringify(api));
}

module.exports = serveAPI;
