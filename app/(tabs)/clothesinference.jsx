import { Pressable, ScrollView, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { computer_LAN_IP, hosting_port } from '@env';

import CurrentWeatherInference, { getRandomWeather } from '../../components/clothesinference/CurrentWeatherInference.jsx'; // Adjust the import path as necessary
import ClothesPerCategory from '../../components/clotheschooser/ClothesPerCategory.jsx'; // Adjust the import path as necessary}

const Clothesinference = () => {

  

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

  // Simple helper to convert "None" strings to null in a flat object
  function convert_none_to_null(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key] = value === "None" ? null : value;
    }
    return result;
  }

  const train_ml_model = async () => {

    try {
        const response = await axios.get(`http://${computer_LAN_IP}:${hosting_port}/api/train_model`)
        return response.data
    } catch (error) {
        console.error('Error training the model in the back-end', error);
    }


  }

  const inference_ml_model = async (setSelectedImagesReal) => {

    try {

        const response = await axios.post(`http://${computer_LAN_IP}:${hosting_port}/api/inference_model`, { weather, clothesCategories })
        //const None_to_null = response.data.predictions.map()
        setSelectedImagesReal(convert_none_to_null(response.data.predictions))

        return response.data.predictions
    } catch (error) {
        console.error('Error training the model in the back-end', error);
    }


  }

  const handlePressOutTrainModel = async (props) => {

    try {

      // TODO
      // Write call to backend to train the model that is there.
      train_ml_model()

    } catch (error) {
        console.error('Error training the model in the backend', error)
    }

  }

  const handlePressOutInference = async (props) => {

    try {
    
      // TODO
      // Write call to backend to perform inference of decision tree model.
      inference_ml_model(setSelectedImagesReal)

      // Need to write logic for what images to show

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
    'Gloves': null,
    'Hats': null,
    'Leggings': null,
    'Running jackets': null,
    'Shoes': null,
    'Snoods': null,
    'Upper bodies': null
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

      <CurrentWeatherInference weather={weather} setWeather={setWeather} />

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
      

      <View style={styles.buttonsContainer}>
        <Pressable style={({ pressed }) => [styles.trainModelButton, pressed && styles.trainModelButtonPressed]} onPressOut={handlePressOutTrainModel} title="Button title">
          <Text style={styles.buttonText}>Train model</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.suggestClothesButton, pressed && styles.suggestClothesButtonPressed]} onPressOut={handlePressOutInference} title="Button title">
          <Text style={styles.buttonText}>Suggest clothes</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default Clothesinference

const styles = StyleSheet.create({

  flashBackground: {
    backgroundColor: 'blue',
  },

  buttonsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    paddingHorizontal: 60,
  },

  suggestClothesButton:{
    backgroundColor: '#99ddff',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
    paddingBottom: 10,
    paddingTop: 10
  },

  suggestClothesButtonPressed:{
    backgroundColor: '#66bbff',
    elevation: 1
  },

  trainModelButton:{
    backgroundColor: '#3066a3',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
    paddingBottom: 10,
    paddingTop: 10,
    opacity: 0.6
  },

  trainModelButtonPressed:{
    backgroundColor: '#3066a3',
    elevation: 1,
    opacity: 1
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '900'
  },

  clothesChooserWrapper: {
    flex: 1,
    color: 'white',
    paddingTop: 20,
    paddingBottom: 60, // Optional: adds space at top and bottom
  },

    // ...existing styles...
  plusOneContainer: {
    position: 'absolute',
    left: '30%',
    bottom: 50,
    transform: [{ translateX: -10 }],
    zIndex: 10,
  },
  plusOneText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#66bbff',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  // ...existing styles...

})