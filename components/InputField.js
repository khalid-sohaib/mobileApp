import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { Input } from '@gluestack-ui/themed'



export default function InputField({placeholder}) {
  return (
    <Input></Input>
  )

}

const styles = StyleSheet.create({
  main:{
    
    // backgroundColor:'red',
    // padding:10,
    // margin:10,
    // width:'90%',
    // borderRadius:10,
    
    
    
  },
  text:{
    fontSize:18,
    color:'black'
  }
})