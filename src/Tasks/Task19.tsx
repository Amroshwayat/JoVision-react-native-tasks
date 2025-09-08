import React ,{useState} from 'react'
import MyClassPage_19 from '../components/MyClassPage_19'
import { View ,Button} from 'react-native'
export default function Task19() {
    const[show,setShow]=useState(false);
  return (
  <View>
<Button title="Show" onPress={()=>setShow(true)}/>
{show?<MyClassPage_19/>:null}

  </View>
  )
}
