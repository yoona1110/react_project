import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

export default function Notification({navigation}) {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.n_titleTheme}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Main')}>
                    <Image 
                        style={styles.n_btn_back}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_back.png')} />
                </TouchableOpacity>
                <Text style={styles.n_title}> 알림창 </Text>
            </View>

            {/* 알림목록 부분 */}
            <View style={{flex: 7.5}}>

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

    n_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#575757',
        marginTop: 33,
        marginLeft: 126
    },

    n_titleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
    },

    n_btn_back: {
        width: 28,
        height: 28,
        marginTop: 33,
        marginLeft: 10
    }
});