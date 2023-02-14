import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, TextInput, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

const Setting_ModifyMember = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.mm_titleTheme}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Setting')}>
                    <Image 
                        style={styles.mm_btn_back}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_back.png')} />
                </TouchableOpacity>
                <Text style={styles.mm_title}> 회원 정보 수정 </Text>
            </View>

            {/* 회원 정보 부분*/}
            <View style={styles.mm_information}>
                <View 
                    style={[styles.mm_InputTheme, 
                        {marginTop: 70}]}>
                    <Text style={styles.mm_InputFont}> 닉네임 </Text>
                    <TextInput 
                        style={styles.mm_Input}> 기존 닉네임 </TextInput>
                </View>
    
                <View 
                    style={styles.mm_InputTheme}>
                    <Text style={styles.mm_InputFont}> 아이디 </Text>
                    <TextInput 
                        style={styles.mm_Input}> 기존 아이디 </TextInput>
                </View>
    
                <View 
                    style={[styles.mm_InputTheme, 
                        {marginLeft: 15}]}>
                    <Text style={styles.mm_InputFont}> 비밀번호 </Text>
                    <TextInput 
                        style={[
                            styles.mm_Input, 
                            {marginLeft: 30}]}
                        secureTextEntry='false'> 기존 비밀번호 </TextInput>
                </View>
    
                <View 
                    style={[styles.mm_InputTheme, 
                        {marginLeft: 0}]}>
                    <Text style={styles.mm_InputFont}> 비밀번호 확인 </Text>
                    <TextInput 
                        style={[
                            styles.mm_Input, 
                            {marginLeft: 15}]}
                        secureTextEntry='true'/>
                </View>
    
                <View 
                    style={styles.mm_InputTheme}>
                    <Text style={styles.mm_InputFont}> 이메일 </Text>
                    <TextInput 
                        style={styles.mm_Input}> 기존 이메일 </TextInput>
                </View>
  
                <View 
                    style={styles.mm_InputTheme}>
                    <Text style={styles.mm_InputFont}> 주소지 </Text>
                    <TextInput 
                        style={styles.mm_Input}> 기존 주소지 </TextInput>
                </View>
            </View>

            {/* 하단부 */}
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.mm_btn}
                    onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.mm_btnFont}> 확인 </Text>
                </TouchableOpacity> 
            </View>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },

    mm_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#575757',
        marginTop: 33,
        marginLeft: 93
    },

    mm_titleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
    },

    mm_btn_back: {
        width: 28,
        height: 28,
        marginTop: 33,
        marginLeft: 10
    }, 

    mm_information: {
        flex: 6.5,
    },

    mm_Input: {
        width: 225,
        height: 49,
        fontSize: 17,
        paddingLeft: 15,
        borderRadius: 10,
        marginLeft: 40,
        backgroundColor: '#FAFAFA'
    },
  
    mm_InputFont: {
        fontSize: 20,
        color: '#575757',
        marginTop: 13
    },
  
    mm_InputTheme: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 20
    },

    mm_btn: {
        width: 320,
        height: 55,
        backgroundColor: '#FFE589',
        paddingTop: 15,
        marginTop: 15,
        borderRadius: 10
      },
    
    mm_btnFont: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#575757'
      },
})

export default Setting_ModifyMember;