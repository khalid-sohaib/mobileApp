import React, { useState } from "react";
import { Input, InputField } from "@gluestack-ui/themed";

export default function MyTextInput({
  type,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
}) {
  return (
    <>
      <Input variant="underlined" size="lg">
        <InputField
          style={{ fontSize: 18 }}
          type={type}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />
      </Input>
    </>
  );
}
