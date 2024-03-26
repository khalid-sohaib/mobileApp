import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@gluestack-ui/themed';
import { Card, Image, Box, Heading, Text, HStack, VStack, Button, ButtonText } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductDetailModal from './ProductDetailModal';
import Colors from '../theme/Colors';


export default function ProductCard({ imgUrl, title, price, category, description}) {
    const [showModal, setShowModal] = useState(false);
    const ref = React.useRef(null);
    // if (!imgUrl) {
    //     return imgUrl; 
    // }
    return (
        <Box>
            <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                <Card borderRadius="$lg" mb="$3" mt={3} p='$0'>
                    {imgUrl && <Image
                        mb="$4"
                        h={240}
                        width="$full"
                        overflow='hidden'
                        resizeMode='contain'
                        borderTopLeftRadius="$md"
                        borderTopRightRadius="$md"
                        
                        source={{ uri: imgUrl }}
                        alt={'image-label'}
                    />}
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
                        <HStack justifyContent='space-between'>
                            <VStack>
                                <Heading size="md" fontFamily="$heading" mb="$2">
                                    {title.split(' ').slice(0,3).join(' ')}
                                </Heading>
                                <Heading size="md" fontFamily="$body" color={Colors.secondary}>
                                    $ {price}
                                </Heading>
                            </VStack>
                        </HStack>
                    </Box>
                </Card>
            </TouchableWithoutFeedback>
            
            <ProductDetailModal showModal={showModal} setShowModal={setShowModal} imgUrl={imgUrl} category={category} title={title} price={price} description={description} />
            {/* <Modal
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
            </Modal> */}
        </Box>
    );
}
