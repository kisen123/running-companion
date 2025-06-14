
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Distance from './Distance'
import ProjectedTime from './ProjectedTime'

const RequestedDistance = ({ speed, setSpeed, requestedDistance, setRequestedDistance }) => {

  

  return (
    <View>
      <Distance kmDistance={requestedDistance} onChangeText={setRequestedDistance} />
      <ProjectedTime speed={speed} setSpeed={setSpeed} kmDistance={requestedDistance} />
    </View>
  )
}

export default RequestedDistance

const styles = StyleSheet.create({})


