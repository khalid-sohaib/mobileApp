import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import ImageInputContainer from "../components/ImageInputContainer";
import { VStack } from "@gluestack-ui/themed";
import { Formik } from "formik";
import FormField from "../components/formField/FormField";
import GetLocation from "react-native-get-location";
import AppButton from "../components/AppButton";
import * as Yup from 'yup';
import requestLocationPermission from "../utils/permissions";
import { Text } from "@gluestack-ui/themed";
import { useListings } from "../context/ListingsContext";


const validationSchema = Yup.object().shape({
  imgUrl: Yup.string().required('Image URL is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
});

export default function AddScreen({ navigation }) {
  const [SelectedImgUrl, setSelectedImageUrl] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [loading, setLoading] = useState();
  // const [listing, setListing] = useState([]);

  const handleLocation = async (setFieldValue) => {
    
    const permissionGranted = await requestLocationPermission(); 
    setCurrentLocation(null);
    if (permissionGranted) {
      setLoading(true);
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 6000,
        
      })
        .then((location) => {
          console.log('locationnnn',location);
          setLoading(false);
          setCurrentLocation(location);
          setFieldValue("location", `${location.latitude}, ${location.longitude}`);
        })
        .catch((error) => {
          const { code, message } = error;
          console.warn(code, message);
        });
    } else {
      console.log('Location permission not granted');
    }
  };

  //adding product
  const { addProduct } = useListings();

  const handleAdd = (values) => {
    console.warn("Success",values);
    
    addProduct(values);
  };
  
  return (
    <KeyboardAwareScrollView
      style={styles.main}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
    >
      <VStack>
        <Formik
          initialValues={{
            imgUrl: "",
            title: "",
            description: "",
            category: "",
            price: "",
            location:"",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleAdd(values);
            resetForm();
            setSelectedImageUrl(null);
            setCurrentLocation(null); 
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, errors, values }) => (
            <>
              <VStack space="lg" style={styles.card} alignItems="center">
                <ImageInputContainer
                  imgUrl={SelectedImgUrl}
                  onChangeImage={(uri) => {
                    setFieldValue("imgUrl", uri);
                    setSelectedImageUrl(uri);
                  }}
                  errors={errors.imgUrl}
                />
                <FormField
                  label={"Title"}
                  type={"text"}
                  onChangeText={handleChange("title")}
                  placeholder={"Jacket"}
                  errors={errors.title}
                />
                <FormField
                  label={"Description"}
                  type={"text"}
                  onChangeText={handleChange("description")}
                  placeholder={"Men's cotton jacket"}
                  errors={errors.description}
                />
                <FormField
                  label={"Price"}
                  type={"number"}
                  onChangeText={handleChange("price")}
                  placeholder={"$100"}
                  keyboardType={"numeric"}
                  errors={errors.price}
                />
                {loading && <Text>Loading...</Text>}
               {currentLocation && <Text>Axis :{currentLocation?.longitude} - { currentLocation?.latitude}</Text> }
                <AppButton onPress={() => handleLocation(setFieldValue)} text={"Get Location"} />

                <AppButton onPress={handleSubmit} text={"Add"} />

              </VStack>
            </>
          )}
        </Formik>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginBottom:80
  },
});
