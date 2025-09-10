import React, { useState } from "react";
import { View, Button } from "react-native";


import TimeDisplay from "../components/MyClassPage_34";


export default function Task34() {
  const [showTime, setShowTime] = useState(true);

  return (
    <View >
      <Button
        title={showTime ? "Hide Time" : "Show Time"}
        onPress={() => setShowTime(!showTime)}
      />
      {showTime && <TimeDisplay />}
    </View>
  );
}

