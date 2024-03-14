import * as React from "react";
// import { Button, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./Mytabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddScreen from "../screens/AddScreen";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
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
            onPress={() => navigation.navigate("Login")}
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
      <Drawer.Screen name="Add" component={AddScreen} />
    </Drawer.Navigator>
  );
}
