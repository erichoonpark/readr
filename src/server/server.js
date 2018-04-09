const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ dest: './uploads' });
//TODO: Root relative which is problematic
const google = require('../helpers/googleVisionAPI.js');

//Hitting file limits on size, increased to 50mb
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



app.post('/upload', upload.single('image'),(req, res) => {
  // Send the vision API back
  res.send(google.visionAPI(req.file.path));
});

app.listen(8080);
