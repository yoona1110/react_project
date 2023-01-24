import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 니캉내캉 </Text>

      <View style={styles.idInputTheme}>
        <Text style={styles.inputTitle}> 아이디 </Text>
        <TextInput style={styles.idInput}/> 
      </View>
      
      <View style={styles.pwInputTheme}>
        <Text style={styles.inputTitle}> 비밀번호 </Text>
        <TextInput style={styles.pwInput} secureTextEntry='true'/> 
      </View>

      {/* 특정 영역을 지정하여 터치 이벤트를 사용할 수 있음 */}
      <TouchableOpacity 
        style={styles.btn_SignUp}
        onPress={() => navigation.navigate('SignInPage')}>
        <Text style={styles.btnFont}> 회원가입 </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btn_Login}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.btnFont}> 로그인 </Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDAB',
    alignItems: 'center'
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#575757',
    marginTop: 220
  },

  inputTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 12
  },

  idInputTheme: {
    flexDirection: 'row',
    marginTop: 58,
    marginLeft: 9
  },

  pwInputTheme: {
    flexDirection: 'row',
    marginTop: 15
  },

  idInput: {
    width: 220,
    height: 50,
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginLeft: 25,
    backgroundColor: '#FAFAFA'
  },

  pwInput: {
    width: 220,
    height: 50,
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: '#FAFAFA'
  },

  btn_SignUp: {
    width: 320,
    height: 60,
    backgroundColor: '#FFE589',
    paddingTop: 15,
    marginTop: 50,
    borderRadius: 10
  },

  btnFont: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#575757'
  },

  btn_Login: {
    width: 320,
    height: 60,
    backgroundColor: '#FFE589',
    paddingTop: 15,
    marginTop: 15,
    borderRadius: 10
  }
});

export default login