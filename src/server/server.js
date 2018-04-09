const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//TODO: Root relative which is problematic
//const google = require('../helpers/googleVisionAPI.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
  // Send the vision API back
  console.log(req);
  //google.visionAPI();
});

app.listen(8080);
