import camelize from "camelize";
import axios from "axios";

export const locationRequest = (searchTerm) => {
  return fetch(`https://europe-west1-mealstogo-9d2fb.cloudfunctions.net/geocode?city=antwerp`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
