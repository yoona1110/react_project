import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

const Setting = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.st_titleTheme}>
                <Text style={styles.st_title}> 환경설정 </Text>
            </View>

            {/* 중간부 */}
            <View style={styles.st_center}>

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

export default Setting;