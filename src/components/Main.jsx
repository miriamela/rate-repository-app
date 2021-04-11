import React from "react";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
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
            <Switch>
                <Route path="/" exact component={RepositoryList}>
                    {/* <RepositoryList /> */}
                </Route>
                <Route to="/login" component={SignIn} >
                    {/* <SignIn /> */}
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};
export default Main;