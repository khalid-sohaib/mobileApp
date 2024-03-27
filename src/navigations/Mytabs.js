import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

// import Icon from 'react-native-vector-icons/MaterialIcons';

import { Box } from "@gluestack-ui/themed";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddScreen from "../screens/AddScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../theme/Colors";

const Tab = createBottomTabNavigator();

export default function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#F56E13',
        },
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          position: "absolute",
          backgroundColor: Colors.white,
          // padding: 20,
        },
        // tabBarLabelPosition:'beside-icon',
        tabBarLabelStyle: { display: "none" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              size={36}
              color={focused ? Colors.primary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Box
              style={{
                backgroundColor: Colors.white,
                padding: 4,
                borderRadius: 100,
                bottom: 10,
                position: "absolute",
              }}
            >
              <Box
                style={{
                  backgroundColor: Colors.primary,
                  padding: 16,
                  borderRadius: 100,
                }}
              >
                <Box
                  style={{
                    backgroundColor: Colors.white,
                    padding: 2,
                    borderRadius: 100,
                  }}
                >
                  <FontAwesome6 name="plus" color={Colors.primary} size={26} />
                </Box>
              </Box>
            </Box>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="user-large"
              color={focused ? Colors.primary : color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
