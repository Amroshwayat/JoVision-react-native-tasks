import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();


function ScreenOne({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate("Two")} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate("Three")} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate("Four")} />
    </View>
  );
}

function ScreenTwo({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 2</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate("One")} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate("Three")} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate("Four")} />
    </View>
  );
}

function ScreenThree({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 3</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate("One")} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate("Two")} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate("Four")} />
    </View>
  );
}

function ScreenFour({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 4</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate("One")} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate("Two")} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate("Three")} />
    </View>
  );
}


const renderTabBarIcon = (routeName: string) => ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  let iconName = "ellipse";

  if (routeName === "One") iconName = "home";
  else if (routeName === "Two") iconName = "person";
  else if (routeName === "Three") iconName = "settings";
  else if (routeName === "Four") iconName = "information-circle";

  return <Ionicons name={iconName} size={size} color={color} />;
};


export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: renderTabBarIcon(route.name),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="One" component={ScreenOne} />
        <Tab.Screen name="Two" component={ScreenTwo} />
        <Tab.Screen name="Three" component={ScreenThree} />
        <Tab.Screen name="Four" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
