import React,{useState} from 'react'
import { View, Text,Button } from 'react-native'

export default function Task17() {
const [show,setShow]=useState(true);

  return (
  <View>
<Button title={show?"Show":"Hide"} onPress={()=>setShow(!show)}/>
{show?null:<Text>Amro Shawayat</Text>}

  </View>
    
  )
}
