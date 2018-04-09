// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

let visionAPI = function(image) {
  client
    .labelDetection(image)
    .then(results => {
      // Pull all labels from POST request
      const labels = [];
      results[0].labelAnnotations.forEach(function(element) {
        labels.push(element.description);
      })
      return labels;
    })

    // ERROR from Cloud Vision API
    .catch(err => {
      console.log(err);
      res.end('Cloud Vision Error:' , err);
    });
}

exports.visionAPI = visionAPI;
