// Import necessary libraries
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';
import React from 'react';

// Import components
import SpeedSlider from '../components/pacespeedcalculator/SpeedSlider';
import Pace from '../components/pacespeedcalculator/Pace';

// Import utils
import { calculatePace } from '../utils/calculations.js';
import RequestedDistance from '../components/pacespeedcalculator/RequestedDistance.jsx';

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

  const [distances, setDistances] = React.useState([]);

  const [requestedDistance, setRequestedDistance] = React.useState(42.195); // Default marathon distance in km


  const handlePressIn = (props) => {
    // This function can be used to handle the end of a press event if needed
    // For now, it does nothing
  }

  const handlePressOut = () => {

    setDistances(prev => [...prev, <RequestedDistance key={prev.length} speed={speed} setSpeed={setSpeed} requestedDistance={requestedDistance} setRequestedDistance={setRequestedDistance}/>])
  }

  // Using calculateSpeed utility function to convert pace to speed
  React.useEffect(() => {
    
    const calculatedSpeed = calculatePace(speed);
    
    setHours(calculatedSpeed.hours.toString().padStart(2, '0'));
    setMinutes(calculatedSpeed.minutes.toString().padStart(2, '0'));
    setSeconds(calculatedSpeed.seconds.toString().padStart(2, '0'));
    setMilliseconds(calculatedSpeed.milliseconds.toString().padStart(3, '0'));

  }, [speed]);


  return (
  <View style={styles.pacespeedpage}>

    <View style={styles.projectedTimeSection}>
      {distances.map((distanceComponent) => distanceComponent)}
    </View>

    <View style={styles.addDistancesButtonContainer}>
      <Pressable style={({ pressed }) => [styles.addDistancesButton, pressed && styles.addDistancesButtonPressed]} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text style={styles.addDistancesButtonText}>+ Add distance</Text>
      </Pressable>
    </View>


    <Pace hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
    <View style={styles.bottomGroup}>
      <SpeedSlider speed={speed} setSpeed={setSpeed}/>
    </View>
  </View>
  
  )
}

export default Pacespeedcalculator

const styles = StyleSheet.create({
  pacespeedpage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'cyan',
    paddingBottom: 60 // Optional: adds space at top and bottom
  },
  bottomGroup: {
    alignItems: 'center',
    width: '100%',
    gap: 50, // Or use marginTop on Text if gap is not supported
  },
  projectedTimeSection: {
    //flexDirection: 'column',
    //alignItems: 'center',
    marginBottom: 80,
    gap: 20,
    backgroundColor: 'red',
  },

  addDistancesButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 5,
  },

  addDistancesButton: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 6,
    overflow: 'hidden'
  },

  addDistancesButtonPressed: {
    backgroundColor: 'darkgray',
    elevation: 3
  },

  addDistancesButtonText: {
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 56
  }
});