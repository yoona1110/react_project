import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

export default function Setting({navigation}) {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.st_titleTheme}>
                <Text style={styles.st_title}> 환경설정 </Text>
            </View>

            {/* 중간부 */}
            <View style={styles.st_center}>
                {/* 프로필 설정 부분 */}
                <View style={styles.st_profile_theme}>
                    <Image style={styles.st_profile}/>
                    <View>
                        <TouchableOpacity 
                            style={[
                                styles.st_btn_profileTheme, 
                                {marginTop: 0}]}>
                            <Text style={styles.st_btn_profile}> 이미지 수정 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.st_btn_profileTheme}
                            onPress={() => navigation.navigate('Setting_ModifyMember')}>
                            <Text style={styles.st_btn_profile}> 회원정보 수정 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* 회원정보 부분 */}
                <View>  
                    <View 
                        style={[
                            styles.st_inputTheme, 
                            {marginTop: 35}]}>
                        <Text style={styles.st_inputFont}> 닉네임 </Text>
                        <View style={styles.st_inputBackground}>
                            <Text style={styles.st_input}> 카페인중독자 </Text>
                        </View>
                    </View>
  
                    <View style={styles.st_inputTheme}>
                        <Text style={styles.st_inputFont}> 아이디 </Text>
                        <View style={styles.st_inputBackground}>
                            <Text style={styles.st_input}> qorhqvkd19 </Text>
                        </View>
                    </View>
  
                    <View style={styles.st_inputTheme}>
                        <Text style={styles.st_inputFont}> 이메일 </Text>
                        <View style={styles.st_inputBackground}>
                            <Text style={styles.st_input}> azi@naver.com </Text>
                        </View>
                    </View>
  
                    <View style={styles.st_inputTheme}>
                        <Text style={styles.st_inputFont}> 주소지 </Text>
                        <View style={styles.st_inputBackground}>
                            <Text 
                                style={[
                                    styles.st_input, 
                                    {paddingTop: 8}]}> 허리도 가늘군 만지면 부러지리 개미아파트 1동 601호 </Text>
                        </View>
                    </View>
                </View>

                {/* 로그아웃, 회원탈퇴 부분 */}
                <View style={{marginTop: 35}}>
                    <TouchableOpacity
                        style={styles.st_btn}
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.st_btnFont}> 로그아웃 </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.st_btn}
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.st_btnFont}> 회원탈퇴 </Text>
                    </TouchableOpacity> 
                </View>
            </View>

            {/* 하단부 */}
            <View style={[styles.st_under,
                Platform.select({
                    ios: {
                        shadowColor: '#000000',
                        shadowOpacity: 5,
                        shadowOffset: {
                            width: 0,
                            height: -0.1
                        },
                        shadowRadius: 0.1
                    },
                    android: {
                        elevation: 3
                    }
                })]}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}>
                    <Image
                        style={styles.st_under_button}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_home.png')} />
  
                </TouchableOpacity>
  
                <TouchableOpacity
                    onPress={() => navigation.navigate('Bookmark')}>
                    <Image
                    style={[
                        styles.st_under_button,
                        {marginLeft: 105}]}
                    source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_list.png')} />
                </TouchableOpacity>
  
                <TouchableOpacity>

                    <Image style={[
                        styles.st_under_button,
                        {marginLeft: 105}]}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_user_info.png')} />
                </TouchableOpacity>

            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    st_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#575757',
        marginTop: 33,
        marginLeft: 158
    },

    st_titleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
    },

    st_center: {
        flex: 6.5,
        width: Dimensions.get('window').width,
        height: 650,
        alignItems: 'center'
    },

    st_profile: {
        width: 130,
        height: 130,
        backgroundColor: '#FAFAFA',
        borderRadius: 10
    }, 
    
    st_profile_theme: {
        flexDirection: 'row', 
        marginTop: 40 
    },

    st_btn_profileTheme: {
        width: 150,
        height: 40,
        backgroundColor: '#FFE589',
        borderRadius: 10,
        marginTop: 13,
        marginLeft: 25,
        alignItems: 'center'
    },
    
    st_btn_profile: {
        fontSize: 18,
        color: '#575757',
        marginTop: 12
    },

    st_input: {
        fontSize: 17,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
      },
  
      st_inputFont: {
        fontSize: 20,
        color: '#575757',
        marginTop: 15
      },
  
      st_inputTheme: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 20
      },  

      st_inputBackground: {
        width: 220,
        height: 49,
        borderRadius: 10,
        marginLeft: 30,
        backgroundColor: '#FAFAFA',
        overflow: 'hidden'
      },

    st_btn: {
        width: 320,
        height: 55,
        backgroundColor: '#FFE589',
        paddingTop: 15,
        marginTop: 15,
        borderRadius: 10
      },
    
    st_btnFont: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#575757'
      },
     
    st_under: {
        flex: 1, 
        width: Dimensions.get('window').width,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center'
    },

    st_under_button: {
        width: 30,
        height: 30,
        marginButtom: 5,
        marginLeft: 45
    }
});