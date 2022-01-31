const express = require('express');
const htmlPath = require('./routes/html');
const apiPath = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(htmlPath);
app.use(apiPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
