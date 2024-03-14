import { HStack } from '@gluestack-ui/themed'
import { Box, Button, ButtonText, Card, Heading, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create ({
    card : {
        // borderRadius: '$lg',
    },
    image : {
    
    },
    text : {

    },
    button : {

    },

})

export default function ProductCard({imgUrl, title, price, category}) {
  return (
    <View>
        <Card borderRadius="$lg"  mb="$3" mt={3} p='$0'>

            <Image
                mb="$4"
                h={240}
                width="$full"
                overflow='hidden'
                resizeMode='contain'
                borderTopLeftRadius="$md"
                borderTopRightRadius="$md"
                source={{
                uri: imgUrl
                }}
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
            
                    <VStack >


                        <Heading size="md" fontFamily="$heading" mb="$2">
                        {title}
                        </Heading>
                        <Heading size="md" fontFamily="$body" color='#47C6BE'  >
                        {price}
                        </Heading>
                        
                    </VStack>
{/* 
                    <VStack >
                        <Box
                            flexDirection="column"
                            sx={{
                            '@sm': {
                                flexDirection: 'row',
                            },
                            }}
                        >
                            <Button
                            px="$4"
                            py="$2"
                            fontFamily="$heading"
                            mr="$0"
                            mb="$3"
                            sx={{
                                '@sm': {
                                mr: '$3',
                                mb: '$0',
                                flex: 1,
                                },
                            }}
                            >
                            <ButtonText size="sm">Add to cart</ButtonText>
                            </Button>
                            <Button
                            px="$4"
                            py="$2"
                            variant="outline"
                            fontFamily="$heading"
                            borderColor="$borderLight300"
                            $dark-borderColor="$backgroundDark600"
                            sx={{
                                '@sm': {
                                flex: 1,
                                },
                            }}
                            >
                            <ButtonText
                                size="sm"
                                color="$textLight600"
                                $dark-color="$textDark400"
                            >
                                Wishlist
                            </ButtonText>
                            </Button>
                        </Box>    
                    </VStack> */}

                </HStack>
            </Box>
        
        
        </Card>
    </View>
  )
}