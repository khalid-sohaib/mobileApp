import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, ChevronsRightIcon, HStack, Text } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import Colors from "../theme/Colors";

export default function UserProfile({ imageUrl, title, subTitle, icon }) {
  const imgUrl = require("../assests/profile.webp");

  return (
    <TouchableOpacity>
      <HStack
        backgroundColor="#fff"
        justifyContent="space-between"
        alignItems="center"
        space={"lg"}
        p={12}
        marginBottom={32}
      >
        <HStack alignItems="center" space="lg">
          <Box style={styles.profilePic}>
            <Image
              // style={{ width: '100%', height: 80 }}
              source={imageUrl || imgUrl}
              resizeMode="cover"
              alt={"profile-picture"}
            />
          </Box>

          <Box>
            <Text style={styles.title}>{title || "Khalid"}</Text>
            <Text style={styles.subTitle}>
              {subTitle || "khalid.sohaib@datics.com"}
            </Text>
          </Box>
        </HStack>

        <Box display={icon || "flex"}>
          <ChevronsRightIcon />
        </Box>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  profilePic: {
    borderRadius: 100,
    overflow: "hidden",
    width: 80,
  },
  subTitle: {
    color: Colors.gray,
  },
});
