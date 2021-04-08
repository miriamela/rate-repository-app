import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import themes from "../../themes";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.colors.secondaryColor,
        opacity: 0.8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",

    }
});
const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab />
        </View>
    );
};

export default AppBar;