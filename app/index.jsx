import { StyleSheet, Text, View, Image } from 'react-native';

import { Link, Redirect } from 'expo-router';
 
import Logo from '../assets/img/runner-icon.png';

const Home = () => {
  
  return (
    <Redirect href="/home"/>
  )
  
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 5,
    fontSize: 10,
    color: '#666',
    marginTop: 20,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});