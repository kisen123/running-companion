import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Slider from '../components/SpeedSlider'



const Pacespeedcalculator = () => {
  return (
    <View>
      <Text>Here some work is needed :D</Text>
      <Slider
        value={5}
        onValueChange={(value) => console.log(value)}
        min={0.1}
        max={30}
        step={0.1}
        />
    </View>
  )
}

export default Pacespeedcalculator

const styles = StyleSheet.create({})