import React, { useLayoutEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const routeH = useRoute(); // alternative hook to route prop

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // We use this hook in situations when we want to do something simultaneously when component is rendered
  useLayoutEffect(() => {
    // The other method to set settings of react navigation dynamicly
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
