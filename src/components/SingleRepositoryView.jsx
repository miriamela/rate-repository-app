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
    const { reviews, fetchMore } = useReviews({ id, first: 5 });
    const reviewsNode = reviews ? reviews.edges.map(edge => edge.node) : [];
    const onEndReach = () => {
        console.log("HERE");
        fetchMore();
    };
    return (
        <>
            <FlatList
                data={reviewsNode}
                renderItem={({ item }) => <ReviewItem {...item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.4}
            />
        </>

    );
};

export default SingleRepositoryView;