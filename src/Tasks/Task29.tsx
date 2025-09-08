import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  Button,
} from 'react-native';

export default function Task29() {
  const images = [
    require('../assets/images/p.png'),
    require('../assets/images/p4.png'),
    require('../assets/images/p5.png'),
    require('../assets/images/p6.webp'),
    require('../assets/images/p7.png'),
    require('../assets/images/p8.webp'),
    require('../assets/images/p9.png'),
    require('../assets/images/p10.png'),
    require('../assets/images/p11.webp'),
    require('../assets/images/R.jpg'),
  ];

  const flatListRef = useRef<FlatList<any>>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');


  const handlePress = (index: number) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

 
  const handleSubmit = () => {
    const index = parseInt(inputIndex, 10) - 1;
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    } else {
      Alert.alert('Invalid index', 'Please enter a number between 1 and 10');
    }
    setModalVisible(false);
    setInputIndex('');
  };

  return (
    <View >
    
      <Button title="Go to Image" onPress={() => setModalVisible(true)} />

  
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />

     
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Enter image index (1 - {images.length}):
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputIndex}
              onChangeText={setInputIndex}
              placeholder="e.g. 3"
            />
            <Button title="Submit" onPress={handleSubmit} />
            <View style={{ marginTop: 10 }}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
 
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 250,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    textAlign: 'center',
  },
});
