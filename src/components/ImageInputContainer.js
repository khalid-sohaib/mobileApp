import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Image, ModalBackdrop, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@gluestack-ui/themed'
import Icon from 'react-native-vector-icons/FontAwesome6'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Modal } from '@gluestack-ui/themed';
import { ModalBody } from '@gluestack-ui/themed';



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
            <Image source={{uri : imgUrl}} style={styles.image} />}
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
          <Text>Modal</Text>
          <ModalHeader>
            <ModalCloseButton></ModalCloseButton>
          </ModalHeader>
          <ModalBody />
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
        height:100,
        width:100,
        backgroundColor:'lightgray',
        overflow:'hidden'

    },
    image : {
        width:'100%',
        height:'100%',

    }
})