import { Alert, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import { Text } from "@gluestack-ui/themed";
import ImageInputContainer from "../components/ImageInputContainer";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function AddScreen({ navigation }) {
  const [imgUrl, setImageUrl] = useState();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <ImageInputContainer 
        imgUrl={imgUrl}
        onChangeImage={ (uri) => setImageUrl(uri)}
        />
      <Text>Add New Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
