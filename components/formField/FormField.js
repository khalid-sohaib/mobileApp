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
// import InputField from '../InputField';
import { WarningOutlineIcon } from "native-base";
// import { FormControlError } from '@gluestack-ui/themed';
import { Input } from "@gluestack-ui/themed";

export default function FormField({
  isRequired,
  label,
  placeholder,
  minLength,
}) {
  return (
    // <FormControl style={styles.form} isRequired={isRequired}>
    //     <VStack mx="4" space={0}>
    //     <FormControl.Label >
    //         <Text style={styles.label}>{label}</Text>
    //     </FormControl.Label>
    //     <InputField placeholder={placeholder}/>
    //     {/* <FormControl.HelperText>
    //         <Text style={styles.text}> Must be atleast {minLength} characters.</Text>
    //     </FormControl.HelperText> */}
    //     <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
    //         Atleast {minLength} characters are required.
    //     </FormControl.ErrorMessage>
    //     </VStack>
    // </FormControl>

    <FormControl style={styles.form} isRequired={isRequired}>
        <VStack mx="0" space={"xs"}>
            

      <FormControlLabel>
        <FormControlLabelText style={styles.label}>
          {label}
        </FormControlLabelText>
      </FormControlLabel>

      <Input variant="underlined">
        <InputField  type="text" placeholder={placeholder} />
      </Input>

      {/* <FormControlHelper>
        <FormControlHelperText style={styles.text}>
          {" "}
          Must be atleast {minLength} characters.
        </FormControlHelperText>
      </FormControlHelper> */}

      <FormControlError>
        <FormControlErrorIcon />
        <FormControlErrorText>
          Atleast {minLength} characters are required.
        </FormControlErrorText>
      </FormControlError>

      </VStack>

    </FormControl>
  );
}

const styles = StyleSheet.create({
  form: {
    width:'100%',
    
  },

  text: {
    fontSize: 18,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
  },
});
