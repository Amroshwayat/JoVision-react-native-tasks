import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MyFunctionPage from '../components/MyClassPage_22';

export default function App() {
  const [parentText, setParentText] = useState('Hello!');

  return (
    <View >
   
      <Text>{parentText}</Text>

     
      <MyFunctionPage onTextChange={setParentText} />
    </View>
  );
}

