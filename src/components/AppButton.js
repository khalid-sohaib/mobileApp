import { Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../theme/Colors";

export default function AppButton({ onPress, text, color }) {
  return (
    <Button
      variant="solid"
      size="xl"
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <ButtonText style={styles.text}>{text}</ButtonText>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    // color:'#323A52',

    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: "100%",
  },
  text: {
    textAlign: "center",
  },
});
