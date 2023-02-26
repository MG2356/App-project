import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View ,Image,Button } from 'react-native';
import React, { useState, useEffect } from 'react';

const Otp = ({navigation , route}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return ( 
  
    <View style={styles.container}>
          

    <Text style={styles.spam1} >Login </Text>
    <Text style={styles.spam2}>with</Text>
    <Text style={styles.spam3}>Otp</Text>

    <View style={styles.form}>
     
          <Text style={styles.head} >Enter the code that
          you recieved on the mobile number XXX987
           </Text>
          
    
    <TextInput style={styles.otpbox1}
    required="Number"
      />
      <TextInput style={styles.otpbox2}
    required="Number"
      />
      <TextInput style={styles.otpbox3}
    required="Number"
      />
      <TextInput style={styles.otpbox4}
    required="Number"
      />
      
      </View>
    <View style={styles.btn1}>
    <Button  title="Confirm"
    onPress={()=> navigation.navigate("Login",{language :"English"})}></Button></View>
     
     
     <View ><Text style={styles.time}> Resend Otp in {seconds}:{seconds}</Text></View>

     </View>
  
  
  
  
  
  )
};

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
        top:150,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"rgba(51,51,51,1)",
      borderTopLeftRadius:10,
  borderBottomRightRadius:10,
    },
    head:{
 top:10,
 left:15,
 letterSpacing:1,
 fontSize:18,
    },
    otpbox1:{
position:"absolute",
left:62,
top:80,
width:43,
height:53,
borderRadius:5,
backgroundColor:"lightgrey",

borderColor:"rgba(0,0,0,1)",
    },
    otpbox2:{
        position:"absolute",
        left:124,
        top:80,
        width:43,
        height:53,
        borderRadius:5,
        backgroundColor:"lightgrey",
        
        borderColor:"rgba(0,0,0,1)",
            },
            otpbox3:{
                position:"absolute",
                left:182,
                top:80,
                width:43,
                height:53,
                borderRadius:5,
                backgroundColor:"lightgrey",
                
                borderColor:"rgba(0,0,0,1)",
                    },
                    otpbox4:{
                        position:"absolute",
                        left:245,
                        top:80,
                        width:43,
                        height:53,
                        backgroundColor:"lightgrey",
                        borderRadius:5,
                        borderColor:"rgba(0,0,0,1)",
                            },
   
    spam1:{
      position:"absolute",
      left:90,
      top:34,
      width:72,
      color:"white",
      fontSize:24,
      fontStyle:"normal",
       },
       spam2:{
        position:"absolute",
        left:165,
        top:34,
        width:72,
        color:"white",
        fontSize:24,
        fontStyle:"normal",
         },
         spam3:{
            position:"absolute",
            left:220,
            top:34,
            
            color:"white",
            fontSize:24,
            fontStyle:"normal",
             },
    btn1:{
      position:"absolute",
      left:20,
      top:320,
      width:351,
      height:60,
      
    },
    
    time:{
        color: '#1878F2',
        top:90,
        left:-55,
        
      },
  
  });
  export default Otp;

  