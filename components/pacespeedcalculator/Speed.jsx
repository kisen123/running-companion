// components/SpeedSlider.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const Speed = ({speed = 0}) => {
    

  return (
    <View style={styles.speedContainer}>

      <Text style={styles.speedValue}>{speed}</Text>
      <Text style={styles.SIUnit}>km/t</Text>

    </View>
  )
}



export default Speed;

const styles = StyleSheet.create({
  speedContainer: {
    flexDirection: 'row', // Add this line
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  speedValue: {
    fontSize: 50,
    fontWeight: 'bold',
    width: 150,
    textAlign: 'left', // Center the text within the width
  },
  SIUnit: {
    fontSize: 24, // Optional: adjust size for unit
    marginLeft: 8, // Optional: space between value and unit
  },
});