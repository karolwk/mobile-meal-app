import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Subtitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#c3916f',
    fontSize: 18,
    fontWeight: 'bold',

    padding: 6,
    textAlign: 'center',
    borderBottomColor: '#c3916f',
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
  },
});
