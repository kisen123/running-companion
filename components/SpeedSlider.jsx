// components/SpeedSlider.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SpeedSlider = ({ value, onValueChange, min = 0.1, max = 30, step = 0.1 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Speed: {value.toFixed(1)}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default SpeedSlider;