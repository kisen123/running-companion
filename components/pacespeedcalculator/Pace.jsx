import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pace = ({ hours = '00', minutes = '00', seconds = '00', milliseconds = '000' }) => {
  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.timePart}>{hours}</Text>
          <Text style={styles.separator}> : </Text>
          <Text style={styles.timePart}>{minutes}</Text>
          <Text style={styles.separator}> : </Text>
          <Text style={styles.timePart}>{seconds}</Text>
          <Text style={styles.separator}> . </Text>
          <Text style={styles.milliseconds}>{milliseconds}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
  },
  timePart: {
    fontSize: 40,
    fontFamily: 'Courier',
    color: 'black',
  },
  milliseconds: {
    fontSize: 28,
    fontFamily: 'Courier',
    color: '#EE4422',
    alignSelf: 'flex-end',
  },
  separator: {
    fontSize: 40,
    color: '#888',
    fontFamily: 'Courier',
  },
});

export default Pace;