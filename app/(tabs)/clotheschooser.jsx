import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { computer_LAN_IP, hosting_port } from '@env';

import CurrentWeather from '../../components/clotheschooser/CurrentWeather.jsx'; // Adjust the import path as necessary
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

  const add_training_data = async (selectedImages) => {

    try {
      const response = await axios.post(`http://${computer_LAN_IP}:${hosting_port}/api/training_data`, { training_data: selectedImages });
      console.log('Data sent successfully: ', response.data)
      return response;
    } catch (error) {
      console.error('Error adding training data', error);
      return null;
    }

  }


  const handlePressOut = async (props) => {

    try {

    
      
    // TODO: Implement the logic to handle the press out event
    // This function will send of the selected images to the backend 

    add_training_data(selectedImages);


    
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

  

  /*
  clothes_categories.map(category => {
    console.log(category)
  })
    */

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

    const gloves_images = [
    { id: '7', source: require('../../assets/test_imgs/socks/socks_1.jpg') },
    { id: '8', source: require('../../assets/test_imgs/socks/socks_2.jpg') },
  ];


  const [clothesCategories, setClothesCategories] = useState([]);


  const [selectedImagesReal, setSelectedImagesReal] = React.useState({
    'gloves': null,
    'hats': null,
    'leggings': null,
    'running_jackets': null,
    'shoes': null,
    'snoods': null,
    'upper_bodies': null
  });


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

    // Handler to update the selected image for a category
  const handleSelectImageReal = (category, imageId) => {
    setSelectedImagesReal(prev => ({
      ...prev,
      [category]: imageId
    }));
  };


  
  // On mount, we fetch the clothes from the back end
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
  
  const testclothesCategories = {'category_id': '3', 'image_category': 'leggings', 'images': [
    {'image_id': '6', 'image_url': '../../assets/test_imgs/hats/hat_1.jpg'},
    {'image_id': '7', 'image_url': 'https://media.istockphoto.com/id/2202835351/photo/delicate-pink-tulips-on-pastel-nature-background-romantic-spring-art-background-floral.jpg?s=612x612&w=0&k=20&c=kCncpershJ0CrjiFtcMocBfP1nbiEA0SFv1-szl3KgM='},
    {'image_id': '8', 'image_url': 'https://media.istockphoto.com/id/2149064798/photo/young-redhaired-woman-drinking-wine-while-sitting-dressed-like-warrior-knight-and-holds-sword.jpg?s=612x612&w=0&k=20&c=Ya0dwrwSM1PivZ6ypqqM6TQMTQG3LNek6G62BqXzg5o='},
    {'image_id': '9', 'image_url': 'https://media.istockphoto.com/id/1654916078/photo/abstract-rough-colorful-multicolored-art-on-canvas.jpg?s=612x612&w=0&k=20&c=FkDhu7HQlX4q84mJHCxpagHHSi58CFpQWUl2tfrteV0='},
    {'image_id': '10', 'image_url': 'https://media.istockphoto.com/id/2192855167/photo/man-walking-past-art-installation-in-medical-office-waiting-room.jpg?s=612x612&w=0&k=20&c=g4mq6cxJhUS-pCexEfN1laK-GaaTQX_fUoRIKTSYuec='},
    {'image_id': '11', 'image_url': 'https://media.istockphoto.com/id/1281239111/photo/seamless-geometric-triangle-pattern-background.jpg?s=612x612&w=0&k=20&c=ouXb-Pynnsm4-kTsyXv9wbag3v2UHfJ_6dZXRSLFwik='},
    {'image_id': '12', 'image_url': 'https://media.istockphoto.com/id/868355394/vector/flat-line-icon.jpg?s=612x612&w=0&k=20&c=cV84bHZXYPH14yHwpC0w3f1qjETjVf6Id7ogyRhixLc='},
    {'image_id': '13', 'image_url': 'https://media.istockphoto.com/id/1323655436/photo/abstract-art-collage-of-young-woman-with-flowers.jpg?s=612x612&w=0&k=20&c=3Ze9afSAoZgQnS0Iwct5KeF_RLMLn4LE4n-yULOcqas='},
    {'image_id': '14', 'image_url': 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='},
    {'image_id': '15', 'image_url': 'https://media.istockphoto.com/id/622070470/photo/edgy-expressions-of-beauty.jpg?s=612x612&w=0&k=20&c=-UqbeujGAySYdZhbcFuscW4PtJSwlpiButI2eGslFpA='},
    {'image_id': '16', 'image_url': 'https://media.istockphoto.com/id/1138395421/photo/blue-abstract-background-or-texture.jpg?s=612x612&w=0&k=20&c=D3zwS1YZx-qR1GTo2PSqoWvak_Dm4uyvITpLgmaGxtc='},
    {'image_id': '17', 'image_url': 'https://media.istockphoto.com/id/1999938268/photo/a-chip-labeled-ai-in-the-middle-of-metal-components.jpg?s=612x612&w=0&k=20&c=WiOgextBDKrJvJTAR18PIe3EE5aJSQdfqfF-0zoY7rw='}
    ]}
  

  return (
    <View style={styles.clothesChooserWrapper}>

      <CurrentWeather />

      <ScrollView  showsHorizontalScrollIndicator={false} contentContainerStyle= {{ paddingBottom: 140 }}>

      <ClothesPerCategory 
        key={testclothesCategories?.image_category}
        categoryName={testclothesCategories?.image_category} 
        images={testclothesCategories?.images} 
        selectedImageId={selectedImagesReal[testclothesCategories?.image_category]} 
        onSelectImage={handleSelectImageReal} />


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