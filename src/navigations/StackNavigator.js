import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { ImageBackground } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import MyDrawer from "./MyDrawer";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Listings from "../screens/Listings";
import ProductDetail from "../screens/ProductDetail";
import Colors from "../theme/Colors";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      headerMode="none"
      screenOptions={{ headerShown: false }}
    >
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Listings"
            component={Listings}
            options={{ 
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: Colors.primary }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
          />
          
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "gray",
    flex: 1,
    //   justifyContent:'flex-start',
    padding: 30,
    //   alignItems:'center',
  },
  heading: {
    textAlign: "center",
    paddingVertical: 20,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
