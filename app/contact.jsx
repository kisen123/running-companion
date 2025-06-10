import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact the developer</Text>

      <Text style={styles.text}>molbachlian@gmail.com</Text>

      <Link href='/' style={styles.link}>Back to Home</Link>
    </View>
  )
}

export default Contact

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