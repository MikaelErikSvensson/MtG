const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = functions.region("europe-west1").https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = functions.region("europe-west1").https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
