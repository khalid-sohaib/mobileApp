import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from '@gluestack-ui/themed'
import { StyleSheet } from 'react-native'

export default function Home() {
    const imgPath = '../assests/bg1.jpg'

  return (
    <ImageBackground source={require(imgPath)} resizeMode="cover" style={[styles.image, styles.main]}>
        <Text>Home</Text>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    main : {
      backgroundColor:'gray',
      flex:1,
    //   justifyContent:'flex-start',
      padding:30,
    //   alignItems:'center',
    },
    heading:{
        textAlign:'center',
        paddingVertical:20,
    },
    
    image:{
      flex: 1,
      justifyContent: 'center',
    },
   
  })