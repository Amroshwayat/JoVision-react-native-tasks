import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function App() {
  const [ip, setIp] = useState('');

 
  const getIpNonBlocking = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip); 
    } catch (error) {
      console.error(error);
    }
  };

 
  const getIpBlocking = () => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
      .catch(error => console.error(error));


    const start = Date.now();
    while (Date.now() - start < 2000) {
  
    }
  };

  return (
    <View >
      <Text >{ip || 'Your IP will appear here'}</Text>
      <Button title="Get IP (Non-blocking)" onPress={getIpNonBlocking} />
      <View style={{ height: 10 }} />
      <Button title="Get IP (Blocking)" onPress={getIpBlocking} />
    </View>
  );
}
