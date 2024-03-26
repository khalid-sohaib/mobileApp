import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Card,
  Image,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductDetailModal from "./ProductDetailModal";
import Colors from "../theme/Colors";

export default function ListingsCard({
  imgUrl,
  title,
  price,
  category,
  description,
  navigation,
}) {
  
  return (
    <Box flex={1}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("ProductDetail", {
            imgUrl: imgUrl,
            title: title,
            price: price,
            category: category,
            description: description,
          })
        }
      >
        <Card borderRadius="$lg" mb="$4"  p="$0">
          {imgUrl && (
            <Image
              mb="$4"
              aspectRatio={16 / 6}
              h={200}
              width="$full"
              overflow="hidden"
              resizeMode="cover"
              borderTopLeftRadius="$xl"
              borderTopRightRadius="$xl"
              source={{ uri: imgUrl }}
              alt={"image-label"}
            />
          )}
          <Box px={"$4"} pb={"$4"}>
            {/* <Text
                            fontSize="$sm"
                            fontStyle="normal"
                            fontFamily="$heading"
                            fontWeight="$normal"
                            lineHeight="$sm"
                            mb="$2"
                            sx={{
                                color: '$textLight700',
                                _dark: {
                                    color: '$textDark200',
                                },
                            }}
                        >
                            {category}
                        </Text> */}
            <HStack justifyContent="space-between">
              <VStack>
                <Heading size="md" fontFamily="$heading" mb="$2">
                  {title.split(" ").slice(0, 3).join(" ")}
                </Heading>
                <Heading size="md" fontFamily="$body" color={Colors.secondary}>
                  $ {price}
                </Heading>
              </VStack>
            </HStack>
          </Box>
        </Card>
      </TouchableWithoutFeedback>

     
    </Box>
  );
}
