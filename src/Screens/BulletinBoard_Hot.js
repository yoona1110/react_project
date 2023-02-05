import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const BulletinBoard_Hot = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.bb_TitleTheme}>
                <Text style={styles.bb_title}> HOT 게시판 </Text>

            </View>

            {/* 게시글 부분 */}
            <View style={styles.bb_list}>
            </View>
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
    }

});

export default BulletinBoard_Hot;