import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CurrentWeather from '../../components/clotheschooser/CurrentWeather.jsx'; // Adjust the import path as necessary
import HorizontalImageList from '../../components/clotheschooser/ClothesPerCategory.jsx'; // Adjust the import path as necessary}

const Clotheschooser = () => {

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

  const hat_images = [
    { id: '7', source: require('../../assets/test_imgs/hats/hat_1.jpg') },
    { id: '8', source: require('../../assets/test_imgs/hats/hat_2.jpg') },
    { id: '9', source: require('../../assets/test_imgs/hats/hat_1.jpg') },
    { id: '10', source: require('../../assets/test_imgs/hats/hat_2.jpg') },
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
    <View>
      
      <CurrentWeather />

      <ScrollView  showsHorizontalScrollIndicator={false}>
        <HorizontalImageList categoryName={"Hats"} images={hat_images} selectedImageId={selectedImages['Hats']} onSelectImage={handleSelectImage} />
        <HorizontalImageList categoryName={"Upper body"} images={upper_body_images} selectedImageId={selectedImages['Upper body']} onSelectImage={handleSelectImage} />
        <HorizontalImageList categoryName={"Leggings"} images={leggings_images} selectedImageId={selectedImages['Leggings']} onSelectImage={handleSelectImage} />
        <HorizontalImageList categoryName={"Socks"} images={socks_images} selectedImageId={selectedImages['Socks']} onSelectImage={handleSelectImage} />
      </ScrollView>

    </View>
  )
}

export default Clotheschooser

const styles = StyleSheet.create({})