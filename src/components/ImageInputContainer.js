import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Box, ButtonIcon, Heading, Image, ModalBackdrop, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@gluestack-ui/themed'
import Icon from 'react-native-vector-icons/FontAwesome6'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Modal } from '@gluestack-ui/themed';
import { ModalBody } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../theme/Colors';


export default function ImageInputContainer({imgUrl, onChangeImage}) {
  const [showModal, setShowModal] = useState(false);

    const handlePress = () => {
      

        if(!imgUrl) setShowModal(true);
        else Alert.alert('Delete !', 'Are you sure you want to delete this image ?',
              [ {text : 'Yes', onPress:() => onChangeImage(null)},
                {text : 'No'}
                ])
    }

    
    const handleCamera = async ()=>{
      setShowModal(false)
      try {
        const result = await launchCamera(cameraType='back');
        console.log(result.assets[0].uri);
        if(!result.didCancel)
          onChangeImage(result.assets[0].uri)
      } catch (error) {
        console.log('Error reading the image')
      }
    }

    const handleGallery = async () => {
      setShowModal(false)
      try {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);
        if (!result.didCancel) onChangeImage(result.assets[0].uri);
      } catch (error) {
        console.log('Error reading the image');
      }

    };

    const ref = React.useRef(null)

  return (
    <TouchableOpacity onPress={() => handlePress()}>
        <Box style={styles.container}>
            {!imgUrl && (
                <Icon name="camera"  size={50} color={'gray'} />
            )}
            {imgUrl && 
            <Image source={{uri : imgUrl}} alt={'Image picker'} style={styles.image} />}
        </Box>

        <Modal 
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
          }}
          finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
              <Heading size="md">Select or take a new picture</Heading>
              <ModalCloseButton>
                <Icon 
                  name='close' 
                  size={24}
                  color={Colors.primary}/>
                  
              </ModalCloseButton>
            </ModalHeader>
          <ModalBody >
            <HStack space='md' justifyContent='center' marginVertical={16}>
              <Button
                height="$full"
                size="xl"
                p="$1"
                bg={Colors.background}
                borderColor={Colors.primary}
                onPress={()=>handleCamera()}
              >
                  <ButtonIcon as={FontAwesome6Icon} name="camera" color="black" size={80} >
                </ButtonIcon>
              </Button>

              <Button
                height="$full"
                size="xl"
                p="$1"
                bg={Colors.background}
                borderColor={Colors.primary}
                onPress={()=>handleGallery()}
              >
                  <ButtonIcon as={FontAwesome6Icon} name="file-image" color="black" size={80} >
                </ButtonIcon>
              </Button>
                {/* <Icon 
                  name='camera' 
                  size={120}
                  color="gray"/>
                <Icon 
                  name='file-image' 
                  size={120}
                  color="gray"/> */}
            </HStack>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>


    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        height:180,
        width:180,
        backgroundColor:Colors.lightGray,
        overflow:'hidden'

    },
    image : {
        width:'100%',
        height:'100%',

    }
})