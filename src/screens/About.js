import { View, Button } from 'react-native'
import React from 'react'
import { Text } from '@gluestack-ui/themed'

export default function About({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}