import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";
import { format } from "date-fns";
import themes from "../../themes";

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
    }
});


const ReviewItem = ({ text, createdAt, user, rating }) => {

    const getDate = (stringDate) => {
        const date = format(new Date(stringDate), "dd-MM-yyyy");
        return date;
    };

    return (
        <View style={styles.generalContainer}>
            <View style={styles.detailsContainer}>
                <Text color="colorTertiary" >{rating}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} fontWeight="bold">{user.username}</Text>
                <Text style={styles.date}>{getDate(createdAt)}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;