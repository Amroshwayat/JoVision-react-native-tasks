import React,{useState} from 'react'
import { View, Text, Button } from 'react-native'
export default function Task16() {
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show)
    }
  return (
    <View>
      <Button title='Click' onPress={handleShow}/>
      {show ? <Text>Hello World</Text> : null}
 
    </View>
  )
}
