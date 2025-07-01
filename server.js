const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Root endpoint for backward compatibility - returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// New endpoint returning "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
