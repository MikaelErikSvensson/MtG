import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as firebase from "firebase";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "./src/components/utility/safe-area.component";
import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation/index";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCc3duSq-2l9ZoclV7sTjzpLepflq0dAsY",
  authDomain: "mealstogo-9d2fb.firebaseapp.com",
  projectId: "mealstogo-9d2fb",
  storageBucket: "mealstogo-9d2fb.appspot.com",
  messagingSenderId: "726254523752",
  appId: "1:726254523752:web:dd9ed763d910196655f2dd",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};

const tabBarIcon = () => <Ionicons name={"iconName"} size={size} color={color} />;

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return { tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} /> };
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword("tmikaelsv@gmail.com", "password")
  //       .then((user) => {
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, 2000);
  // }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
