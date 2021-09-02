import React from "react";
import styled from "styled-components";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favorite } from "../../../components/favorites/favorite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Icon, Info, Section, SectionEnd, Rating, RestaurantCard, RestaurantCardCover } from "./restaurant-info-card.styles";

// const mockRestaurant = {
//   name: "Zocalo",
//   icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//   photos: ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
//   address: "100 iron street",
//   isOpenNow: true,
//   rating: 4,
//   isClosedTemporarily: true,
// };

export const RestaurantInfoCard = ({ restaurant }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <Favorite restaurant={restaurant} />
        <RestaurantCardCover key={restaurant.name} source={{ uri: restaurant.photos[0] }} />
        <Info>
          <Text variant="label">{restaurant.name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => {
                return <SvgXml key={`star-${restaurant.placeId}-${i}`} xml={star} width={20} height={20} />;
              })}
            </Rating>
            <SectionEnd>
              {restaurant.isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
              <Spacer position="left" size="large">
                {restaurant.isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: restaurant.icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="caption">{restaurant.address}</Text>
        </Info>
      </RestaurantCard>
    </>
  );
};