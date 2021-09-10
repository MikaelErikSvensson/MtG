const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

exports.geocode = functions.region("europe-west1").https.onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = functions.region("europe-west1").https.onRequest((request, response) => {
  placesRequest(request, response);
});
