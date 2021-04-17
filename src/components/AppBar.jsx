import React from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import themes from "../../themes";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.colors.secondaryColor,
    },
    container2: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
    },
    text: {
        color: themes.colors.white,
        marginRight: 10,
    }

});

const LogOut = () => {
    const history = useHistory();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const loggingOut = async (ev) => {
        ev.preventDefault();
        console.log("click");
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push("/");
    };
    return (
        <Pressable onPress={loggingOut}>
            <Text fontWeight="bold" style={styles.text}>Log Out</Text>
        </Pressable>
    );
};
const AppBar = () => {
    const { user } = useAuthorizedUser();
    console.log(user);
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.container2}>
                <AppBarTab link="/" title="Repositories" />
                {user === null && <AppBarTab link="/login" title="Log In" />}
                {user && <LogOut />}
            </ScrollView>
        </View>
    );
};

export default AppBar;