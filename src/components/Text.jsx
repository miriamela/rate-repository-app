import React from "react";
import themes from "../../themes";
import { Text as NativeText, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: themes.colors.textPrimary,
        fontSize: themes.fontSize.body,
        fontFamily: themes.fonts,
        fontWeight: themes.fontWWeights.normal
    },
    colorTextSecondary: {
        color: themes.colors.textSecondary,
    },
    colorTertiary: {
        color: themes.colors.tertiaryColor,
    },
    fontSizeSubheading: {
        fontSize: themes.fontSize.subheading,
    },
    fontWeightBold: {
        fontWeight: themes.fontWWeights.bold,
    },

});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === "textSecondary" && styles.colorTextSecondary,
        color === "colorTertiary" && styles.colorTertiary,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontWeight === "bold" && styles.fontWeightBold,
        style,
    ];
    return <NativeText style={textStyle} {...props} />;
};
export default Text;

