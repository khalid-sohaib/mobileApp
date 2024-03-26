import React from 'react'
import { Box, HStack, Heading, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { Card } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'
import MapView from 'react-native-maps';
import Colors from '../theme/Colors';
import UserProfile from '../components/UserProfile';

export default function ProductDetail({route}) {
    const { imgUrl, title, price, category, description } = route.params;
    
  return (
    <ScrollView>
         <Card borderRadius="$lg" mb="$3"  paddingHorizontal='$0' paddingTop={0} backgroundColor={Colors.white}>
                    {imgUrl && <Image
                        mb="$4"
                        h={240}
                        width="$full"
                        overflow='hidden'
                        resizeMode='cover'
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
                                <Heading size="md" fontFamily="$body" color={Colors.primary}>
                                    $ {price}
                                </Heading>
                            </VStack>
                        </HStack>
                    </Box>
                    {/* <Box padding={16}>
                        <Text color={Colors.secondary}>{category}</Text>
                        <Text color={Colors.text} >{description}</Text>
                    </Box> */}
                    <UserProfile  subTitle={'5 listings'} icon={'none'}/>
                </Card>
                
                
            <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
                


    </ScrollView>
  )
}