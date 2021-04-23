import React from "react";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import themes from "../../themes";
import useCreateReview from "../hooks/useCreateReview";
import { useHistory } from "react-router-native";
import * as yup from "yup";


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

const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: ""
};
const CreateReviewForm = ({ onSubmit }) => {

    return (
        <View style={styles.background}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository Name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="text" placeholder="Review" />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Create a review</Text>
            </Pressable>
        </View>
    );

};

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Repository owner name is required"),
    repositoryName: yup
        .string()
        .required("Repository name is required"),
    rating: yup
        .number()
        .required("Rating is required")
        .min("Rating must be between 0 and 100")
        .max("Rating must be between 0 and 100"),
    text: yup
        .string()
});

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const history = useHistory();
    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        const ratingInt = Number(rating);
        try {
            const response = await createReview({ ownerName, repositoryName, rating: ratingInt, text });
            const id = response.repositoryId;
            history.push(`/repository/${id}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default CreateReview;