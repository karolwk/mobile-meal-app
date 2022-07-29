import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/favorites.context';
import { MEALS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
const FavoritesScreen = () => {
  // const context = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) => context.ids.includes(meal.id));
  const mealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => mealIds.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
