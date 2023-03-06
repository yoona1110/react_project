import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, TouchableOpacity, StyleSheet, View, Text, Image, TextInput } from 'react-native';

export default function BulletinBoard_Write({navigation}) {
    return(
        <View style={styles.container}>
                
            {/* 상단부 */}
            <View style={styles.write_title}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BulletinBoard_Main')}>

                    <Image 
                        style={styles.write_btn_back}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_back.png')}/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('BulletinBoard_Main')}>
                    <Text style={styles.write_btn_ok}> 완료 </Text>
                </TouchableOpacity>
            </View>

            {/* 게시글 작성 부분 */}
            <View style={styles.write_body}>
                <TextInput 
                    style={styles.write_bodyTitle}
                    placeholder={'제목을 입력하세요.'} />

                <TextInput
                    style={styles.write_bodyContent}
                    placeholder={'내용을 입력하세요.'}
                    multiline={true} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },

    /* 상단부 */
    write_title: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        flexDirection: 'row'
    },

    write_btn_back: {
        width: 28,
        height: 28,
        marginTop: 55,
        marginLeft: 10
    },

    /* 게시글 작성 부분 */
    write_body: {
        flex: 7.5,
    },

    write_bodyTitle: {
        width: 350,
        height: 30,
        padding: 0,
        margin: 0,
        color: '#575757',
        fontSize: 20,
        marginTop: 23,
        margin: 0,
        padding: 0,
        paddingLeft: 5,
        paddingBottom: 10,
        borderBottomColor: '#575757',
        borderBottomWidth: 1
    },

    write_bodyContent: {
        width: 350,
        height: 620,
        color: '#575757',
        fontSize: 20,
        marginTop: 15,
        paddingTop: 10,
        paddingLeft: 10,
        borderColor: '#575757',
        borderWidth: 1,
        textAlignVertical: 'top'
    },

    write_btn_theme: {
        width: 350,
        height: 55,
        backgroundColor: '#FFE589',
        paddingTop: 15,
        marginTop: 20,
        borderRadius: 10
    },

    write_btn_ok: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#575757',
        marginTop: 53,
        marginLeft: 285
    }
});