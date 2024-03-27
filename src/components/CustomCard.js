import React from 'react'
import { Card } from '@gluestack-ui/themed'
import { Heading } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { Box } from '@gluestack-ui/themed'

export default function CustomCard() {
  return (
    <Box marginVertical={'$2'}>
        <Card size="sm" variant="elevated" w="$40"  mr="$3">
            <Heading mb="$1" size="md">
              Quick Start
            </Heading>
            <Text size="sm">Start building your next project in minutes</Text>
        </Card>
    </Box>
  )
}