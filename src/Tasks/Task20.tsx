import React from 'react';
import { View, Button } from 'react-native';
import MyClassPage from '../components/MyClassPage_20';

type AppState = {
  showPage: boolean;
};

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showPage: false,
    };
  }

  togglePage = () => {
    this.setState(prevState => ({ showPage: !prevState.showPage }));
  };

  render() {
    const { showPage } = this.state;

    return (
      <View >
        <Button title={showPage ? "Hide" : "Show"} onPress={this.togglePage} />

       
        {showPage && <MyClassPage />}
      </View>
    );
  }
}

