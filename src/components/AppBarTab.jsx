import React from "react";
import { Pressable, StyleSheet } from "react-native";
import themes from "../../themes";
import Text from "./Text";
import { Link } from "react-router-native";



const styles = StyleSheet.create({
    text: {
        color: themes.colors.white,
        marginRight: 10,
    },
});
const AppBarTab = ({ link, title }) => {

    return (
        <Pressable style={styles.container}>
            <Link to={link}>
                <Text fontWeight="bold" style={styles.text}>{title}</Text>
            </Link>
        </Pressable>
    );
};
export default AppBarTab;