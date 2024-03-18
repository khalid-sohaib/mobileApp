import { StyleSheet, ToastAndroid } from "react-native";
import React from "react";
import { ImageBackground, Text, VStack } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import FormField from "../components/formField/FormField";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthContext from "../context/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login({ navigation }) {
  const {toggleLogin} =React.useContext(AuthContext);

  const handleLogin = (values) => {
    // console.warn(values);
    toggleLogin();
    // navigation.navigate("Home");

    ToastAndroid.show('Logged in successfully', ToastAndroid.SHORT);

  };
  const imgPath = "../assests/bgImage.jpg";

  return (
    <ImageBackground
      source={require(imgPath)}
      resizeMode="cover"
      style={[styles.image, styles.main]}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <>
            <VStack space="lg" style={styles.card} alignItems="center">
              <FormField
                label={"Email"}
                type={"text"}
                onChangeText={handleChange("email")}
                placeholder={"name@domain.com"}
                keyboardType={"email-address"}
                errors={errors.email}
              />
              {/* <Text style={{color:'red'}}>{errors.email}</Text> */}
              <FormField
                label="Password"
                placeholder="*********"
                name="password"
                secureTextEntry
                onChangeText={handleChange("password")}
                errors={errors.password}
              />
              {/* <Text style={{color:'red'}}>{errors.password}</Text> */}

              <Button
                variant="solid"
                size="xl"
                style={styles.button}
                onPress={handleSubmit}
              >
                <ButtonText>Login</ButtonText>
              </Button>
              <Button
                variant="link"
                size="md"
                onPress={() => navigation.navigate("Register")}
              >
                <ButtonText>Create a new account</ButtonText>
              </Button>
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
