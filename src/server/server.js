const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//TODO: Root relative which is problematic
const google = require('../helpers/googleVisionAPI.js');

app.post('/upload', function (req, res) {
  // Send the vision API back
  google.visionAPI();
});

app.listen(8080);
