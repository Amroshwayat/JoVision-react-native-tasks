import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setText } from "./Store_39";

export default function ComponentOne() {
  const savedText = useSelector((state: RootState) => state.text.text);
  const dispatch = useDispatch();

  const [text, setLocalText] = useState(savedText);


  useEffect(() => {
  dispatch(setText(text));
}, [text, dispatch]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Type something..."
      value={text}
      onChangeText={setLocalText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
