// TODO!

// components/PaceSlider.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const PaceSlider = () => {
  const [value, setValue] = React.useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.speedStyle}>{value} min/km</Text>
      <Slider 
        style={styles.slider}
        minimumValue={0}
        maximumValue={40}
        minimumTrackTintColor='tomato'
        maximumTrackTintColor='#000'
        thumbTintColor='tomato'
        step={.5}
        onValueChange={(val) => {
          setValue(val); 
        }}

      />

    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    top: '70%',
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


export default PaceSlider;