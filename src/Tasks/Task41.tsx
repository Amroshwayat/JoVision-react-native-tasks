import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




import Ionicons from "react-native-vector-icons/Ionicons";

export const getTabBarIcon = (routeName: string) => ({ color, size }: { color: string; size: number }) => {
  let iconName = "ellipse";

  if (routeName === "One") iconName = "home";
  else if (routeName === "Two") iconName = "person";
  else if (routeName === "Three") iconName = "settings";
  else if (routeName === "Four") iconName = "information-circle";

  return <Ionicons name={iconName} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();


function ScreenOne() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 2</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 3</Text>
    </View>
  );
}

function ScreenFour() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Screen 4</Text>
    </View>
  );
}


export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: getTabBarIcon(route.name),
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
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
