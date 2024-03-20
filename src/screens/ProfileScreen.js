import {  Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Box, ChevronsRightIcon, Image, Text } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome6";
import AuthContext from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  const imgUrl = require('../assests/profile.webp');

  const {toggleLogin} = useContext(AuthContext);

  const handleLogout = ()=>{
    Alert.alert("Logout", "Are you sure you want to log-out", 
    [
      {
        text :'Yes',
        onPress : toggleLogin
      },
      {
        text :'No',
      }
    ])
  }

  return (
    <View style={{ flex: 1, marginTop:60 }}>
     
      <TouchableOpacity>
        <HStack backgroundColor="#fff" justifyContent="space-between" alignItems="center" space={"lg"} p={12} marginBottom={32}>
          <HStack alignItems="center" space="lg" >
            <Box style={styles.profilePic}>
              <Image
                // style={{ width: '100%', height: 80 }}
                source={imgUrl}
                resizeMode='cover'
                alt={'profile-picture'}
              />
            </Box>

            <Box>
              <Text style={styles.title}>Khalid</Text>
              <Text>Khalid@domain.com</Text>
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
            <Box borderRadius={100}  overflow="hidden" width={60} height={60}  alignItems="center" justifyContent="center" p={4} backgroundColor="#FF5C65">
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
            <Box borderRadius={100}  overflow="hidden" width={60} height={60}  alignItems="center" justifyContent="center" p={4} backgroundColor="#52CECD">
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
      
      <TouchableOpacity onPress={handleLogout}>
        <HStack backgroundColor="#fff" justifyContent="space-between" alignItems="center" space={"lg"} p={12} marginVertical={32}>
          <Text style={styles.title} p={16}>Log out</Text>
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