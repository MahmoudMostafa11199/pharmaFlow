const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../server/db.json'));
const middlewares = jsonServer.defaults();

// Health check endpoint
server.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'PharmaFlow API' });
});

// CORS middleware
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(middlewares);
server.use(router);

// تصدير الدالة لـ Vercel
module.exports = server;
