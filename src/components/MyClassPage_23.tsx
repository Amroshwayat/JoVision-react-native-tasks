import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type MyClassPageProps = {
  onTextChange: (text: string) => void; 
};

type MyClassPageState = {
  inputText: string; 
};

export default class MyClassPage extends React.Component<MyClassPageProps, MyClassPageState> {
  constructor(props: MyClassPageProps) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleChange = (text: string) => {
    this.setState({ inputText: text }); 
    this.props.onTextChange(text);      
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={this.state.inputText}
          onChangeText={this.handleChange} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
});
