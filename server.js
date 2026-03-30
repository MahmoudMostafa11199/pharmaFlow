const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8099;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
