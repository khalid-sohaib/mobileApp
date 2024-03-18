import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Text, View } from '@gluestack-ui/themed';
import { Button } from 'react-native';
import Login from '../screens/Login';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Box } from '@gluestack-ui/themed';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function NotificationsScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NotificationsScreen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingsScreen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function MyTabs({navigation}) {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#F56E13',  
        },
        tabBarStyle:{
          height:60,
          // borderTopLeftRadius:40,
          // borderTopRightRadius:40,
          position:'absolute',
          backgroundColor:'#fff',
          // padding: 20,
        },
        // tabBarLabelPosition:'beside-icon',
        tabBarLabelStyle:{display:'none'},
        headerShown:false
      }}>
      <Tab.Screen name="Home" component={Home} options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" size={30} color={focused ? '#FA5057' : color } />
          ),
        
        }}
      />
      <Tab.Screen name="AddNew" component={AddScreen} options={{
        

          tabBarIcon: ({ color }) => (
            <Box style={{backgroundColor:'#fff', padding:4, borderRadius:100, bottom:10, position:'absolute' }}>
              <Box style={{backgroundColor:'#FA5057', padding:16, borderRadius:100}}>
                <Box style={{backgroundColor:'#fff', padding:2, borderRadius:100}}>
                  <FontAwesome6 name="plus" color={'#FA5057'} size={24}  />
                </Box>
              </Box>
            </Box>
          ),
        
        }}
      />
     
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="user" color={focused ? '#FA5057' : color } size={26} />
          ),
        
        }}
      />
    </Tab.Navigator>
  );
}