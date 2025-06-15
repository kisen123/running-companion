import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../../assets/img/runner-icon.png';

const home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Running Companion v1.0</Text>

      <Text style={styles.text}>Welcome to the app!</Text>

      <Link href="/about" style={styles.link} >About page</Link>
      <Link href="/contact" style={styles.link} >Contact</Link>

      <Link href="/pacespeedcalculator" style={[styles.link, {marginTop: 100}]}>Pace/Speed Calculator</Link>
      <Link href="/clotheschooser" style={[styles.link]}>Clothes suggestions engine</Link>
    </View>
  )
}

export default home

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