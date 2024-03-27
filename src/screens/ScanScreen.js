import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { HStack, VStack } from "@gluestack-ui/themed";
import AppButton from "../components/AppButton";

const ScanScreen = () => {
  const [reactivate, setReactivate] = useState(true);
  const [data, setData] = useState();

  const handleRedirect = () => {
    data
      ? Linking.openURL(data).catch((err) =>
          console.error("An error occured", err)
        )
      : Alert.alert("No QR data found", "Scan a QR first");
  };
  const handleInfo = () => {
    data
      ? Alert.alert("Scanned Data", data)
      : Alert.alert("No QR data found", "Scan a QR first");
  };
  const onSuccess = (e) => {
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err)
    // );
    setReactivate(false);
    setData(e.data);
    Alert.alert(
      "Scanned Data",
      e.data,
      [
        {
          text: "OK",
          onPress: () => setReactivate(true),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={reactivate}
      reactivateTimeout={5000}
      // cameraTimeout={2000}
      showMarker={true}
      topContent={
        <Text style={styles.centerText}>
           <Text style={styles.textBold}>Scan your QR</Text>{" "}
          
        </Text>
      }
      bottomContent={
        <VStack alignItems="center" paddingTop={50}>
          <HStack>
            
            <TouchableOpacity style={styles.buttonTouchable} onPress={handleInfo}>
              <Text style={styles.buttonText}>Show Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTouchable} onPress={handleRedirect}>
              <Text style={styles.buttonText}>Go to address</Text>
            </TouchableOpacity>

          </HStack>

          <TouchableOpacity style={styles.buttonTouchable} onPress={()=> setData(null)}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          
        </VStack>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    marginTop: 18,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
