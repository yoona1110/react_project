import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View } from 'react-native';

const BulletinBoard_Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.bb_TitleTheme}>
                <Text style={styles.bb_title}> 메인 게시판 </Text>

            </View>

            {/* 게시글 부분 */}
            <View style={styles.bb_list}>
                <TouchableOpacity 
                    style={styles.bb_btn_add}
                    onPress={() => navigation.navigate('BulletinBoard_Write')}>
                    <Image 
                        style={styles.bb_btnImg}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_plus.png')} />

                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    /* 상단부 */
    bb_title: {
        color: '#575757',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 33,
        marginLeft: 144
    },

    bb_TitleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
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
        marginTop: 635,
        marginLeft: 280, 
        alignItems: 'center'
    },

    bb_btnImg: {
        width: 25,
        height: 25,
        marginTop: 22
    }

});

export default BulletinBoard_Main;