import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, ButtonText, Heading, Image, ImageBackground, ScrollView, Text } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'
import AppButton from '../components/AppButton'

export default function About({navigation}) {
  return (
    <>
    <Box style={styles.main}>
        {/* <Image style={styles.image} source={require('../assests/bg3.jpg')} alt='about'/> */}
        <ImageBackground style={[styles.image,{alignItems:'center', justifyContent:'flex-end', paddingBottom:40} ]} source={require('../assests/bg3.jpg')} alt='about'>
          <Box style={styles.heading}>
            <Heading style={styles.title}>About Our App</Heading>
          </Box>
        </ImageBackground>
        <Box style={styles.container}>
            <Text style={styles.description}>
              Welcome to our app! This app helps you explore and add products.
            </Text>
            <Text style={styles.version}>Version: 1.0.0</Text>
            <Text style={styles.credits}>Credits: gluestack ui, React Navigation, etc </Text>

        </Box>


    </Box>
        <Box padding={20} textAlign='center' justifyContent='center' > 
         <AppButton onPress={() => navigation.goBack()} text={"Go back home"}/>
        </Box>
    </>
  )
}

const styles = StyleSheet.create({
  main : {
    flex: 1, 
    marginTop:60,
    marginBottom:20,
    alignItems: "center", 
    justifyContent: "center"
  },
  image : {
    flex : 0.6,
    width:'100%'
  },
  container : {
    flex : 0.4,
    padding:20,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color:'#f45962',

  },
  heading : {
    marginBottom: 10, padding:25, backgroundColor: 'rgba(245, 222, 179, 0.7)', borderRadius:20
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 60,
  },
  version: {
    fontSize: 14,
    marginBottom: 5,
    color:'#4ECDC4'
  },
  credits: {
    fontSize: 16,
    fontStyle: 'italic',
    color:'#FC5C65'
  },
  Button: {
    backgroundColor:'#FC5C65',
    borderRadius:50,
  }
})