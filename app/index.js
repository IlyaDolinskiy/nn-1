'use strict'

const app = require('express')();

app.get('/', (req, res) => {
  res.send('App!');
});

app.listen(8080, () => {});