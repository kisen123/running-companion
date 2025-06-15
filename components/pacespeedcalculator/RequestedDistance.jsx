
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Distance from './Distance'
import ProjectedTime from './ProjectedTime'

const RequestedDistance = ({ speed, requestedDistance, onChange, onRemove }) => {


  return (

    <View style={styles.requestedDistanceContainer}>
      <View style={styles.removeButtonContainer}>
        <Pressable style={({ pressed }) => [styles.removeButton, pressed && styles.removeButtonPressed]} onPress={onRemove}>
          <Text style={styles.removeButtonText}>-</Text>
        </Pressable>
      </View>

      <View style={styles.requestedDistanceAndProjectedTimeContainer}>
        <Distance kmDistance={requestedDistance} onChange={onChange} />
        <ProjectedTime speed={speed} kmDistance={parseFloat(requestedDistance)} />
      </View>

    </View>
  )
}

export default RequestedDistance

const styles = StyleSheet.create({
  requestedDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 120,
    gap: 30,
  },

  removeButtonContainer : {
    position: 'absolute',
    left: -70,
    top: '20%',
  },

  removeButton: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 6,
    overflow: 'hidden'
  },

  removeButtonPressed: {
    backgroundColor: 'darkred'
  },

  removeButtonText: {
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 28
  },

  requestedDistanceAndProjectedTimeContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 6
  }
})