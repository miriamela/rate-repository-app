import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import themes from "../../themes";

const styles = StyleSheet.create({
    errorText: {
        margin: 5,
        color: themes.colors.errorColor,
    },
    input: {
        borderWidth: 1,
        borderColor: themes.colors.textSecondary,
        borderRadius: 5,
        height: 50,
        marginBottom: 15,
        padding: 15,
    },
    inputError: {
        borderColor: themes.colors.errorColor,
    }
});


const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    const inputStyle = [styles.input,
    meta.error && styles.inputError,];

    return (
        <>
            <TextInput onChangeText={value => helpers.setValue(value)}
                style={inputStyle}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}

        </>
    );

};

export default FormikTextInput;