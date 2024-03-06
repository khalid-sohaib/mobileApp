// import React from "react";
// import { config } from "@gluestack-ui/config"
// import { Button, Checkbox, GluestackUIProvider, ImageBackground, Text, VStack } from "@gluestack-ui/themed"
// import FormField from "./components/formField/FormField";
// import { StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <GluestackUIProvider config={config}>
//         <ImageBackground source={require('./39.wp5382302.jpg')} resizeMode="cover" style={[styles.image, styles.main]}>
//             <VStack style={styles.card}  alignItems="center" >
//               <FormField isRequired={true} label={'Name'} placeholder={"Khalid"} minLength={4}/>
//               <FormField isRequired={true} label={'Email'} placeholder={"khalid@domain.com"} minLength={0}/>
//               <FormField isRequired={true} label={'Password'} placeholder={"*********"} minLength={6}/>

//               <Checkbox  value="test" backgroundColor={'#323A52'} defaultIsChecked>
//                   <Text style={styles.text}>I accept the terms & conditions</Text>
//               </Checkbox>

//               <Button style={styles.button} size={"lg"} onPress={ () => console.log("hello world")}>Next</Button>
//             </VStack >   
//       </ImageBackground>
//     </GluestackUIProvider>
//   );


// }


import {  GluestackUIProvider, ImageBackground } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { StyleSheet } from "react-native"
import Register from "./src/screens/Register"
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Register/> */}
      {/* <Login/> */}
      <Home/>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  main : {
    backgroundColor:'gray',
    flex:1,
    justifyContent:'center',
    padding:30,
    // alignItems:'center',
    

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
  }
})