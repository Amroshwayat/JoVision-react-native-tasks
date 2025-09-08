import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
  Text,
  Modal,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

export default function Task30() {

  const [images, setImages] = useState([
    require("../assets/images/p.png"),
    require("../assets/images/p4.png"),
    require("../assets/images/p5.png"),
    require("../assets/images/p6.webp"),
    require("../assets/images/p7.png"),
    require("../assets/images/p8.webp"),
    require("../assets/images/p9.png"),
    require("../assets/images/p10.png"),
    require("../assets/images/p11.webp"),
    require("../assets/images/R.jpg"),
  ]);

  const flatListRef = useRef<FlatList>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState("");

 
  const removeImage = (index: number) => {
    Alert.alert("Remove", `Are you sure you want to remove image ${index + 1}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          setImages((prev) => prev.filter((_, i) => i !== index));
        },
      },
    ]);
  };

 
  const scrollToIndex = () => {
    const index = parseInt(inputIndex, 10);
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    } else {
      Alert.alert("Error", "Invalid index!");
    }
    setModalVisible(false);
    setInputIndex("");
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
          <View style={styles.imageContainer}>
          
            <Pressable
              onPress={() =>
                Alert.alert("You have selected image:", index.toString())
              }
            >
              <Image source={item} style={styles.image} />
            </Pressable>

           
            <Pressable style={styles.deleteIcon} onPress={() => removeImage(index)}>
              <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
            </Pressable>
          </View>
        )}
      />


      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Enter Image Index:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputIndex}
              onChangeText={setInputIndex}
            />
            <Button title="Go" onPress={scrollToIndex} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  modalContent: {
    width: 250,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    marginVertical: 10,
  },
});
