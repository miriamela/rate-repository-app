import React from "react";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import themes from "../../themes";

const initialValues = {
    username: "",
    password: "",
};
const styles = StyleSheet.create({
    buttonText: {
        color: themes.colors.white,
    },
    background: {
        backgroundColor: themes.colors.white,
        height: 210,
        padding: 15,
    },
    button: {
        height: 50,
        borderRadius: 5,
        backgroundColor: themes.colors.tertiaryColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.background} >
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry name="password" placeholder="Password" />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text fontWeight="bold" style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );

};


const SignIn = () => {
    const onSubmit = values => {
        // const username = values.username;
        // const password = values.password;
        console.log(values);

    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>

    );
};

export default SignIn;