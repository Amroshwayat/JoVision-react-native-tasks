import React, { useState } from "react";
import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../components/Store_39";
import ComponentOneClass from "../components/MyClassPage_40";

export default function Task40() {
  const [show, setShow] = useState(true);

  return (
    <Provider store={store}>
      <View>
        <Button
          title={show ? "Hide ComponentOne" : "Show ComponentOne"}
          onPress={() =>setShow(!show)}
        />
        {show && <ComponentOneClass />}
      </View>
    </Provider>
  );
}
