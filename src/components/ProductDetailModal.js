import React from "react";
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, ScrollView } from "@gluestack-ui/themed";
import { Heading, Text, Image, Box, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import AppButton from "./AppButton";

export default function ProductDetailModal({ showModal, setShowModal, imgUrl, category, title, price, description }) {
  const handleCloseModal = () => setShowModal(false);

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Product Details</Heading>
          <ModalCloseButton onPress={handleCloseModal} />
        </ModalHeader>
        <ModalBody>
          <Image mb="$4" h={240} width="$full" overflow="hidden" resizeMode="contain" borderTopLeftRadius="$md" borderTopRightRadius="$md" source={{ uri: imgUrl }} alt="image-label" />
          <Box px="$4" >
                <Text fontSize="$sm" color="$textLight700" mb="$2">{category}</Text>
                <Heading size="md" mb="$2">{title}</Heading>
                <Heading size="md" color="#47C6BE">${price}</Heading>
            <HStack justifyContent="space-between">
              <ScrollView height={100}>
                <Text fontSize="$sm" color="$textLight700" mb="$2">{description}</Text>
              </ScrollView>
            </HStack>
          </Box>
        </ModalBody>
        <ModalFooter  justifyContent="center">
            <VStack space="md">
                <AppButton onPress={handleCloseModal} text={'Add to cart'}/>
                <AppButton onPress={handleCloseModal} text={'Cancel'} color={'#47C6BE'}/>
            </VStack>
          {/* <Button variant="outline" size="sm" action="secondary" mr="$3" onPress={handleCloseModal}><ButtonText>Cancel</ButtonText></Button>
          <Button size="sm" action="positive" borderWidth="$0" onPress={handleCloseModal}><ButtonText>Explore</ButtonText></Button> */}
         
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
