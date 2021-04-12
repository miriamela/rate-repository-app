/* eslint-disable no-unused-vars */
import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";


const TextInput = ({ style, ...props }) => {

    return <NativeTextInput autoCapitalize="none" style={style} {...props} />;
};

export default TextInput;