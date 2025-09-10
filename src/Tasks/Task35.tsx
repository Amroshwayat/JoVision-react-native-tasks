import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


type FormData = {
  name: string;
  age: string;
  country: string;
};

export default function Task35() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    country: "",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData) as FormData & { timestamp: string };
          const savedTime = new Date(parsedData.timestamp);
          const now = new Date();

          const diffSeconds = (now.getTime() - savedTime.getTime()) / 1000;

          if (diffSeconds < 60) {
         
            setFormData({
              name: parsedData.name,
              age: parsedData.age,
              country: parsedData.country,
            });
          } else {
           
            await AsyncStorage.removeItem("userData");
          }
        }
      } catch (error) {
        console.log("Error reading data: ", error);
        Alert.alert("Error", "Could not read saved data.");
      }
    };

    loadData();
  }, []);

 
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const dataToSave = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      await AsyncStorage.setItem("userData", JSON.stringify(dataToSave));
      Alert.alert("Success", "Data saved successfully!");
    } catch (error) {
      console.log("Error saving data: ", error);
      Alert.alert("Error", "Could not save data.");
    }
  };

  return (
    <View >
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(text) => handleChange("age", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={formData.country}
        onChangeText={(text) => handleChange("country", text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
 
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});
