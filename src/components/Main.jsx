import React from "react";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import themes from "../../themes";
import SingleRepositoryView from "./SingleRepositoryView";

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
                <Route path="/" exact component={RepositoryList} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/create-review" component={CreateReview} />
                <Route path="/repository/:id" component={SingleRepositoryView} />
                <Route path="/login" component={SignIn} />
                <Redirect to="/" />
            </Switch>
        </View>
    );
};
export default Main;