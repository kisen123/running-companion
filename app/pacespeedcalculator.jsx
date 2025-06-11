// Import necessary libraries
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Import components
import SpeedSlider from '../components/pacespeedcalculator/SpeedSlider';
import Pace from '../components/pacespeedcalculator/Pace';


// Import utils
import { calculatePace } from '../utils/calculations.js';

const Pacespeedcalculator = () => {

  // Here all of the conversion logic will be implemented

  // Initializing state variables for hours, minutes, seconds, and milliseconds
  // These will be used to display the time in the Pace component
  const [hours, setHours] = React.useState('00');
  const [minutes, setMinutes] = React.useState('00');
  const [seconds, setSeconds] = React.useState('00');
  const [milliseconds, setMilliseconds] = React.useState('000');

  // Initializing state variable for speed
  const [speed, setSpeed] = React.useState(0);


  // Using calculateSpeed utility function to convert pace to speed
  React.useEffect(() => {
    
    const calculatedSpeed = calculatePace(speed);
    
    setHours(calculatedSpeed.hours.toString().padStart(2, '0'));
    setMinutes(calculatedSpeed.minutes.toString().padStart(2, '0'));
    setSeconds(calculatedSpeed.seconds.toString().padStart(2, '0'));
    setMilliseconds(calculatedSpeed.milliseconds.toString().padStart(3, '0'));

  }, [speed]);
    

  return (
    <View style={styles.container}>
        <Pace hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
        <SpeedSlider speed={speed} setSpeed={setSpeed}/>
        <Text>Some text</Text>
    </View>
  )
}

export default Pacespeedcalculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})