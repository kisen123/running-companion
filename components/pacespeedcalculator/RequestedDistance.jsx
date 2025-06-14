
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Distance from './Distance'
import ProjectedTime from './ProjectedTime'

const RequestedDistance = ({ speed, requestedDistance, onChange }) => {

  

  return (
    <View>
      <Distance kmDistance={requestedDistance} onChange={onChange} />
      <ProjectedTime speed={speed} kmDistance={requestedDistance} />
    </View>
  )
}

export default RequestedDistance

const styles = StyleSheet.create({})


