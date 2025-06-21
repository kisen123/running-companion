import React from 'react';
import { FlatList, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ClothesPerCategory = ({ categoryName, images, selectedImageId, onSelectImage }) => {

  console.log("ClothesPerCategory rendered")
  const renderItem = ({ item }) => {
    
    console.log(item.image_url)
    return (
    <TouchableOpacity
      onPress={() => onSelectImage(categoryName, item.image_id)}
      style={styles.itemContainer}
      activeOpacity={0.8}
      >

      <View style={styles.imageWrapper}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      { selectedImageId === item.image_id && (
        <View style={styles.selectedCircle}>
          <Text style={styles.selectedText}>✔</Text>
        </View>
      )}
          
        </View>
    </TouchableOpacity>
  )};

  return (
    <View>
      <Text style={styles.categoryText}>{categoryName}</Text>
        <FlatList
          data={images}
          keyExtractor={(item) => item.image_id}
          contentContainerStyle={styles.flatListImages}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          maxToRenderPerBatch={5}
          windowSize={5}
          initialNumToRender={5}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 3,
  },

  itemContainer: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  imageWrapper: {
    position: 'relative',
    width: 150,
    height: 150,
  },

  selectedCircle: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1DA1F2', // Twitter blue
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 2,
  },

  selectedText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
  },

});

export default ClothesPerCategory;