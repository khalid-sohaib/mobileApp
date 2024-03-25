import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@gluestack-ui/themed";
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

export default function ListingsCard({
  imgUrl,
  title,
  price,
  category,
  description,
  navigation,
}) {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  return (
    <Box>
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
        <Card borderRadius="$lg" mb="$3" mt={3} p="$0">
          {imgUrl && (
            <Image
              mb="$4"
              h={240}
              width="$full"
              overflow="hidden"
              resizeMode="Fill"
              borderTopLeftRadius="$md"
              borderTopRightRadius="$md"
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
                <Heading size="md" fontFamily="$body" color="#47C6BE">
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
