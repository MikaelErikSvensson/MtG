import React, { useContext } from "react";
import { Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import { RestaurantsNavigator } from "../navigation/restaurants.navigator";
import { SettingsNavigator } from "../navigation/settings.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

// const SettingsScreen = () => {
//   const { onLogout } = useContext(AuthenticationContext);
//   return (
//     <SafeArea>
//       <Text>Settings</Text>
//       <Button title="logout" onPress={() => onLogout()} />
//     </SafeArea>
//   );
// };

const tabBarIcon = () => <Ionicons name={"iconName"} size={size} color={color} />;

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return { tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} /> };
};

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
