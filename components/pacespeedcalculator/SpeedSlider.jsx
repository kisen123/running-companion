// components/SpeedSlider.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Speed from './Speed';

const SpeedSlider = ({ speed, setSpeed }) => {
  

  return (
    <View style={styles.container}>
      <Speed speed={speed} />
      <Slider 
        style={styles.slider}
        minimumValue={0}
        maximumValue={40}
        minimumTrackTintColor='tomato'
        maximumTrackTintColor='#000'
        thumbTintColor='tomato'
        step={.1}
        onValueChange={(val) => {
          const roundedVal = Number(val.toFixed(1)); // Round to one decimal place
          setSpeed(roundedVal); 
        }}
        trackStyle={{ height: 16, borderRadius: 8 }} // Add this line for thicker track
        thumbStyle={{ height: 32, width: 32, borderRadius: 16 }} // Add this for a bigger thumb

      />

    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  speedStyle: {
    fontSize: 50,
    color: '#333',
    marginBottom: 20,
  },

  slider: {
    width: 350,
  }
  
});



export default SpeedSlider;