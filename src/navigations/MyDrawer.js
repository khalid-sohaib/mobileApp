import * as React from "react";
// import { Button, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./Mytabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddScreen from "../screens/AddScreen";
import AuthContext from "../context/AuthContext";
import { ToastAndroid } from "react-native";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {

  const {toggleLogin} =React.useContext(AuthContext);
  
  const Logout = () => {
    toggleLogin();
    ToastAndroid.show('Logged out successfully', ToastAndroid.SHORT);
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#F56E13',
          // color:'#FD5059'
        },
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: "#FD5059",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Icon
            name={"logout"}
            size={24}
            color="#FA5057"
            style={{ marginRight: 16 }}
            // onPress={() => navigation.navigate("Login")}
            onPress={() => Logout()}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
  
}
