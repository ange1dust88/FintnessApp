import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DayOfTheWeek = ( {text} ) => {
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#363636',
    width: 30, 
    height: 30,
    borderRadius: 15, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#666666',
  },
});

export default DayOfTheWeek;
