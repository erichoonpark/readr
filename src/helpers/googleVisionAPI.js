// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

exports.visionAPI = async (filePath) => {
  const results = await client.webDetection(filePath);
  const labels = results[0].webDetection.webEntities.map(element => element.description)
  return labels.slice(0,5);
};
