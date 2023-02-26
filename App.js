import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import comment1 from './comment1';
import Login from './Login';
import Otp from './Otp';
import Signup from './Signup';
import comment from './comment';
const Stack = createNativeStackNavigator();
import Reset from './Reset';
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen name="comment" component={comment}   />      
    <Stack.Screen name="comment1" component={comment1}   />      

      <Stack.Screen name="Login" component={Login}   />      

      <Stack.Screen name="Otp"  
      component={Otp} 
        //options={{title:"Welcome"}}
        />
        <Stack.Screen name="Signup" component={Signup} 
        options={{title:"Welcome"}}
        />
        <Stack.Screen name="Reset" component={Reset} 
        options={{title:"Welcome"}}
        />
        
    
    
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
