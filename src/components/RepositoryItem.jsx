import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import * as WebBrowser from 'expo-web-browser';
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
    },
    middleRow: {
        marginTop: 20,
        marginLeft: 70,
        marginBottom: 20,
        borderRadius: 3,
        backgroundColor: themes.colors.tertiaryColor,
    },
    language: {
        margin: 7,
        color: themes.colors.white,
    },
    lastRow: {
        width: "100%",
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    each: {
        marginRight: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: themes.colors.white,
    },
    containerButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: "100%"
    },
    button: {
        backgroundColor: themes.colors.tertiaryColor,
        borderRadius: 5,
        marginTop: 15,
        margin: "auto",
        width: "90%",
        height: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    singleViewContainer: {
        margin: 10,
    }
});
export const showNumber = (number) => {
    if (number >= 1000) {
        let newNumber = number / 1000;
        return `${newNumber.toFixed(1)}K`;
    } else {
        return number;
    }
};

const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl, url, singleView }) => {

    return (
        <View style={styles.generalContainer}>
            <View style={styles.firstRow}>
                <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
                <View>
                    <Text testID="fullName" fontWeight="bold" style={{ marginBottom: 10 }}>{fullName}</Text>
                    <Text testID="description">{description}</Text>
                </View>
            </View>
            <View style={styles.middleRow}>
                <Text testID="language" color="colorTertiary" style={styles.language}> {language}</Text>
            </View>
            <View style={styles.lastRow}>
                <View style={styles.each}>
                    <Text testID="stargazersCount" fontWeight="bold">{showNumber(stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.each}>
                    <Text testID="forksCount" fontWeight="bold">{showNumber(forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.each}>
                    <Text testID="reviewCount" fontWeight="bold">{reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.each}>
                    <Text testID="ratingAverage" fontWeight="bold">{ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                {
                    singleView && (
                        <Pressable style={styles.button} onPress={() => WebBrowser.openBrowserAsync(url)}>
                            <Text fontWeight="bold" style={styles.text}>Open in GitHub</Text>
                        </Pressable>
                    )

                }
            </View>

        </View >
    );
};

export default RepositoryItem;