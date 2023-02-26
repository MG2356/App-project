import React from 'react'
import { StyleSheet, Text, TextInput ,View ,Image ,Button} from 'react-native';

function Comment1({navigation,route}) {
  return (
<View style={styles.container}>
<Text style={styles.heading}>naukri paao</Text>
<Text style={styles.paragraph}>Learning an employable skill has never been easier.
    You can upskill yourself with our courses in
     as low as low as 15 days &1000 
</Text>

<View style={styles.btn1}>
      <Button   title="next"
      onPress={()=> navigation.navigate("Login",{language :"English"})}></Button>

      </View>
 
      </View>

       )
}

const styles = StyleSheet.create({
    btn1:{
        backgroundColor:"white",
        //color: '#1878F2',
        position:"absolute",
        left:20,
        top:300,
        width:351,
        height:60,
        
      },
      container: {
        flex: 1,
        position:"absolute",
        backgroundColor: '#1878F2',
        width:400,
        top:300,
        height:400,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        
      },
      heading:{
        color:"white",
        fontSize:40,
        top:-93,
      },
      paragraph:{
        color:"white",
        top:-80,
        fontSize:15,
        letterSpacing:2,
      }

})
export default Comment1;