import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// 로그인 페이지
export default function Login({ navigation }) {
    return (
      <View 
        style={[styles.container,
          {alignItems: 'center',
           backgroundColor: '#FFEDAB'}]}>
        <Text style={styles.login_Title}> 니캉내캉 </Text>
  
        {/* 아이디, 비밀번호 입력창 부분 */}
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
            style={[
              styles.login_Input,
              {marginLeft: 15}]}
            secureTextEntry='true'/> 
        </View>
  
        {/* 로그인, 회원가입 버튼 */}
        <TouchableOpacity 
          style={styles.login_Btn}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.login_Btn_Font}> 회원가입 </Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={[
            styles.login_Btn, 
            {marginTop: 15}]}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.login_Btn_Font}> 로그인 </Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    /* 로그인 페이지 */
    login_Title: {
      fontSize: 49,
      fontWeight: 'bold',
      color: '#575757',
      marginTop: 220
    },
  
    login_InputTitle: {
      fontSize: 22,
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
      height: 49,
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
      fontSize: 24,
      fontWeight: 'bold',
      color: '#575757'
    }
  });