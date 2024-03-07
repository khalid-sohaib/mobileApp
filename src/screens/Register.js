import { StyleSheet } from 'react-native'
import React from 'react'
import { CheckIcon, CheckboxIcon, CheckboxIndicator, CheckboxLabel, Heading, ImageBackground, VStack } from '@gluestack-ui/themed'
import { Checkbox } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'
import { ButtonText } from '@gluestack-ui/themed'
import FormField from '../components/formField/FormField'

export default function Register({navigation}) {
    const imgPath = '../assests/bgImage.jpg'
  return (

    <ImageBackground source={require(imgPath)} resizeMode="cover" style={[styles.image, styles.main]}>

             
        {/* <Heading style={styles.heading} >Register</Heading> */}
        <VStack space="lg" style={styles.card}  alignItems="center" >
              
              <FormField isRequired={true} label={'Name'} placeholder={"Khalid"} minLength={4}/>
              <FormField isRequired={true} label={'Email'} placeholder={"khalid@domain.com"} minLength={0}/>
              <FormField isRequired={true} label={'Password'} placeholder={"*********"} minLength={6}/>

               
              <Checkbox  value="" size="md" isInvalid={false} isDisabled={false}   >
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon}/>
                </CheckboxIndicator>
                <CheckboxLabel>I accept the terms & conditions</CheckboxLabel>
              </Checkbox>
      

               {/* <Checkbox  value="test" backgroundColor={'#323A52'} defaultIsChecked>
                   <Text style={styles.text}>I accept the terms & conditions</Text>
               </Checkbox> */}

                <Button variant="solid" size="xl" style={styles.button} onPress={ () => navigation.navigate('Login')}>
                    <ButtonText >Register</ButtonText>
                </Button>
        </VStack >  

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    main : {
      backgroundColor:'gray',
      flex:1,
    //   justifyContent:'flex-start',
      padding:30,
    //   alignItems:'center',
    },
    heading:{
        textAlign:'center',
        paddingVertical:20,
    },
    card:{
    
      backgroundColor:'#fff',
      borderRadius:20,
      paddingHorizontal:20,
      paddingVertical:40
    },
    form:{
      fontSize:18,
      backgroundColor:'red'
    },
    text : {
  
      color:'#323A52',
      fontSize:18,
      
    },
    image:{
      flex: 1,
      justifyContent: 'center',
    },
    button:{
      // color:'#323A52',
      
      backgroundColor:'#323A52',
      borderRadius:50,
    },
  })