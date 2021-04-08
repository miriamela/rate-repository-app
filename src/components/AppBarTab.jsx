import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import themes from "../../themes";
// import Text from "./Text";


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        color: themes.colors.white,
        fontWeight: themes.fontWWeights.bold,
        fontFamily: themes.fonts.main,
        fontSize: themes.fontSize.subheading,
    }
});
const AppBarTab = () => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
    );
};
export default AppBarTab;