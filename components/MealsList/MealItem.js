import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('MealDetailScreen', { mealId: id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            complexity={complexity}
            duration={duration}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,

    elevation: 4,
    //iOs
    backgroundColor: 'white', // iOS neefs backGroundColor to view shadow
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' && 'hidden', // we make sure that ripple effect does not go beyond rounded corners
  },
  innerContainer: {
    //fix on lack of rounded corners on top of container
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    // effect of pressed button on iOS
    opacity: 0.5,
  },
});
