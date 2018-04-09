// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

let visionAPI = function(type, image) {
  var types = ['labels'];
  // Choose what the Vision API should detect
  // Choices are: faces, landmarks, labels, logos, properties, safeSearch, texts
  var types = ['labels'];
  // Send the image to the Cloud Vision API
  client
  .labelDetection(image)
  .then(results => {
    if(results) {
      // Pull all labels from POST request
      const labels = [];
      results[0].labelAnnotations.forEach(function(element) {
        labels.push(element.description);
      })
      res.end(labels);
    }
    // ERROR from Cloud Vision API
    .catch(err => {
      console.log(err);
      res.end('Cloud Vision Error:' , err);
    });
}

exports.visionAPI = visionAPI;
