import React from "react";
import ReviewItem from "./ReviewItem";
import { FlatList, View, StyleSheet } from "react-native";
import useMyReviews from "../hooks/useMyReviews";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
});

const MyReviews = () => {
    const { reviews, refetch } = useMyReviews();
    console.log(reviews);
    const reviewsNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

    return (
        <FlatList
            data={reviewsNodes}
            renderItem={({ item }) => <ReviewItem MyView refetch={refetch} {...item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

export default MyReviews;