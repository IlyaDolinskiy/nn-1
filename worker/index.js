'use strict'

const app = require('express')();

app.get('/', (req, res) => {
  res.send('Worker1');
});

app.listen(80, () => {});