import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoScreen from "./InfoScreen";
import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="InfoScreen" component={InfoScreen} />
    </MainStack.Navigator>
  );
};

export default Main;
