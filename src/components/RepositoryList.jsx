import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import RNPickerSelect from 'react-native-picker-select';
// import themes from "../../themes";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        // margin: 15,
        // marginVertical: 5,
        // marginRight: 25,
        // height: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    // inputIOS: {
    //     borderWidth: 1,
    //     height: 60,
    //     fontSize: themes.fontSize.body,
    //     paddingRight: 30,

    // },
    // inputAndroid: {
    //     borderWidth: 1,
    //     height: 60,
    //     fontSize: themes.fontSize.body,
    //     paddingRight: 30
    // },
    // inputWeb: {
    //     borderWidth: 1,
    //     height: 60,
    //     fontSize: themes.fontSize.body,
    //     paddingRight: 30
    // }
});

const OrderingMenu = ({ order, setOrder }) => {
    console.log(order);
    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={(value) => setOrder(value)}
                items={[
                    { label: "Latest Repositories", value: "LatestFirstReview" },
                    { label: "Highest rated repositories", value: "HightestRated" },
                    { label: "Lowest rated repositories", value: "LowestRated" },
                ]}
                value={order}
                modalViewMiddle
            />
        </View >
    );
};

export const RepositoryListContainer = ({ order, setOrder, repositories }) => {
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
            ListHeaderComponent={() => <OrderingMenu order={order} setOrder={setOrder} />}
        />
    );
};

const ItemSeparator = () => (<View style={styles.separator} />);

const RepositoryList = () => {
    const [order, setOrder] = useState("LatestFirstReview");
    const { repositories } = useRepositories({ order });
    return <RepositoryListContainer order={order} setOrder={setOrder} repositories={repositories} />;
};
export default RepositoryList;