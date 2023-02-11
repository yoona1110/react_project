import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// 회원가입 페이지
const SignIn = ({ navigation }) => {
    return (
      <View 
        style={[styles.container,
          {alignItems: 'center',
           backgroundColor: '#FFFFFF'}]}>
  
        {/* 상단부 타이틀 */}
        <View style={styles.signin_TitleTheme}>
          <Text style={styles.signin_Title}> 회원가입 </Text>
        </View>
  
        {/* 사진 표시창, 선택 버튼 */}
        <View  
          style={[styles.container, 
              {flex: 6.5,
               alignItems: 'center'}]}>
          <Image 
            style={styles.signin_Profile} />
          <TouchableOpacity 
            style={styles.signin_Btn_ProfileTheme}
            onPress>
            <Text style={styles.signin_Btn_Profile}> 사진 변경 </Text>
          </TouchableOpacity>
  
          {/* 회원 정보 입력창 */}
          <KeyboardAvoidingView behavior='padding'>
            <View 
              style={[styles.signin_InputTheme, 
                {marginTop: 35,
                 marginLeft: 20}]}>
              <Text style={styles.signin_InputFont}> 닉네임 </Text>
              <TextInput style={[styles.signin_Input, {marginLeft: 40}]}/>
            </View>
  
            <View 
              style={[styles.signin_InputTheme,
                {marginLeft: 20}]}>
              <Text style={styles.signin_InputFont}> 아이디 </Text>
              <TextInput style={[styles.signin_Input, {marginLeft: 40}]}/>
            </View>
  
            <View 
              style={[styles.signin_InputTheme, 
                {marginLeft: 15}]}>
              <Text style={styles.signin_InputFont}> 비밀번호 </Text>
              <TextInput 
                style={[styles.signin_Input, 
                  {marginLeft: 30}]}
                secureTextEntry='true'/>
            </View>
  
            <View 
             style={[styles.signin_InputTheme, 
                {marginLeft: 0}]}>
              <Text style={styles.signin_InputFont}> 비밀번호 확인 </Text>
              <TextInput 
                style={[styles.signin_Input, 
                  {marginLeft: 10}]}
                secureTextEntry='true'/>
            </View>
  
            <View 
              style={[styles.signin_InputTheme,
                {marginLeft: 20}]}>
              <Text style={styles.signin_InputFont}> 이메일 </Text>
              <TextInput style={[styles.signin_Input, {marginLeft: 40}]}/>
            </View>
  
            <View 
              style={[styles.signin_InputTheme,
                {marginLeft: 20}]}>
              <Text style={styles.signin_InputFont}> 주소지 </Text>
              <TextInput style={[styles.signin_Input, {marginLeft: 40}]}/>
            </View>
          </KeyboardAvoidingView>
        </View>
  
        {/* 회원가입 버튼 */}
        <View  
          style={styles.container}>
          <TouchableOpacity 
              style={styles.signin_Btn}
              onPress={() => navigation.navigate('Login')}>
  
              <Text style={styles.signin_Btn_Font}> 회원가입 </Text>
            </TouchableOpacity>
          </View>
  
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    /* 회원가입 페이지 */
    signin_Title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#575757',
      marginTop: 53
    },

    signin_TitleTheme: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: '#FFEDAB',
      alignItems: 'center'
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
      height: 38,
      backgroundColor: '#FFE589',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center'
    },
  
    signin_Btn_Profile: {
      fontSize: 18,
      color: '#575757',
      marginTop: 10
    },

    signin_Input: {
      width: 225,
      height: 49,
      fontSize: 17,
      paddingLeft: 15,
      borderRadius: 10,
      marginLeft: 25,
      backgroundColor: '#FAFAFA'
    },

    signin_InputFont: {
      fontSize: 20,
      color: '#575757',
      marginTop: 13
    },

    signin_InputTheme: {
      flexDirection: 'row',
      marginTop: 15
    },

    signin_Btn: {
      width: 350,
      height: 55,
      backgroundColor: '#FFE589',
      paddingTop: 15,
      marginTop: 20,
      borderRadius: 10
    },

    signin_Btn_Font: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#575757'
    }
  });

  export default SignIn;
  