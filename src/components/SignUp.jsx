import React from "react";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import themes from "../../themes";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
    buttonText: {
        color: themes.colors.white,
    },
    background: {
        backgroundColor: themes.colors.white,
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

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.background}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" secureTextEntry placeholder="Password" />
            <FormikTextInput name="passwordConfirmation" secureTextEntry placeholder="Password Confirmation" />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText} >Sign Up</Text>
            </Pressable>
        </View>
    );
};

const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .min(1, "Username length must be between 1 and 30")
        .max(30, "Username length must be between 1 and 30"),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Username length must be between 5 and 50")
        .max(50, "Username length must be between 5 and 50"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password don't match")
        .required("Password confirmation is required")
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password, passwordConfirmation } = values;
        console.log(username, password, passwordConfirmation);
        try {
            await signUp({ username, password });
            await signIn({ username, password });
            history.push("/");
        } catch (e) {
            console.log(e);
        }



    };
    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};
export default SignUp;
