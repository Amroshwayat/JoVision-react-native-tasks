import React, { useState } from 'react';
import { View, Button} from 'react-native';
import MyFunctionPage from '../components/MyClassPage_21';

export default function Task21() {
  const [show, setShow] = useState(false);

  return (
    <View >
      <Button title={show ? "Hide" : "Show"} onPress={() => setShow(!show)} />

 
      {show && <MyFunctionPage showConsole={show} />}
    </View>
  );
}
