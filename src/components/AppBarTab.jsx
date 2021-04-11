import React from "react";
import { Pressable, StyleSheet } from "react-native";
import themes from "../../themes";
import Text from "./Text";
import { Link } from "react-router-native";


const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
    },
    // text: {
    //     color: themes.colors.white,
    //     fontWeight: themes.fontWWeights.bold,
    //     fontFamily: themes.fonts.main,
    //     fontSize: themes.fontSize.subheading,
    //     marginRight: 5,
    // }
});
const AppBarTab = ({ link, title }) => {
    return (
        <Pressable style={styles.container}>
            <Link to={link}>
                <Text fontWeight="bold" style={{ color: themes.colors.white }}>{title}</Text>
            </Link>
        </Pressable>
    );
};
export default AppBarTab;