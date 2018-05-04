const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: './uploads' });
const storage = multer.diskStorage({
    // Save images to the uploads folder
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // Naming convention for new uploaded files
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// Google middleware to access Vision API
const google = require('../helpers/googleVisionAPI.js');

//Hitting file limits on size, increased to 50mb
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(require('express-promise')());

app.post('/upload', upload.single('image'), async (req, res) => {
  const labels = await google.visionAPI(req.file.path);
  console.log(labels);
  res.json(labels);
});

app.listen(8080);
