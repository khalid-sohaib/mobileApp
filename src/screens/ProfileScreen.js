import {  Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Box, ChevronsRightIcon, Image, Text } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome6";
import AuthContext from "../context/AuthContext";
import useLogout from "../hooks/useLogout";
import Colors from "../theme/Colors";
import UserProfile from "../components/UserProfile";

export default function ProfileScreen({ navigation }) {
  const imgUrl = require('../assests/profile.webp');
  const logout = useLogout();
  // const {toggleLogin} = useContext(AuthContext);

  // const handleLogout = ()=>{
  //   Alert.alert("Logout", "Are you sure you want to log-out", 
  //   [
  //     {
  //       text :'Yes',
  //       onPress : toggleLogin
  //     },
  //     {
  //       text :'No',
  //     }
  //   ])
  // }

  return (
    <View style={{ flex: 1, marginTop:60 }}>

      <UserProfile/>
      <TouchableOpacity onPress={()=>navigation.navigate('Listings')}>
        <HStack backgroundColor="#fff" justifyContent="space-between" alignItems="center" space={"lg"} p={12} marginVertical={4}>

          <HStack alignItems="center" space="lg" >
            <Box borderRadius={100}  overflow="hidden" width={60} height={60}  alignItems="center" justifyContent="center" p={4} backgroundColor={Colors.primary}>
              <Icon name={'list'} size={30} color="#fff"/>   
            </Box>

            <Box>
              <Text style={styles.title}>My Listings</Text>
            </Box>
          </HStack>

          <Box>
            <ChevronsRightIcon/>
          </Box>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity>
        <HStack backgroundColor="#fff" justifyContent="space-between" alignItems="center" space={"lg"} p={12} marginVertical={4}>

          <HStack alignItems="center" space="lg" >
            <Box borderRadius={100}  overflow="hidden" width={60} height={60}  alignItems="center" justifyContent="center" p={4} backgroundColor={Colors.secondary}>
              <Icon name={'message'} size={30} color="#fff"/>   
            </Box>

            <Box>
              <Text style={styles.title}>Messages</Text>
            </Box>
          </HStack>

          <Box>
            <ChevronsRightIcon/>
          </Box>

        </HStack>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={logout}>
        <HStack backgroundColor="#fff" justifyContent="space-between" alignItems="center" space={"lg"} p={12} marginVertical={32}>
          <Text style={[styles.title, {color:Colors.primary}]} p={16}>Log out</Text>
          <Box>
            <ChevronsRightIcon/>
          </Box>
        </HStack>

      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title : {
    fontSize:18,
    fontWeight:700
  },
  profilePic : {
    borderRadius:100,
    overflow:"hidden",
    width:80,

  }
})