import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import themes from "../../themes";
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        padding: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    searchBar: {
        width: "100%",
    },
    orderMenuContainer: {
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    orderMenu: {
        backgroundColor: themes.colors.primaryColor,
        borderColor: "transparent",
        fontSize: themes.fontSize.subheading

    },
});

const SearchBar = ({ searchValue, setSearchValue }) => {
    return (
        <Searchbar
            placeholder="Search"
            onChangeText={(value) => setSearchValue(value)}
            value={searchValue}
            style={styles.searchBar}
        />
    );
};

const OrderingMenu = ({ setOrder, order }) => {

    return (
        <View style={styles.orderMenuContainer}>
            <Picker
                style={styles.orderMenu}
                selectedValue={order}
                onValueChange={(itemValue) =>
                    setOrder(itemValue)
                }>
                <Picker.Item label="Latest Repositories" value="LatestFirstReview" />
                <Picker.Item label="Highest rated repositories" value="HightestRated" />
                <Picker.Item label="Lowest rated repositories" value="LowestRated" />
            </Picker>
        </View>

    );
};

const RepositoryListHeader = ({ searchValue, setSearchValue, order, setOrder }) => {
    console.log(order, searchValue);
    return (
        <>
            <View style={styles.container}>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </View>
            <View>
                <OrderingMenu setOrder={setOrder} order={order} />
            </View>
        </>
    );
};

export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const props = this.props;
        return (
            <RepositoryListHeader
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue}
                order={props.order}
                setOrder={props.setOrder}
            />
        );
    };
    ItemSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    };
    render() {
        const repositoriesNodes = this.props.repositories ? this.props.repositories.edges.map(edge => edge.node) : [];

        return (
            <FlatList
                data={repositoriesNodes}
                renderItem={({ item }) =>
                    <Pressable onPress={() => this.props.goToRepository(item.id)}>
                        <RepositoryItem {...item} />
                    </Pressable>

                }
                ItemSeparatorComponent={this.ItemSeparator}
                ListHeaderComponent={this.renderHeader}
                onEndReached={this.props.onEndReach}
                onEndReachedThreshold={0.5}
            />
        );
    }
}

// export const RepositoryListContainer = ({ searchValue, setSearchValue, order, setOrder, repositories }) => {
//     const history = useHistory();
//     const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
//     const goToRepository = (id) => {
//         history.push(`/repository/${id}`);
//     };
//     const renderItem = ({ item }) => (
//         <Pressable onPress={() => goToRepository(item.id)}>
//             <RepositoryItem {...item} />
//         </Pressable>
//     );
//     return (
//         <FlatList data={repositoriesNodes}
//             ItemSeparatorComponent={ItemSeparator}
//             renderItem={renderItem}
//             ListHeaderComponent={() => <OrderingMenu searchValue={searchValue} setSearchValue={setSearchValue} order={order} setOrder={setOrder} />}
//         />
//     );
// };

const RepositoryList = () => {
    const history = useHistory();
    const [order, setOrder] = useState("LatestFirstReview");
    const [searchValue, setSearchValue] = useState("");
    const [value] = useDebounce(searchValue, 500);

    const goToRepository = (id) => {
        history.push(`/repository/${id}`);
    };

    const { repositories, fetchMore } = useRepositories({ order, searchValue: value, first: 10 });
    const onEndReach = () => {
        console.log("HERE");
        fetchMore();
    };
    console.log(repositories);
    return <RepositoryListContainer onEndReach={onEndReach} goToRepository={goToRepository} searchValue={searchValue} setSearchValue={setSearchValue} order={order} setOrder={setOrder} repositories={repositories} />;
};
export default RepositoryList;