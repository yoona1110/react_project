import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Text, Image, View } from 'react-native';

const BulletinBoard_Hot = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.bb_TitleTheme}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Main')}>
                        
                    <Image 
                        style={styles.bb_btn_back}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_back.png')} />
                </TouchableOpacity>
                <Text style={styles.bb_title}> HOT 게시판 </Text>

            </View>

            {/* 게시글 부분 */}
            <View style={styles.bb_list}>
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

    bb_TitleTheme: {
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
    }

});

export default BulletinBoard_Hot;