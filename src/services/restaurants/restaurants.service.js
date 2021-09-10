import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(`https://europe-west1-mealstogo-9d2fb.cloudfunctions.net/placesNearby?location=${location}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
