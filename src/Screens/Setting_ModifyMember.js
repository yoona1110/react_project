import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Setting_ModifyMember = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.mm_titleTheme}>
                <Text style={styles.mm_title}> 회원 정보 수정 </Text>
            </View>

            {/* 회원 정보 부분*/}
            <View style={{flex: 5.8}}>
                
            </View>

            {/* 하단부 */}
            <View style={{flex: 1.7}}>
                <TouchableOpacity
                    style={styles.mm_btn}
                    onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.mm_btnFont}> 확인 </Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                    style={styles.mm_btn}
                    onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.mm_btnFont}> 취소 </Text>
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
        marginLeft: 132
    },

    mm_titleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
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