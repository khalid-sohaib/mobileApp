import {
    Box,
    Button,
    ButtonText, Heading,
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@gluestack-ui/themed";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomModal = ({ isOpen, onClose, imgUrl, category, title, price }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Product Details</Heading>
          <ModalCloseButton>
            <Icon
              name={"close"}
              size={24}
              color="#FA5057"
              style={{ marginRight: 16 }}
              onPress={onClose}
            />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Box px={"$4"} pb={"$4"}>
            <Heading size="md" fontFamily="$heading" mb="$2">
              {title}
            </Heading>
            <Heading size="md" fontFamily="$body" color="#47C6BE">
              {price}
            </Heading>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={onClose}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={onClose}
          >
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
