import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
      console.log("storing data");
    } catch (e) {
      console.log("error storing", e);
      // saving error
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      console.log("loading data");
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
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}>
      {children}
    </FavoritesContext.Provider>
  );
};
