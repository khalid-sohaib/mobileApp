import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Card, Heading, Image, ScrollView, Text } from '@gluestack-ui/themed'
import { VStack } from '@gluestack-ui/themed'
import { useListings } from '../context/ListingsContext'
import ListingsCard from '../components/ListingsCard'

export default function Listings({navigation}) {
    const {listings} = useListings();
    // const listings =  [ {"category": "", "description": "Iftar deal with the basic process and specific operation of the position", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_791701f7-5e22-4acf-ac79-5894e04e1c39.jpg", "location": "31.483996, 74.3945499", "price": "252", "title": "Aftari"},
    // {"category": "Construction", "description": " injected humour, or non-characteristic words ", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg", "location": "", "price": "858", "title": "Lorem Ipsum"}, 
    // {"category": "", "description": "Dddd 580wattss bhchcggg hhghhhh ggtyyy gyydggtt", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_695d680c-58f1-48d9-ba63-62064484b577.jpg", "location": "", "price": "8586", "title": "Solar panels"},
    // {"category": "", "description": " injected humour, or non-characteristic words ", "imgUrl": "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg", "location": "", "price": "858", "title": "Lorem Ipsum"},];
// console.warn(listings);
  return (
    <Box style={styles.container}>
            {/* <Heading style={styles.heading}>My Listings</Heading> */}
            
        <ScrollView width={'100%'}>
        <VStack style={{ marginBottom: 0 }}>
                {listings?.map((p, index) => (
                    <Box  padding={0} style={styles.card} key={index}>
                        <ListingsCard
                            title={p.title}
                            price={p.price}
                            imgUrl={p.imgUrl}
                            description={p.description}
                            category={p.category}
                            navigation={navigation}

                        />
                    </Box>
                ))}
        </VStack>
        </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:16
    },
    heading : {
        fontSize:32,
        padding:16,
        fontWeight:800,
    },
    card : {
        
    }
})