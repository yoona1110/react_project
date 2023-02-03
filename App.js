import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/Screens/Login";
import SignIn from "./src/Screens/SignIn";
import Main from "./src/Screens/Main";
import BulletinBoard_Main from './src/Screens/BulletinBoard_Main';
import BulletinBoard_Hot from './src/Screens/BulletinBoard_Hot';

import BulletinBoard_Write from './src/Screens/BulletinBoard_Write';

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
        <Stack.Screen name="BulletinBoard_Main" component={BulletinBoard_Main}/>
        <Stack.Screen name="BulletinBoard_Hot" component={BulletinBoard_Hot}/>
        <Stack.Screen name="BulletinBoard_Write" component={BulletinBoard_Write}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}