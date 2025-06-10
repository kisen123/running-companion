import { StyleSheet, Text, View } from 'react-native'

import { Link } from 'expo-router'

import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About page</Text>
      <Text style={styles.text}>This app was created as a portfolio project, as well as serve as a tool for running.</Text>

      <Link href="/" style={styles.link}>Back to home</Link>
    </View>
  )
}

export default About

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
    borderBottomWidhth: 10
  },
});