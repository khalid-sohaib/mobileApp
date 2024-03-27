import { StyleSheet } from "react-native";
import React from "react";
import {
  CheckIcon,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Heading,
  ImageBackground,
  VStack,
} from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import FormField from "../components/formField/FormField";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Register({ navigation }) {
  const imgPath = "../assests/bgImage.jpg";

  const handleRegister = (values) => {
    // console.warn(values);
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      source={require(imgPath)}
      alt="imagebackground"
      resizeMode="cover"
      style={[styles.image, styles.main]}
    >
      {/* <Heading style={styles.heading} >Register</Heading> */}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <VStack space="lg" style={styles.card} alignItems="center">
              <FormField
                isRequired={true}
                type={"text"}
                label={"Name"}
                onChangeText={handleChange("name")}
                placeholder={"Khalid"}
                errors={errors.name}
                minLength={4}
              />
              <FormField
                isRequired={true}
                label={"Email"}
                type={"text"}
                onChangeText={handleChange("email")}
                placeholder={"name@domain.com"}
                keyboardType={"email-address"}
                errors={errors.email}
              />
              <FormField
                isRequired={true}
                label="Password"
                placeholder="*********"
                name="password"
                secureTextEntry
                onChangeText={handleChange("password")}
                errors={errors.password}
              />

              <Checkbox value="" size="md" isInvalid={false} isDisabled={false}>
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>I accept the terms & conditions</CheckboxLabel>
              </Checkbox>

              <AppButton text={"Register"} onPress={handleSubmit} />
            </VStack>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "gray",
    flex: 1,
    //   justifyContent:'flex-start',
    padding: 30,
    //   alignItems:'center',
  },
  heading: {
    textAlign: "center",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  form: {
    fontSize: 18,
    backgroundColor: "red",
  },
  text: {
    color: "#323A52",
    fontSize: 18,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    // color:'#323A52',

    backgroundColor: "#323A52",
    borderRadius: 50,
  },
});
