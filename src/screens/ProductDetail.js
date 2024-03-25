import React from 'react'
import { Box, HStack, Heading, VStack } from '@gluestack-ui/themed'
import { Card } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'
import MapView from 'react-native-maps';

export default function ProductDetail({route}) {
    const { imgUrl, title, price, category, description } = route.params;
    
  return (
    <Box>
         <Card borderRadius="$lg" mb="$3"  paddingHorizontal='$0' paddingTop={0}>
                    {imgUrl && <Image
                        mb="$4"
                        h={240}
                        width="$full"
                        overflow='hidden'
                        resizeMode='Fill'
                        borderTopLeftRadius="$md"
                        borderTopRightRadius="$md"
                        
                        source={{ uri: imgUrl }}
                        alt={'image-label'}
                    />}
                    <Box px={'$4'} pb={'$4'}>
                        
                        <HStack justifyContent='space-between'>
                            <VStack>
                                <Heading size="md" fontFamily="$heading" mb="$2">
                                    {title.split(' ').slice(0,3).join(' ')}
                                </Heading>
                                <Heading size="md" fontFamily="$body" color='#47C6BE'>
                                    $ {price}
                                </Heading>
                            </VStack>
                        </HStack>
                    </Box>
                </Card>
            <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
                


    </Box>
  )
}