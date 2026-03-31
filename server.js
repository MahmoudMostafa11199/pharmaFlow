const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Test server is running' }));
});
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Test server on port ${port}`));
