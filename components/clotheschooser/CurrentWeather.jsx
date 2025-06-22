import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const weatherOptions = [
  "Clear", "Cloudy", "Fog", "Partly Cloudy"
];
const sessionTypes = [
  "Easy Run", "Intervals", "Long Run"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min, max, decimals = 1) {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(decimals));
}

export const getRandomWeather = () => {
  
  const wind_speed = getRandomInt(0, 10);
  const wind_gust = getRandomInt(wind_speed, wind_speed + 10)
  
  return {
    temperature: getRandomInt(-10, 25),
    weather: weatherOptions[getRandomInt(0, weatherOptions.length - 1)],
    wind_speed: wind_speed,
    wind_gust: wind_gust,
    type_of_session: sessionTypes[getRandomInt(0, sessionTypes.length - 1)],
  }};

const weatherIcons = {
  "Clear": <MaterialCommunityIcons name="weather-sunny" size={32} color="#f9d71c" />,
  "Cloudy": <MaterialCommunityIcons name="weather-cloudy" size={32} color="#b0b0b0" />,
  "Rain": <MaterialCommunityIcons name="weather-rainy" size={32} color="#4a90e2" />,
  "Snow": <MaterialCommunityIcons name="weather-snowy" size={32} color="#b3e6ff" />,
  "Fog": <MaterialCommunityIcons name="weather-fog" size={32} color="#b0b0b0" />,
  "Partly Cloudy": <MaterialCommunityIcons name="weather-partly-cloudy" size={32} color="#f9d71c" />,
};

const sessionIcons = {
  "Easy Run": <FontAwesome5 name="running" size={32} color="#4a90e2" />,
  "Intervals": <MaterialCommunityIcons name="timer-sand" size={32} color="#e67e22" />,
  "Long Run": <FontAwesome5 name="road" size={32} color="#27ae60" />,
};

const CurrentWeather = ({ weather, setWeather }) => {

  // Handler for refresh button
  const handleRefresh = () => {
    setWeather(getRandomWeather());
  }

  // Optionally, randomize on mount or on button press
  // React.useEffect(() => { setWeather(getRandomWeather()); }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Weather data sample</Text>

      <View style={styles.weatherVariablesContainer}>

        <View style={styles.weatherVariableWrapper}>
          <MaterialCommunityIcons name="thermometer" size={32} color="#000000" />
          <Text>{weather.temperature}°C</Text>
        </View>

        <View style={styles.weatherVariableWrapper}>
          {weatherIcons[weather.weather] || <MaterialCommunityIcons name="cloud-question" size={32} color="#888" />}
          <Text>{weather.weather}</Text>
        </View>
        
        <View style={styles.weatherVariableWrapper}>
          <Feather name="wind" size={32} color="#3498db" />
          <Text>{weather.wind_speed} ({weather.wind_gust}) m/s</Text>
        </View>
        
        <View style={styles.weatherVariableWrapper}>
          {sessionIcons[weather.type_of_session] || <MaterialCommunityIcons name="help-circle" size={32} color="#888" />}
          <Text>{weather.type_of_session}</Text>
        </View>

        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
          <MaterialCommunityIcons name="refresh" size={28} color="#007AFF" />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e6f7ff',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center'
  },

  weatherVariablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },

  weatherVariableWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },

  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#d0eaff',
    borderRadius: 8
  },
})