import React from 'react';
import { View, Text } from 'react-native';

export default class MyClassPage extends React.Component {
  componentDidMount() {
    console.log("MyClassPage loaded ✅");
  }

  componentWillUnmount() {
    console.log("MyClassPage unloaded ❌");
  }

  render() {
    return (
      <View >
        <Text >Amro Shwayat</Text>
      </View>
    );
  }
}
