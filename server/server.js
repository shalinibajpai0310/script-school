const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const data = require('../json/content.js');
app.get('/script-school/es6', (req, res) => {
  res.send(data);
});
app.listen(port, () => console.log(`Listening on port ${port}`));