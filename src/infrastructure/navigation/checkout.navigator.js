import React from "react";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen name="CheckoutSuccess" component={CheckoutSuccessScreen} />
      <CheckoutStack.Screen name="CheckoutError" component={CheckoutErrorScreen} />
    </CheckoutStack.Navigator>
  );
};
