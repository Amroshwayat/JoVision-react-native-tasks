import React, { useState } from "react";
import { Button} from "react-native";
import { Provider } from "react-redux";
import { store } from "../components/Store_39";
import ComponentOne from "../components/MyClassPage_39";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <Provider store={store}>
      
        <Button title={show ? "Hide ComponentOne" : "Show ComponentOne"} onPress={() => setShow(!show)} />
        {show && <ComponentOne />}
     
    </Provider>
  );
}

