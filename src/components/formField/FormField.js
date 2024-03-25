import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import MyTextInput from "./TextInput";
// import InputField from '../InputField';
// import { FormControlError } from '@gluestack-ui/themed';

export default function FormField({
  isRequired,
  label,
  placeholder,
  errors,
  secureTextEntry,
  keyboardType,
  onChangeText
}) {
  return (
    <FormControl style={styles.form} isRequired={isRequired}>
      <VStack mx="0" space={"xs"}>
        <FormControlLabel>
          <FormControlLabelText style={styles.label}>
            {label}
          </FormControlLabelText>
        </FormControlLabel>
        <MyTextInput
          type="text"
          placeholder={placeholder}
          secureTextEntry={secureTextEntry ? true : false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />
        {errors && <Text style={{ color: "red" }}>{errors}</Text>}

        {/* <FormControlHelper>
        <FormControlHelperText style={styles.text}>
          {" "}
          Must be atleast {minLength} characters.
        </FormControlHelperText>
      </FormControlHelper> */}

        <FormControlError style={{ backgroundColor: "red" }}>
          <FormControlErrorIcon />
          <FormControlErrorText style={{ color: "red" }}>
            {errors}
          </FormControlErrorText>
        </FormControlError>
      </VStack>
    </FormControl>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },

  text: {
    fontSize: 18,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
  },
});
