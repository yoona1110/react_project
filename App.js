import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as LoginPage } from /Users/heoyoona/Desktop/PROJECT/react_native_app/login.js;
import { default as SignInPage} from /Users/heoyoona/Desktop/PROJECT/react_native_app/signIn.js;

const Stack = createNativeStackNavigator();
function App() {
  
  return (
    <NavigationContatiner>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='SignInPage' component={SignInPage}/>
      </Stack.Navigator>
    </NavigationContatiner>
  );
}

export default App;