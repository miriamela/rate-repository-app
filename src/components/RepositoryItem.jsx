import React from "react";
import { View, StyleSheet, Image } from "react-native";
import themes from "../../themes";
import Text from "./Text";

const styles = StyleSheet.create({
    generalContainer: {
        padding: 20,
        backgroundColor: themes.colors.white,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 20,
        borderRadius: 5,
    },
    firstRow: {
        width: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // borderWidth: 1,
        // borderStyle: "solid",
    },
    middleRow: {
        marginTop: 20,
        marginLeft: 70,
        marginBottom: 20,
        // borderWidth: 1,
        // borderStyle: "solid",
        borderRadius: 3,
        backgroundColor: themes.colors.tertiaryColor,
    },
    language: {
        margin: 2,
        color: themes.colors.white,
        // fontSize: themes.fontSize.subheading,
    },
    lastRow: {
        width: 400,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // borderWidth: 1,
        // borderStyle: "solid",
    },
    each: {
        marginRight: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        // borderStyle: "solid",
    }
});

const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl }) => {
    const showNumber = (number) => {
        if (number >= 1000) {
            let newNumber = number / 1000;
            return `${newNumber.toFixed(1)}K`;
        } else {
            return number;
        }
    };
    return (
        <View style={styles.generalContainer}>
            <View style={styles.firstRow}>
                <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
                <View>
                    <Text fontWeight="bold" style={{ marginBottom: 10 }}>{fullName}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
            <View style={styles.middleRow}>
                <Text color="colorTertiary" style={styles.language}> {language}</Text>
            </View>
            <View style={styles.lastRow}>
                <View style={styles.each}>
                    <Text fontWeight="bold">{showNumber(stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.each}>
                    <Text fontWeight="bold">{showNumber(forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.each}>
                    <Text fontWeight="bold">{reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.each}>
                    <Text fontWeight="bold">{ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View >
    );
};

export default RepositoryItem;