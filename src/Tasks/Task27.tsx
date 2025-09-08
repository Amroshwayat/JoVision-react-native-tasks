import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';

export default function Task27() {

  const images = [
    require('../assets/images/p.png'),
    require('../assets/images/p4.png'),
    require('../assets/images/R.jpg')

  ];


  const [selectedImage, setSelectedImage] = useState(images[0]);


  const chooseImage = () => {
    Alert.alert(
      'Choose Image',
      'Pick image number 1, 2, or 3',
      [
        { text: '1', onPress: () => setSelectedImage(images[0]) },
        { text: '2', onPress: () => setSelectedImage(images[1]) },
        { text: '3', onPress: () => setSelectedImage(images[2]) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View >
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
}

const styles = StyleSheet.create({
 
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain'  },
});
