import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { calculateAvgProjectedTime } from '../../utils/calculations'

const ProjectedTime = ({ speed, kmDistance }) => {

  const {hours, minutes, seconds, milliseconds} = calculateAvgProjectedTime(speed, kmDistance);
    
  return (
    <View style={styles.projectedTimeContainer}>
      <Text>{hours}</Text>
      <Text> : </Text>
      <Text>{minutes}</Text>
      <Text> : </Text>
      <Text>{seconds}</Text>
      <Text> : </Text>
      <Text>{milliseconds}</Text>
    </View>
  )
    





}

export default ProjectedTime

const styles = StyleSheet.create({

    projectedTimeContainer: {
        flexDirection: 'row'
    }

})