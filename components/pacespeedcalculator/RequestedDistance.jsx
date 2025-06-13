
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Distance from './Distance'
import ProjectedTime from './ProjectedTime'

const RequestedDistance = ({ speed=0, requestedDistance }) => {
  return (
    <View>
      <Distance kmDistance={requestedDistance} />
      <ProjectedTime speed={speed} kmDistance={requestedDistance} />
    </View>
  )
}

export default RequestedDistance

const styles = StyleSheet.create({})


