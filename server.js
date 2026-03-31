const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const dbPath = path.join(__dirname, 'server', 'db.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

// Health check (مهم جداً لـ Railway)
server.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API running' });
});

// CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
