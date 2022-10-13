import { Image, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native"

export default Login = () => {

  const onPressLoginButton = () => {return;};

  return(
    <View style={styles.loginContainer}>
      <Image style={styles.logo} source={require('../../assets/Login/wall-et.png')}/>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good to see you.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.inputImage} source={require('../../assets/Login/account.png')}/>
        <TextInput style={styles.input} placeholder={'Username or Email'} placeholderTextColor={'#BEBEBE'}/>
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.inputImage} source={require('../../assets/Login/lock.png')}/>
        <TextInput style={styles.input} placeholder={'Password'} placeholderTextColor={'#BEBEBE'}/>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={onPressLoginButton}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent:'center',
    // paddingTop: 120, 
    // paddingBottom: 120,
    paddingRight: 70, 
    paddingLeft: 70
  }, 
  logo: {
    width: 260,
    resizeMode: 'contain', 
    marginBottom: 10
  }, 
  greetingContainer:{
    alignItems: 'flex-start',
    width:'100%',
    marginBottom: 10,
  },
  greeting:{
    fontFamily: 'Lato_700Bold', 
    color: '#fff', 
    fontSize: 22
  },
  inputContainer:{
    flexDirection: "row", 
    width: '100%', 
    height: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  inputImage:{
    flex: .1,
    resizeMode: 'contain'
  }, 
  input:{
    flex: .85,
    borderWidth: 1, 
    borderColor: '#fff',
    width: '88%', 
    height: 30,
    maxHeight: 30,
    borderRadius: 7,
    fontSize: 14,
    paddingLeft: 10, 
    color: '#BEBEBE'
  }, 
  loginButton:{
    height: 35, 
    width: '100%', 
    backgroundColor: '#009CBE', 
    borderRadius: 7, 
    alignItems: 'center', 
    justifyContent: 'center',
    fontFamily: 'Lato_700Bold', 
    marginTop: 20
  }
})