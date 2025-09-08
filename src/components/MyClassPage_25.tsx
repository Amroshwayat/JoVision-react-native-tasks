import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyClassPage extends React.Component {
  state = {
    childText: '',
  };


  updateText = (text: string) => {
    this.setState({ childText: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.childText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
