import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";
import Listings from "../screens/Listings";
import Login from "../screens/Login";
import ProductDetail from "../screens/ProductDetail";
import Register from "../screens/Register";
import Colors from "../theme/Colors";
import MyDrawer from "./MyDrawer";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { isLoggedIn } = useContext(AuthContext);
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
              headerTitleAlign: "center",
              headerTintColor: Colors.primary,
            }}
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
