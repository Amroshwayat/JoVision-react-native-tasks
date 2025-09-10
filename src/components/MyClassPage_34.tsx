import { View,Text, StyleSheet } from "react-native";
import React from "react";

function useCurrentTime() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

 
    return () => clearInterval(timer);
  }, []);

  return currentTime;
}


function TimeDisplay() {
  const time = useCurrentTime();

  return (
    <View style={styles.timeContainer}>
      <Text style={styles.text}>Time: {time.toLocaleTimeString()}</Text>
      <Text style={styles.text}>Date: {time.toDateString()}</Text>
    </View>
  );
}
const styles =  StyleSheet.create({
      timeContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
})
export default TimeDisplay ;