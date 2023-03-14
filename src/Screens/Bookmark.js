import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Dimensions, StyleSheet, Image, Text, View, ScrollView } from 'react-native';

export default function Bookmark({navigation}) {
    return (
        <View style={styles.container}>
            {/* 상딘부 */}
            <View style={styles.bm_titleTheme}>
                <Text style={styles.bm_title}> 게시판 </Text>
            </View>

            {/* 가운데 게시판 목록부분 */}
            <View style={styles.bm_page}>
                <Text style={styles.bm_page_title}> 즐겨찾는 게시판 </Text>
                <View style={styles.bm_page_theme}></View>

                <Text 
                    style={[styles.bm_page_title, 
                        {marginRight: 240}]}> 전체 게시판 </Text>
                <ScrollView 
                    contentContainerStyle={[
                        styles.bm_page_theme, 
                        {height: 400,
                        justifyContent: 'space-between'}]}>
                </ScrollView>
            </View>

            {/* 하단부 */}
            <View style={[styles.bm_under,
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
  
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}>
                    <Image
                        style={styles.bm_under_button}
                        source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_home.png')} />
  
                </TouchableOpacity>
  
                <TouchableOpacity>
                    <Image
                    style={[
                        styles.bm_under_button,
                        {marginLeft: 105}]}
                    source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_list.png')} />
                </TouchableOpacity> */}
  
                <TouchableOpacity
                    onPress={() => navigation.navigate('Setting')}>

                    <Image style={[
                        styles.bm_under_button,
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

    bm_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#575757',
        marginTop: 33,
        marginLeft: 164
      },
  
      bm_titleTheme: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: '#FFEDAB',
        alignItems: 'center',
        flexDirection: 'row'
      },

      bm_page: {
        flex: 6.5,
        width: Dimensions.get('window').width,
        height: 650,
        alignItems: 'center'
      },

      bm_page_title: {
        fontSize: 21, 
        color: '#525252', 
        fontWeight: 'bold',
        marginTop: 19,
        marginRight: 210
      },

      bm_page_theme: {
        width: 340,
        height: 200,
        borderWidth: 1, 
        borderColor: '#525252', 
        borderRadius: 15,
        marginTop: 5
      },

      bm_under: {
        flex: 1, 
        width: Dimensions.get('window').width,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center'
      },
  
      bm_under_button: {
        width: 30,
        height: 30,
        marginButtom: 5,
        marginLeft: 45
      }
});