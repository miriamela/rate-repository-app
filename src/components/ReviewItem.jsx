import React from "react";
import Text from "./Text";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import { format } from "date-fns";
import themes from "../../themes";
import { useHistory } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
    generalContainer: {
        backgroundColor: themes.colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 20
    },
    detailsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: themes.colors.tertiaryColor,
        borderWidth: 2,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 15,
        padding: 11,
    },
    name: {
        marginBottom: 5
    },
    date: {
        color: themes.colors.textSecondary,
        marginBottom: 10
    },
    textContainer: {
        width: "75%"
    },
    buttonContainer: {
        backgroundColor: themes.colors.white,
    },
    buttons: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%"

    },
    singleButtonView: {
        margin: 15,
        padding: 10,
        borderRadius: 3,
        backgroundColor: themes.colors.tertiaryColor,
        width: "50%"
    },
    singleButtonDelete: {
        margin: 15,
        padding: 10,
        borderRadius: 3,
        backgroundColor: themes.colors.errorColor,
        width: "50%"
    },
    textButton: {
        color: themes.colors.white,
        textAlign: "center"
    }
});


const ReviewItem = ({ text, createdAt, user, rating, repository, MyView, id, refetch }) => {
    const history = useHistory();
    const [deleteReview] = useDeleteReview();

    const getDate = (stringDate) => {
        const date = format(new Date(stringDate), "dd-MM-yyyy");
        return date;
    };

    const getConfirmation = () => {
        console.log("pressed");
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "cancel",

                },
                {
                    text: "delete",
                    onPress: async () => {
                        try {
                            await deleteReview({ id });
                            refetch();
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }
            ]
        );
    };

    return (
        <View>
            <View style={styles.generalContainer}>
                <View style={styles.detailsContainer}>
                    <Text color="colorTertiary" >{rating}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name} fontWeight="bold">{MyView ? repository.fullName : user.username}</Text>
                    <Text style={styles.date}>{getDate(createdAt)}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {
                    MyView && (
                        <View style={styles.buttons}>
                            <Pressable onPress={() => history.push(`/repository/${repository.id}`)} style={styles.singleButtonView}>
                                <Text fontWeight="bold" style={styles.textButton}>View Repository</Text>
                            </Pressable>
                            <Pressable onPress={getConfirmation} style={styles.singleButtonDelete}>
                                <Text fontWeight="bold" style={styles.textButton}>Delete Review</Text>
                            </Pressable>
                        </View>

                    )
                }
            </View>

        </View>
    );
};

export default ReviewItem;