import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>

       <Text style = {styles.messageHeader}>Welcome {"\n"}Back!</Text> 

      <View style = {styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./image/user.png")} />
          <TextInput
            style={styles.textInput}
            placeholder="Username or Email"
            placeholderTextColor="#9e9e9e"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./image/padlock.png")} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#9e9e9e"
            secureTextEntry
          />
          <TouchableOpacity>
            <Image style={styles.eyeIcon} source={require("./image/show.png")} />
          </TouchableOpacity>
        </View>
      </View>    

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
      </View>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={{fontSize:16}}>- OR Continue with -</Text>
        <View style={styles.socialContainer}>
            <View style={styles.imageContainer}><Image style={styles.imageStyle} source={require("./image/google.png")}/></View>
            <View style={styles.imageContainer}><Image style={styles.imageStyle} source={require("./image/apple-logo.png")}/></View>
            <View style={styles.imageContainer}><Image style={styles.imageStyle} source={require("./image/facebook.png")}/></View>
        </View>
        <Text style={styles.createAccountStyle}> Create an Account? <Text style={styles.signUpStyle}>Sign Up</Text></Text>
      </View>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  messageHeader: {
    fontSize: 52,
    fontWeight: 'bold', 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bodyContainer: {
    marginTop: 40,
    gap: 25
  },
  logoStyle: {
    width: 24,
    height: 24,
    margin: 10
  },
  inputContainer: {
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12, // apply both padding left and right
  },
  inputIcon: {
    width: 18,
    height: 18,
    color: '#777',
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#000',
  },
  eyeIcon: {
    width: 18,
    height: 18,
    color: '#777',
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  showContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  forgotPasswordText: {
    color: '#f35471',
  },
  buttonStyle: {
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    borderRadius:3,
    height:50,
    backgroundColor: '#f35471',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize:24,
  },
  footerContainer:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    gap:18
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    gap:10
  },
  imageContainer:{
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: '#F1657E',    
    backgroundColor: '#fff5f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle:{
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  createAccountStyle:{
    marginTop: 10,
    fontSize: 16,
  },
  signUpStyle: {
    color: '#F1657E',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
});
