import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { computer_LAN_IP, hosting_port } from '@env';

import CurrentWeather, { getRandomWeather } from '../../components/clotheschooser/CurrentWeather.jsx'; // Adjust the import path as necessary
import ClothesPerCategory from '../../components/clotheschooser/ClothesPerCategory.jsx'; // Adjust the import path as necessary}

const Clotheschooser = () => {

  

  const fetch_clothes = async (category) => {

    try {
      const response = await axios.get(`http://${computer_LAN_IP}:${hosting_port}/api/images/${category}`);
      return response;
    } catch (error) {
      console.error('Error fetching image URLs', error);
      return null;
    }

  }



  const fetch_clothes_categories = async () => {

    try {
      const response = await axios.get(`http://${computer_LAN_IP}:${hosting_port}/api/images/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching image categories', error);
      return null;
    }

  }

  const add_training_data = async (selectedImages, weather) => {

    try {

      // Constructing the training data payload
      const training_data_payload = {
        "training_data": { "features": weather, "labels": selectedImages }
      }

      const response = await axios.post(`http://${computer_LAN_IP}:${hosting_port}/api/training_data`, training_data_payload);
      console.log('Data sent successfully: ', response.data)
      return response;
    } catch (error) {
      console.error('Error adding training data', error);
      return null;
    }

  }


  const handlePressOut = async (props) => {

    try {

    
    // Sends of training data to the backend
    add_training_data(selectedImagesReal, weather);

    // Resets the selected images and weather
    // TODO: Collect this information model from the back end in a future version
    setSelectedImagesReal({
      'gloves': null,
      'hats': null,
      'leggings': null,
      'running_jackets': null,
      'shoes': null,
      'snoods': null,
      'upper_bodies': null
    });
    setWeather(getRandomWeather());
    

    } 
    catch (error) {
      console.error('Error sending data to backend: ', error);
    }


  }

  /* Instantiating some important React hooks */
  //
  //
  const [clothesCategories, setClothesCategories] = useState([])

  // TODO for future version - collect this information model from the back end.
  const [selectedImagesReal, setSelectedImagesReal] = React.useState({
    'gloves': null,
    'hats': null,
    'leggings': null,
    'running_jackets': null,
    'shoes': null,
    'snoods': null,
    'upper_bodies': null
  });

  
  const [weather, setWeather] = React.useState(getRandomWeather());

  //
  //
  /* Instantiating some important React hooks */


    // Handler to update the selected image for a category
  const handleSelectImageReal = (category, imageId) => {
    setSelectedImagesReal(prev => ({
      ...prev,
      [category]: imageId
    }));
  };

  

  
  // On mount, we fetch the clothes image metadata from the back end
  useEffect(() => {

    // Function definition
    const fetch_clothes_from_backend = async () => {

      try {
        const clothes_categories = await fetch_clothes_categories()
        setClothesCategories(clothes_categories);
        console.log("Images successfully collected from the backend")
      } catch (error) {
        console.error("Error collecting images from the backend")
      }
    }

    // Function call
    fetch_clothes_from_backend()

  }, [])
  
  

  return (
    <View style={styles.clothesChooserWrapper}>

      <CurrentWeather weather={weather} setWeather={setWeather} />

      <ScrollView  showsHorizontalScrollIndicator={false} contentContainerStyle= {{ paddingBottom: 140 }}>

        {/* Looping through the different clothing categories */}
        {
          clothesCategories.map(clothesCategory => {
          return (
          <ClothesPerCategory 
            key={clothesCategory?.image_category}
            categoryName={clothesCategory?.image_category} 
            images={clothesCategory?.images} 
            selectedImageId={selectedImagesReal[clothesCategory?.image_category]} 
            onSelectImage={handleSelectImageReal} />
          )
          })
        }



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