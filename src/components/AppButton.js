import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed'

export default function AppButton({onPress, text, color}) {
  return (
    <Button
        variant="solid"
        size="xl"
        style={[styles.button, color && { backgroundColor: color }]}
        onPress={onPress}
        >
        <ButtonText style={styles.text}>{text}</ButtonText>
    </Button>
  )
}

const styles = StyleSheet.create({
    button: {
        // color:'#323A52',
        
        backgroundColor: "#FC5C65",
        borderRadius: 50,
        width: "100%",
      },
      text : {
        textAlign:'center'
      }
})