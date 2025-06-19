import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';
import { computer_LAN_IP, hosting_port } from '@env';

import CurrentWeather from '../../components/clotheschooser/CurrentWeather.jsx'; // Adjust the import path as necessary
import ClothesPerCategory from '../../components/clotheschooser/ClothesPerCategory.jsx'; // Adjust the import path as necessary}

const Clotheschooser = () => {

  const handlePressOut = async (props) => {

    try {

    
      
    // TODO: Implement the logic to handle the press out event
    // This function will send of the selected images to the backend 

    axios.post(`http://${computer_LAN_IP}:${hosting_port}/training_data`, {
      training_data: selectedImages,
    }
    ).then(response => {
      console.log('Data sent successfully:', response.data);
    }
    ).catch(error => {
      console.error('Error sending data to backend: ', error);
    })



    // Resetting the selected images to null for all categories
    setSelectedImages({
      'Hats': null,
      'Upper body': null,
      'Leggings': null,
      'Socks': null,
    });
    } 
    catch (error) {
      console.error('Error sending data to backend: ', error);
    }


  }

  const hat_images = [
    { id: '7', source: require('../../assets/test_imgs/hats/hat_1.jpg') },
    { id: '8', source: require('../../assets/test_imgs/hats/hat_2.jpg') },
    { id: '9', source: require('../../assets/test_imgs/hats/hat_1.jpg') },
    { id: '10', source: require('../../assets/test_imgs/hats/hat_2.jpg') },
  ];


  const upper_body_images = [
    { id: '1', source: require('../../assets/test_imgs/upper_body/t_shirt_1.jpg') },
    { id: '2', source: require('../../assets/test_imgs/upper_body/t_shirt_2.png') },
  ];

    const leggings_images = [
    { id: '3', source: require('../../assets/test_imgs/leggings/leggings_1.png') },
    { id: '4', source: require('../../assets/test_imgs/leggings/leggings_2.jpg') },
  ];

  const socks_images = [
    { id: '5', source: require('../../assets/test_imgs/socks/socks_1.jpg') },
    { id: '6', source: require('../../assets/test_imgs/socks/socks_2.jpg') },
  ];






  const [selectedImages, setSelectedImages] = React.useState({
    'Hats': null,
    'Upper body': null,
    'Leggings': null,
    'Socks': null,
  });

  // Handler to update the selected image for a category
  const handleSelectImage = (category, imageId) => {
    setSelectedImages(prev => ({
      ...prev,
      [category]: imageId
    }));
  };

  return (
    <View style={styles.clothesChooserWrapper}>

      <CurrentWeather />

      <ScrollView  showsHorizontalScrollIndicator={false} contentContainerStyle= {{ paddingBottom: 140 }}>

        <ClothesPerCategory categoryName={"Hats"} images={hat_images} selectedImageId={selectedImages['Hats']} onSelectImage={handleSelectImage} />
        <ClothesPerCategory categoryName={"Upper body"} images={upper_body_images} selectedImageId={selectedImages['Upper body']} onSelectImage={handleSelectImage} />
        <ClothesPerCategory categoryName={"Leggings"} images={leggings_images} selectedImageId={selectedImages['Leggings']} onSelectImage={handleSelectImage} />
        <ClothesPerCategory categoryName={"Socks"} images={socks_images} selectedImageId={selectedImages['Socks']} onSelectImage={handleSelectImage} />


      </ScrollView>
      

      <View style={styles.addTrainingDataButtonContainer}>
        <Pressable style={({ pressed }) => [styles.addTrainingDataButton, pressed && styles.addTrainingDataButtonPressed]} onPressOut={handlePressOut} title="Button title">
          <Text style={styles.addTrainingDataButtonText}>Add training data</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Clotheschooser

const styles = StyleSheet.create({

  flashBackground: {
    backgroundColor: 'blue',
  },

  addTrainingDataButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    paddingHorizontal: 60,
  },

  addTrainingDataButton:{
    backgroundColor: '#99ddff',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
    paddingBottom: 10,
    paddingTop: 10
  },

  addTrainingDataButtonPressed:{
    backgroundColor: '#66bbff',
    elevation: 1
  },

  addTrainingDataButtonText: {
    fontSize: 20,
    fontWeight: '900'
  },

  clothesChooserWrapper: {
    flex: 1,
    color: 'white',
    paddingTop: 20,
    paddingBottom: 60, // Optional: adds space at top and bottom
  },

})