import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const RootLayout = () => {
  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      </Stack>
    
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