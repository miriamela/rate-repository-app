import React from "react";
import RepositoryItem from "./RepositoryItem";
import { View, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import ReviewItem from "./ReviewItem";


const styles = StyleSheet.create({
    separator: {
        height: 10
    },
});
const RepositoryInfo = ({ repository }) => {
    return (
        <View>
            <RepositoryItem singleView {...repository} />
            <View style={styles.separator} />
        </View>
    );

};

const SingleRepositoryView = () => {
    let { id } = useParams();
    const { repository } = useRepository({ id });
    const { reviews } = useReviews({ id });
    console.log(reviews);
    const reviewsNode = reviews ? reviews.edges.map(edge => edge.node) : [];

    return (
        <>
            <FlatList
                data={reviewsNode}
                renderItem={({ item }) => <ReviewItem {...item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </>

    );
};

export default SingleRepositoryView;