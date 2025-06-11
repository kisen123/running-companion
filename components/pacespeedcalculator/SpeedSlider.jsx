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
        step={.5}
        onValueChange={(val) => {
          setSpeed(val); 
        }}

      />

    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  speedStyle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },

  slider: {
    width: 350,
  }
  
});



export default SpeedSlider;