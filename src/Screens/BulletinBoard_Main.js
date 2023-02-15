import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

export default function BulletinBoard_Main({navigation}) {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.bb_titletheme}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Main')}>
                        
                    <Image 
                        style={styles.bb_btn_back}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_back.png')} />
                </TouchableOpacity>
                <Text style={styles.bb_title}> 메인 게시판 </Text>

            </View>

            {/* 게시글 부분 */}
            <View style={styles.bb_list}>
                <Text style={{
                    marginTop: 320, 
                    marginLeft: 130}}> 작성된 게시글이 없습니다. </Text> 
                    
                <TouchableOpacity 
                    style={styles.bb_btn_add}
                    onPress={() => navigation.navigate('BulletinBoard_Write')}>
                    <Image 
                        style={styles.bb_btnImg}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_plus.png')} />

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

    /* 상단부 */
    bb_title: {
        color: '#575757',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 33,
        marginLeft: 103
    },

    bb_titletheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
    },

    bb_btn_back: {
        width: 28,
        height: 28,
        marginTop: 33,
        marginLeft: 10
    }, 

    /* 게시글 부분 */
    bb_list: {
        flex: 7.5,
        backgroundColor: '#FFFFFF'
    },

    bb_btn_add: {
        width: 70,
        height: 70,
        backgroundColor: '#FFEDAB',
        borderRadius: 35,
        marginTop: 305,
        marginLeft: 280, 
        alignItems: 'center'
    },

    bb_btnImg: {
        width: 25,
        height: 25,
        marginTop: 22
    }
});