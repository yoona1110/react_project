import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// 메인 페이지
const Main = ({ navigation }) => {
    return (
      <View style={styles.container}>
  
        {/* 상단부 */}
        <View style={styles.main_titleTheme}>
          <Text style={styles.main_title}> 후평동 </Text>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}>
            <Image 
              style={styles.main_notificationImg}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_notification.png')} />
          </TouchableOpacity>
        </View>
  
        {/* 가운데 게시판 부분 */}
        <View 
          style={[styles.main_page, 
          styles.container, 
          {flex: 6.5}]}>

            {/* 메인 게시판 */}
            <View style={styles.main_bulletinBoard}>
              <Text style={styles.main_bb_title}> 메인 게시판 </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('BulletinBoard_Main')}>

                <Text style={styles.main_bb_detail}> 더보기 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.main_bb_theme}></View>

            {/* 즐겨찾기 */}
            <View style={styles.main_bulletinBoard}>
              <Text style={[
                styles.main_bb_title, 
                {marginRight: 157}]}> 즐겨찾는 게시판 </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Bookmark')}>

                <Text style={styles.main_bb_detail}> 더보기 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.main_bb_theme}></View>

            {/* HOT 게시판 */}
            <View style={styles.main_bulletinBoard}>
              <Text style={styles.main_bb_title}> HOT 게시판 </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('BulletinBoard_Hot')}>
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
              elevation: 3 }})]}>
  
          <TouchableOpacity>
            <Image
              style={styles.main_under_button}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_home.png')} />
  
          </TouchableOpacity>
  
          <TouchableOpacity 
            onPress={() => navigation.navigate('Bookmark')}>

            <Image
              style={[
                styles.main_under_button,
                {marginLeft: 105}]}
              source={require('/Users/heoyoona/Desktop/PROJECT/RN_Project/react_native_app/assets/image/main_list.png')} />
  
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}>

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
      backgroundColor: '#FFFFFF'
    },
  
    /* 메인 페이지 */
    main_title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#575757',
      marginTop: 33,
      marginLeft: 20
    },

    main_titleTheme: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: '#FFEDAB',
      alignItems: 'center',
      flexDirection: 'row'
    },

    main_notificationImg: {
      width: 25,
      height: 25,
      marginTop: 33,
      marginLeft: 250
    },
  
    main_page: {
      width: Dimensions.get('window').width,
      height: 650,
      alignItems: 'center'
    },

    main_bulletinBoard: {
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
      fontSize: 18, 
      color: '#525252',
      marginTop: 2
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
      marginButtom: 5,
      marginLeft: 45
    }
  });

  export default Main;