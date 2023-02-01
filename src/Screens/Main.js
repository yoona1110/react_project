import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// 메인 페이지
const Main = ({ navigation }) => {
    return (
      <View
        style={[styles.container,
          {backgroundColor: '#FFFFFF'}]}>
  
        {/* 상단부 */}
        <View 
          style={[styles.main_TitleTheme,
            {alignItems: 'flex-start',
            flexDirection: 'row',
            flex: 1}]}>
          <Text 
            style={[styles.main_Title,
              {marginLeft: 20}]}> 후평동 </Text>
  
          <TouchableOpacity>
            <Image 
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/main_notification.png')}
              style={styles.main_notificationImg}/>
          </TouchableOpacity>
        </View>
  
        {/* 가운데 게시판 부분 */}
        <View 
          style={[styles.main_Page, 
          styles.container, 
          {flex: 6.5,
           alignItems: 'center'}]}>
  
        </View>
  
        {/* 하단부 */}
        <View style={[styles.main_under,
          Platform.select({
            ios: {
              shadowColor: '#000000',
              shadowOpacity: 5,
              shadowOffset: {
                width: 0,
                height: -0.1},
              shadowRadius: 0.1
            },
            android: {
              elevation: 3
            }})]}>
  
          <TouchableOpacity>
            <Image
              style={styles.main_under_button}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_home.png')} />
  
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Image
              style={[
                styles.main_under_button,
                {marginLeft: 95}]}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_list.png')} />
  
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Image
              style={[
                styles.main_under_button,
                {marginLeft: 95}]}
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
    },
  
    /* 메인 페이지 */
    main_Title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#575757',
      marginTop: 53
    },

    main_TitleTheme: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: '#FFEDAB',
      alignItems: 'center'
    },

    main_notificationImg: {
      width: 30,
      height: 30,
      marginTop: 51,
      marginLeft: 245
    },
  
    main_Page: {
      width: Dimensions.get('window').width,
      height: 650
    },
  
    main_under: {
      flex: 1, 
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center'
    },

    main_under_button: {
      width: 40,
      height: 40,
      marginLeft: 40
    }
  });

  export default Main;