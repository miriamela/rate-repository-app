import React from "react";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import themes from "../../themes";
import { useHistory } from "react-router-native";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";


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
            <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
            <FormikTextInput testID="passwordField" secureTextEntry name="password" placeholder="Password" />
            <Pressable testID="submitButton" style={styles.button} onPress={onSubmit}>
                <Text fontWeight="bold" style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );

};
export const SignInContainer = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .required("Username is required"),
        password: yup
            .string()
            .required("Password is required")

    });
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();
    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            console.log(data);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <SignInContainer onSubmit={onSubmit} />
    );
};

export default SignIn;