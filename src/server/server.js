const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: './uploads' });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
//TODO: Root relative which is problematic
const google = require('../helpers/googleVisionAPI.js');

//Hitting file limits on size, increased to 50mb
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(require('express-promise')());

app.post('/upload', upload.single('image'), async (req, res) => {
  const labels = await google.visionAPI(req.file.path);
  console.log("In server.js:" , labels);
  res.json(labels)




  // google.visionAPI(req.file.path).then(function(labels) {
  //   console.log('server.js: ' , labels);
  //   res.send(labels);
  // })
});

app.listen(8080);
