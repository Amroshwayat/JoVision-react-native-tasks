import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

type MyFunctionPageProps = {
  onTextChange: (text: string) => void; 
};

export default function MyFunctionPage({ onTextChange }: MyFunctionPageProps) {
  const [inputText, setInputText] = useState('');

  const handleChange = (text: string) => {
    setInputText(text);    
    onTextChange(text);       
  };

  return (
    <View >
      <TextInput
       
        placeholder="Type here..."
        value={inputText}
        onChangeText={handleChange} 
      />
    </View>
  );
}


