/* eslint-disable no-unused-vars */
import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: themes.colors.textSecondary,
        borderRadius: 5,
        height: 50,
        marginBottom: 15,
        padding: 15,
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        styles.input,
        style,
    ];
    return <NativeTextInput autoCapitalize="none" style={textInputStyle} {...props}></NativeTextInput>;
};

export default TextInput;