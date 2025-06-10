import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
      <Text style={styles.footer}>Made by Kristian M Lian</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    footer: {
        position: 'absolute',
        fontSize: 10,
        color: '#666',
        bottom: 10
  },
})