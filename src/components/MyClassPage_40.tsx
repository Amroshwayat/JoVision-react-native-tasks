import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { RootState, setText } from "./Store_39";

type Props = {
  savedText: string;
  setText: (text: string) => void;
};

type State = {
  text: string;
};

class ComponentOneClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: props.savedText, 
    };
  }

  handleChange = (value: string) => {
    this.setState({ text: value });
    this.props.setText(value); 
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={this.state.text}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = (state: RootState) => ({
  savedText: state.text.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOneClass);
