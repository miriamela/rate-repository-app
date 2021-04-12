import { Platform } from "react-native";

const theme = {
    colors: {
        secondaryColor: "#24292e",
        textPrimary: "#24292e",
        textSecondary: "#586069",
        white: "#FFFF",
        primaryColor: "#e1e4e8",
        tertiaryColor: "#0366d6",
        errorColor: "#d73a4a",
    },
    fontWWeights: {
        normal: "400",
        bold: "700",
    },
    fontSize: {
        body: 14,
        subheading: 16,
    },
    fonts: Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: "System",
    })

};
export default theme;