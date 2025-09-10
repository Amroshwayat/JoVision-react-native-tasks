import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import generateRandomWord from "../components/MyClassPage_36";

export default function Task36() {
  
  const randomWords = Array.from({ length: 100 }, () => generateRandomWord(5));

  return (
    <ScrollView>
      {randomWords.map((word, index) => (
        <Text key={index} style={styles.text}>
          {index + 1}. {word}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
