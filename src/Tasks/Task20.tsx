import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage_20 from '../components/MyClassPage_20';

export default function Task20() {
  const [show, setShow] = useState(false);

  return (
    <View >
      <Button title={show ? "Hide" : "Show"} onPress={() => setShow(!show)} />

      {/* Conditional Rendering */}
      {show && <MyClassPage_20 showConsole={show} />}
    </View>
  );
}
