import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/Screens/Login";
import SignIn from "./src/Screens/SignIn";
import Main from "./src/Screens/Main";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        /* initialRouteName: 시작 화면 설정
          screenOptions: header bar 제거 (모든 창에서) */
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>

        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}