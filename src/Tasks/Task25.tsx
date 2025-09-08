import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassPage from './../components/MyClassPage_25';

export default class Task25 extends React.Component {
  childRef = React.createRef<MyClassPage>();

  state = {
    inputText: '',
  };

  handleChange = (text: string) => {
    this.setState({ inputText: text });

 
    this.childRef.current?.updateText(text);
  };

  render() {
    return (
      <View >
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={this.state.inputText}
          onChangeText={this.handleChange}
        />

       
        <MyClassPage ref={this.childRef} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 18, borderRadius: 5 },
});
