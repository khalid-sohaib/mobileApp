import { View, Text } from 'react-native'
import React from 'react'
import { Box, HStack } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'

export default function ProductDetail() {
  return (
    <Box>
        <HStack>
            <Box>
                <Image
                    size="md" borderRadius="$none" 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    }}
                />
      
            </Box>
        </HStack>
    </Box>
  )
}