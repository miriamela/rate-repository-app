import React from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
});
export const RepositoryListContainer = ({ repositories }) => {
    const history = useHistory();
    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    const goToRepository = (id) => {
        history.push(`/repository/${id}`);
    };
    const renderItem = ({ item }) => (
        <Pressable onPress={() => goToRepository(item.id)}>
            <RepositoryItem {...item} />
        </Pressable>
    );
    return (
        <FlatList data={repositoriesNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    );
};

const ItemSeparator = () => (<View style={styles.separator} />);

const RepositoryList = () => {
    const { repositories } = useRepositories();
    return <RepositoryListContainer repositories={repositories} />;
};
export default RepositoryList;