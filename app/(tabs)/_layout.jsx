import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons' // Add this import


export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{ title: "Home", tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"}
                            size={focused ? 30 : 28}
                            color="black"
                        />
                )}}
            
            />
            <Tabs.Screen 
                name="clotheschooser" 
                options={{ title: "Sampling", tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "barbell" : "barbell-outline"}
                            size={focused ? 30 : 28}
                            color="black"
                        />
                )}}

            />
            <Tabs.Screen 
                name="clothesinference" 
                options={{ title: "Clothes", tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "shirt" : "shirt-outline"}
                            size={focused ? 30 : 28}
                            color="black"
                        />
                )}}

            />
            <Tabs.Screen 
                name="pacespeedcalculator" 
                options={{ title: "Pace/Speed", tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "speedometer" : "speedometer-outline"}
                            size={focused ? 30 : 28}
                            color="black"
                        />
                )}}
            
            />
        </Tabs>
    )
}