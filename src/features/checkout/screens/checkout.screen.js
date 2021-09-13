import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CartContext } from "../../../services/cart/cart.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartIconContainer, CartIcon, NameInput } from "../components/checkout.styles";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState("");

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer>
          <Spacer>
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map((c) => {
              return <List.Item title={`${c.item} - ${c.price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <CreditCardInput />
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />

        {name.length > 0 && <CreditCardInput name={name} />}
      </ScrollView>
    </SafeArea>
  );
};
