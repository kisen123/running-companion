// components/SpeedSlider.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const Speed = ({speed = 0}) => {
    

  return (
    <View >

      <Text>{speed} km/t</Text>

    </View>
  )
}



export default Speed;