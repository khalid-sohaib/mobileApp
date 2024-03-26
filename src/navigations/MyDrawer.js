import * as React from "react";
// import { Button, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./Mytabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import AuthContext from "../context/AuthContext";
import { ToastAndroid } from "react-native";
import About from "../screens/About";
import ScanScreen from "../screens/ScanScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import useLogout from "../hooks/useLogout";
import Colors from "../theme/Colors";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {

  const logout = useLogout();

  // const Logout = () => {
  //   ToastAndroid.show("Logged out successfully", ToastAndroid.SHORT);
  // };

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#F56E13",
        width: 320,
      }}
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#F56E13',
          // color:'#FD5059'
        },
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: Colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },

        headerRight: () => (
          <Icon
            name={"logout"}
            size={24}
            color={Colors.primary}
            style={{ marginRight: 16 }}
            // onPress={() => navigation.navigate("Login")}
            onPress={ logout}
          />
        ),
      }}
      // drawerContent={(props) => <CustomDrawerContent  />}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Scan" component={ScanScreen} />
    </Drawer.Navigator>
  );
}
