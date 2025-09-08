import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

type MyClassPageProps = {
  showConsole: boolean;
};

export default function MyClassPage_20(props: MyClassPageProps) {
  useEffect(() => {
    console.log("MyClassPage loaded ");

    return () => {
      console.log("MyClassPage unloaded ");
    };
  }, []); 

  return (
    <View>
      {props.showConsole && <Text>Amro Shwayat</Text>}
    </View>
  );
}
