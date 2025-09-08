import React, { useState, useRef } from 'react';
import { View, TextInput} from 'react-native';
import MyFunctionPage from '../components/MyClassPage_24';

export default function App() {
  const [inputText, setInputText] = useState('');
  const childRef = useRef<{ updateText: (text: string) => void }>(null);

  const handleChange = (text: string) => {
    setInputText(text);
   
    childRef.current?.updateText(text);
  };

  return (
    <View >
      <TextInput
        
        placeholder="Type here..."
        value={inputText}
        onChangeText={handleChange}
      />

    
      <MyFunctionPage ref={childRef} />
    </View>
  );
}

