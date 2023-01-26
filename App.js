import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Shadow, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';

const Login = ({ navigation }) => {
  return (
    <View 
      style={[styles.container,
        {backgroundColor: '#FFEDAB'}]}>
      <Text style={styles.login_Title}> 니캉내캉 </Text>

      <View 
        style={[styles.login_InputTheme,
          {marginTop: 58}]}>
        <Text 
          style={[styles.login_InputTitle,
            {marginLeft: 6}]}> 아이디 </Text>
        <TextInput style={styles.login_Input}/> 
      </View>
      
      <View style={styles.login_InputTheme}>
        <Text style={styles.login_InputTitle}> 비밀번호 </Text>
        <TextInput 
          style={[styles.login_Input,
            {marginLeft: 15}]}
           secureTextEntry='true'/> 
      </View>

      {/* 특정 영역을 지정하여 터치 이벤트를 사용할 수 있음 */}
      <TouchableOpacity 
        style={styles.login_Btn}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.login_Btn_Font}> 회원가입 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.login_Btn, 
          {marginTop: 15}]}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.login_Btn_Font}> 로그인 </Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const SignIn = ({ navigation }) => {
  return (
    <View 
      style={[styles.container,
        {backgroundColor: '#FFFFFF'}]}>

      <View style={styles.signin_TitleTheme}>
        <Text style={styles.signin_Title}> 회원가입 </Text>
      </View>

      <View  
        style={[styles.container, 
            {flex: 6.5}]}>
        <Image 
          style={styles.signin_Profile}/>
        <View 
          style={styles.signin_Btn_ProfileTheme}
          onPress={() => }>
          <Text style={styles.signin_Btn_Profile}> 사진 변경 </Text>
        </View>

        <View>
          <View 
            style={[styles.login_InputTheme, 
              {marginTop: 35,
              marginLeft: 20}]}>
            <Text style={styles.signin_InputFont}> 닉네임 </Text>
            <TextInput style={[styles.login_Input, {marginLeft: 40}]}/>
          </View>

          <View 
            style={[styles.login_InputTheme,
              {marginLeft: 20}]}>
            <Text style={styles.signin_InputFont}> 아이디 </Text>
            <TextInput style={[styles.login_Input, {marginLeft: 40}]}/>
          </View>

          <View 
            style={[styles.login_InputTheme, 
              {marginLeft: 15}]}>
            <Text style={styles.signin_InputFont}> 비밀번호 </Text>
            <TextInput 
              style={[styles.login_Input, 
                {marginLeft: 30}]}
              secureTextEntry='true'/>
          </View>

          <View 
           style={[styles.login_InputTheme, 
              {marginLeft: 0}]}>
            <Text style={styles.signin_InputFont}> 비밀번호 확인 </Text>
            <TextInput 
              style={[styles.login_Input, 
                {marginLeft: 10}]}
              secureTextEntry='true'/>
          </View>

          <View 
            style={[styles.login_InputTheme,
              {marginLeft: 20}]}>
            <Text style={styles.signin_InputFont}> 이메일 </Text>
            <TextInput style={[styles.login_Input, {marginLeft: 40}]}/>
          </View>

          <View 
            style={[styles.login_InputTheme,
              {marginLeft: 20}]}>
            <Text style={styles.signin_InputFont}> 주소지 </Text>
            <TextInput style={[styles.login_Input, {marginLeft: 40}]}/>
          </View>
        </View>
      </View>

      <View  
        style={styles.container}>
        <TouchableOpacity 
            style={[styles.login_Btn,
              {marginTop: 20,
              width: 350}]}
            onPress={() => navigation.navigate('Login')}>

            <Text style={styles.login_Btn_Font}> 회원가입 </Text>
          </TouchableOpacity>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const Main = ({ navigation }) => {
  return (
    <View
      style={[styles.container,
        {backgroundColor: '#FFFFFF'}]}>

      <View 
        style={[styles.signin_TitleTheme,
          {alignItems: 'flex-start',
          flexDirection: 'row',
          flex: 1}]}>
        <Text 
          style={[styles.signin_Title,
            {marginLeft: 20}]}> 후평동 </Text>

        <Image source={
          require('./assets/image/main_notification.png')}
          style={styles.main_notificationImg}/>
      </View>

      <View 
        style={[styles.main_Page, 
        styles.container, 
        {flex: 6.5}]}>

      </View>

      <View style={[styles.container, 
        {backgroundColor: '#575757'},
        Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOpacity: 5,
            shadowOffset: {
              width: 10,
              height: 10},
            shadowRadius: 2
          },
          android: {
            elevation: 3
          }})]}>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}



const Stack = createNativeStackNavigator();
const App = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  /* 로그인 페이지 */
  login_Title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#575757',
    marginTop: 220
  },

  login_InputTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#575757',
    marginTop: 12
  },

  login_InputTheme: {
    flexDirection: 'row',
    marginTop: 15
  },

  login_Input: {
    width: 225,
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
    borderRadius: 10,
    marginLeft: 25,
    backgroundColor: '#FAFAFA'
  },

  login_Btn: {
    width: 320,
    height: 55,
    backgroundColor: '#FFE589',
    paddingTop: 15,
    marginTop: 50,
    borderRadius: 10
  },

  login_Btn_Font: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#575757'
  },

  /* 회원가입 페이지 */
  signin_TitleTheme: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: '#FFEDAB',
    alignItems: 'center'
  },

  signin_Title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#575757',
    marginTop: 53
  },

  signin_Profile: {
    width: 130,
    height: 130,
    backgroundColor: '#FAFAFA',
    marginTop: 40,
    borderRadius: 10
  },

  signin_Btn_ProfileTheme: {
    width: 130,
    height: 40,
    backgroundColor: '#FFE589',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  signin_Btn_Profile: {
    fontSize: 20,
    color: '#575757',
    marginTop: 10
  },

  signin_InputFont: {
    fontSize: 22,
    color: '#575757',
    marginTop: 13
  },

  main_notificationImg: {
    width: 30,
    height: 30,
    marginTop: 51,
    marginLeft: 245
  },

  main_Page: {
    width: Dimensions.get('window').width,
    height: 650
  }
});

const requestPermission = async() => {
  const response = await Permissions.askAsync(Permissions.CAMERA);
  console.log(response);
};
useEffect(() => {
    requestPermission();
}, []);

export default App;