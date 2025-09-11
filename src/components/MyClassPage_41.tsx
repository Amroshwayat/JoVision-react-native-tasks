
import Ionicons from "react-native-vector-icons/Ionicons";

export const getTabBarIcon = (routeName: string) => ({ color, size }: { color: string; size: number }) => {
  let iconName = "ellipse";

  if (routeName === "One") iconName = "home";
  else if (routeName === "Two") iconName = "person";
  else if (routeName === "Three") iconName = "settings";
  else if (routeName === "Four") iconName = "information-circle";

  return <Ionicons name={iconName} size={size} color={color} />;
};