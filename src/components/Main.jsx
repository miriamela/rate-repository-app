import React from "react";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { StyleSheet, View } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: themes.colors.primaryColor,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};
export default Main;