import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import themes from "../../themes";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.colors.secondaryColor,
        // opacity: 0.8,
    }
});
const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab link="/" title="Repositories" />
                <AppBarTab link="/login" title="Log In" />
            </ScrollView>
        </View>
    );
};

export default AppBar;