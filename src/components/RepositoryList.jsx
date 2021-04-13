import React from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
});


const ItemSeparator = () => (<View style={styles.separator} />);

const RepositoryList = () => {
    const { repositories } = useRepositories();
    console.log(repositories);

    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    console.log(repositoriesNodes);

    const renderItem = ({ item }) => (
        <RepositoryItem {...item} />
    );

    return (
        <FlatList data={repositoriesNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    );
};
export default RepositoryList;