import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View ,Image,Button } from 'react-native';

export default function Signup({navigation , route}) {
    return (
        <View style={styles.container}>
        <Text style={styles.spam}  onPress={()=>navigation.navigate("Login")}>Login </Text>
        <Text style={styles.spam1} onPress={()=>navigation.navigate("Signup")}>signup</Text>
  
        <View style={styles.form}>
  
          <TextInput style={styles.input1} placeholder="Email" />
          <TextInput style={styles.input1}
            secureTextEntry={true}
            placeholder="Password"
          />
          </View>
        <StatusBar style="auto" />
        <View style={styles.btn1}>
        <Button  title="Login"
        onPress={()=> navigation.navigate("Otp",{language :"English"})}></Button></View>
         <View> 
         <Text style={styles.sp1} >Forgot Password </Text>
         <Text style={styles.sp2} onPress={() =>navigation.navigate("Otp")}>Login with otp? </Text>
  
         </View>
         
         </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:"absolute",
      backgroundColor: '#1878F2',
      width:400,
      top:100,
      height:400,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius:15,
      borderBottomRightRadius:15,
      
    },
    form:{
  backgroundColor:'white',
  top:100,
  width:400,
  height:480,
  borderTopLeftRadius:15,
  borderBottomRightRadius:15,
  position:"absolute",
  
    },
    input1: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"rgba(51,51,51,1)",
      borderTopLeftRadius:10,
  borderBottomRightRadius:10,
    },
    spam:{
   position:"absolute",
   left:55,
   top:34,
   width:72,
   color:"white",
   fontSize:24,
   letterSpacing:1,
   fontStyle:"normal",
    },
    spam1:{
      position:"absolute",
      left:175,
      top:34,
      width:72,
      color:"rgba(196,196,196,1)",
      fontSize:24,
      fontStyle:"normal",
       },
       
    btn1:{
      position:"absolute",
      left:20,
      top:300,
      width:351,
      height:60,
      
    },
    sp1:{
      color: '#1878F2',
      top:50,
      left:-130,
    },
    sp2:{
      color: '#1878F2',
      top:30,
      left:120,
    }
  
  });
  