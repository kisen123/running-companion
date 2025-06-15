import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Distance = ({ kmDistance, onChange }) => {
  return (
    <View style={styles.distanceStyles}>
      <TextInput style={styles.distanceText} keyboardType="numeric" onChangeText={onChange} value={kmDistance}></TextInput>
      <Text style={styles.distanceUnit}> km</Text>
    </View>
  )
}

export default Distance

const styles = StyleSheet.create({
    distanceStyles: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    distanceText: {
        fontSize: 18,
        fontWeight: '900',
        marginRight: 8, // Space between value and unit
    },

    distanceUnit: {
        fontSize: 18,
        fontWeight: '200',
    },
})