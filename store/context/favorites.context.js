import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

import React from 'react';

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFaVIds) => [...currentFaVIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFaVIds) =>
      currentFaVIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
