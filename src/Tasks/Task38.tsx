import React, { useState, createContext, useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type SharedTextContextType = {
  text: string;
  setText: (value: string) => void;
};

const SharedTextContext = createContext<SharedTextContextType>({
  text: "",
  setText: () => {},
});

class ComponentOne extends React.Component {
  static contextType = SharedTextContext;

  render() {
    return (
      <SharedTextContext.Consumer>
        {({ text }) => <Text style={styles.textOne}>{text}</Text>}
      </SharedTextContext.Consumer>
    );
  }
}

function ComponentTwo() {
  const { text, setText } = useContext(SharedTextContext);

  return (
    <View style={styles.componentTwo}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />
      <ComponentOne />
    </View>
  );
}

export default function Task38() {
  const [text, setText] = useState<string>("");

  return (
    <SharedTextContext.Provider value={{ text, setText }}>
     
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
  
    </SharedTextContext.Provider>
  );
}

const styles = StyleSheet.create({

  componentTwo: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  textOne: {
    fontSize: 18,
    color: "blue",
  },
});
