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

            {/* 메인 게시판 */}
            <View style={styles.main_BulletinBoard}>
              <Text style={styles.main_bb_title}> 메인 게시판 </Text>

              <TouchableOpacity>
                <Text style={styles.main_bb_detail}> 더보기 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.main_bb_theme}></View>

            {/* 즐겨찾기 */}
            <View style={styles.main_BulletinBoard}>
              <Text style={styles.main_bb_title}> 즐겨찾기 </Text>

              <TouchableOpacity>
                <Text style={styles.main_bb_detail}> 더보기 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.main_bb_theme}></View>

            {/* HOT 게시판 */}
            <View style={styles.main_BulletinBoard}>
              <Text style={styles.main_bb_title}> HOT 게시판 </Text>

              <TouchableOpacity>
                <Text style={styles.main_bb_detail}> 더보기 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.main_bb_theme}></View>
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
                {marginLeft: 105}]}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_list.png')} />
  
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Image
              style={[
                styles.main_under_button,
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
      width: 25,
      height: 25,
      marginTop: 53,
      marginLeft: 250
    },
  
    main_Page: {
      width: Dimensions.get('window').width,
      height: 650
    },

    main_BulletinBoard: {
      marginTop: 19, 
      flexDirection: 'row'
    },

    main_bb_title: {
      fontSize: 21, 
      color: '#525252', 
      fontWeight: 'bold',
      marginRight: 180
    },

    main_bb_detail: {
      fontSize: 20, 
      color: '#525252'
    },

    main_bb_theme: {
      width: 340,
      height: 165,
      borderWidth: 1, 
      borderColor: '#525252', 
      borderRadius: 15,
      marginTop: 5
    },
  
    main_under: {
      flex: 1, 
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center'
    },

    main_under_button: {
      width: 30,
      height: 30,
      marginLeft: 45
    }
  });

  export default Main;