// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

exports.visionAPI = async (filePath) => {
  const results = await client.labelDetection(filePath)
  const labels = results[0].labelAnnotations.map(element => element.description)
  return labels
};
