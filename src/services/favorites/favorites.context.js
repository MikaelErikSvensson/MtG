import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const { user } = useContext(AuthenticationContext);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
      // saving error
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      return value != null ? setFavorites(JSON.parse(value)) : null;
    } catch (e) {
      console.log("error loading", e);
      // error reading value
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}>
      {children}
    </FavoritesContext.Provider>
  );
};
