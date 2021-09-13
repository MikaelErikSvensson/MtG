import createStripe from "stripe-client";

const stripe = createStripe("pk_test_51JXguXCJJwSgtf0F25a5UgZBWziOmMTZiRvicKZkyc6vXJFYTfdhlBgPP9voxlxmjXNHmgY0AJadNLxXclkVITMs00oA5RUZIc");

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};
