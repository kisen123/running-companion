import { Tabs } from 'expo-router'


export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="clotheschooser" options={{ title: "Clothes suggestion engine" }}/>
            <Tabs.Screen name="pacespeedcalculator" options={{ title: "Pace/Speed calculator" }}/>

        </Tabs>
    )
}