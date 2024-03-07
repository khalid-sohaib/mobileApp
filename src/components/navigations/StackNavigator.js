import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import { ImageBackground } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';



const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    main : {
      backgroundColor:'gray',
      flex:1,
    //   justifyContent:'flex-start',
      padding:30,
    //   alignItems:'center',
    },
    heading:{
        textAlign:'center',
        paddingVertical:20,
    },
    
    image:{
      flex: 1,
      justifyContent: 'center',
    },
   
  })