
import React, { useState } from 'react'
import { ButtonText, Icon, ModalContent, ModalFooter, ModalHeader } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { Center } from '@gluestack-ui/themed';
import { Modal } from '@gluestack-ui/themed';
import { ModalBackdrop } from '@gluestack-ui/themed';
import { Heading } from '@gluestack-ui/themed';
import { ModalCloseButton } from '@gluestack-ui/themed';
import { ModalBody } from '@gluestack-ui/themed';
import { Text } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';

export default function ProductDetailModal({showModal, setShowModal, imgUrl, category, title, price, description}) {

        const ref = React.useRef(null);
        return (

            
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size='lg'>Product Details</Heading>
                        <ModalCloseButton>
                            <Icon
                                name={"close"}
                                size={24}
                                color="#FA5057"
                                style={{ marginRight: 16 }}
                                onPress={() => setShowModal(false)}
                            />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                    <Image
                        mb="$4"
                        h={240}
                        width="$full"
                        overflow='hidden'
                        resizeMode='contain'
                        borderTopLeftRadius="$md"
                        borderTopRightRadius="$md"
                        source={{ uri: imgUrl }}
                        alt={'image-label'}
                    />
                    <Box px={'$4'} pb={'$4'}>
                        <Text
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
                        </Text>
                        <Text
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
                            {description}
                        </Text>
                        <HStack justifyContent='space-between'>
                            <VStack>
                                <Heading size="md" fontFamily="$heading" mb="$2">
                                    {title}
                                </Heading>
                                <Heading size="md" fontFamily="$body" color='#47C6BE'>
                                    {price}
                                </Heading>
                            </VStack>
                        </HStack>
                    </Box>
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            onPress={() => setShowModal(false)}
                        >
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button
                            size="sm"
                            action="positive"
                            borderWidth='$0'
                            onPress={() => setShowModal(false)}
                        >
                            <ButtonText>Explore</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        );
      }
    