import createStripe from "stripe-client";
import { host } from "../../utils/env";
const stripe = createStripe("pk_test_51JXguXCJJwSgtf0F25a5UgZBWziOmMTZiRvicKZkyc6vXJFYTfdhlBgPP9voxlxmjXNHmgY0AJadNLxXclkVITMs00oA5RUZIc");

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};
export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
