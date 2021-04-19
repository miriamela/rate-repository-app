import React from "react";
import RepositoryItem from "./RepositoryItem";
import { View } from "react-native";
// import Text from "./Text";
// import themes from "../../themes";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";



const SingleRepositoryView = () => {
    let { id } = useParams();
    const { repository } = useRepository({ id });
    // console.log(repository);
    return (
        <View>
            <RepositoryItem singleView {...repository} />
        </View>
    );
};

export default SingleRepositoryView;