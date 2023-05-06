const config = require('./server/config');
const express = require('express')
const app = require("./server/app")
const next = require('next');

const port = config.port;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  // Use existing express app as middleware
  server.use(app);

  // Handle Next.js requests
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});