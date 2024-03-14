import { View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { Text } from "@gluestack-ui/themed";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
