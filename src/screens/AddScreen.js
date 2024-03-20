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

const validationSchema = Yup.object().shape({
  imgUrl: Yup.string().required('Image URL is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
});

export default function AddScreen({ navigation }) {
  const [SelectedImgUrl, setSelectedImageUrl] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  const handleLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location) => {
        console.log(location);
        setCurrentLocation(location);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
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
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.warn(values)}
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

                <AppButton onPress={handleLocation} text={"Get Location"} />
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
