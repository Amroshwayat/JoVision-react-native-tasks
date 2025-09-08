import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MyFunctionPageRef = {
  updateText: (text: string) => void;
};

const MyFunctionPage = forwardRef<MyFunctionPageRef>((props, ref) => {
  const [childText, setChildText] = useState('');


  useImperativeHandle(ref, () => ({
    updateText: (text: string) => {
      setChildText(text);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{childText}</Text>
    </View>
  );
});

export default MyFunctionPage;

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
