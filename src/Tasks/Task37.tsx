import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, RefreshControl } from "react-native";


import generateRandomWord from "../components/MyClassPage_37";
export default function Task37() {
  const [randomWords, setRandomWords] = useState(
    Array.from({ length: 100 }, () => generateRandomWord(5))
  );
  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
    setRefreshing(true);


    const newWords = Array.from({ length: 100 }, () => generateRandomWord(5));
    setRandomWords(newWords);

    setRefreshing(false);
  };

  return (
    <ScrollView
    
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
