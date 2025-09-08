import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

type MyFunctionPageProps = {
  showConsole: boolean;
};

export default function MyFunctionPage({ showConsole }: MyFunctionPageProps) {
  useEffect(() => {
    console.log("MyFunctionPage loaded ✅");

    return () => {
      console.log("MyFunctionPage unloaded ❌");
    };
  }, []); 

  return (
    <View>
      {showConsole && <Text>Amro Shwayat</Text>}
    </View>
  );
}
