const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//TODO: Root relative which is problematic
//const google = require('../helpers/googleVisionAPI.js');

//Hitting file limits on size, increased to 50mb
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



app.post('/upload', (req, res) => {
  // Send the vision API back
  console.log("Within server.js:" , req.body);
  //google.visionAPI();
});

app.listen(8080);
