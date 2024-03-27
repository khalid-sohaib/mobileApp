import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={openDrawer}>
        <Text>☰</Text> {/* Replace with your menu icon */}
      </TouchableOpacity>
      <Text>{title}</Text>
      <View style={{ width: 30 }} /> {/* Placeholder for spacing */}
    </View>
  );
};

export default CustomHeader;
