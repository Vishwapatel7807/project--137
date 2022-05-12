import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/Home";
import StarScreen from "./screens/Star";

export default function App() {
  return <AppContainer />;
}
const appStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen, navigationOptions: { headerShown: false }
  },
  Star: {
    screen: StarScreen
  }
}, {
  initialRouteName: "Home"
});
const AppContainer = createAppContainer(appStackNavigator);