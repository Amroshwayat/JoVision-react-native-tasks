import React from 'react';
import { View, Text} from 'react-native';

import MyClassPage from '../components/MyClassPage_23';
type AppState = {
  parentText: string;
};

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      parentText: 'Hello!',
    };
  }


  handleTextChange = (text: string) => {
    this.setState({ parentText: text });
  };

  render() {
    return (
      <View >
        <Text >{this.state.parentText}</Text>
      
        <MyClassPage onTextChange={this.handleTextChange} />
      </View>
    );
  }
}

