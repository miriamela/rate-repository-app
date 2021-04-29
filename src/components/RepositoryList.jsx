import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import useRepositories from "../hooks/useRepositories";
// import { useHistory } from "react-router-native";
import RNPickerSelect from 'react-native-picker-select';
// import themes from "../../themes";
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        margin: 15,
        marginVertical: 5,
        marginRight: 25,
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // color: themes.colors.textPrimary,
    },
    searchBar: {
        marginBottom: 15,
        width: "100%",
    },
    menuElements: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menuTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
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


const RepositoryListHeader = ({ searchValue, setSearchValue, order, setOrder }) => {
    console.log(order, searchValue);
    return (
        <>
            <View style={styles.container}>
                {SearchBar({ searchValue, setSearchValue })}
            </View>
            <View>
                {OrderingMenu({ setOrder })}
            </View>

            {/* <RNPickerSelect
                onValueChange={(value) => setOrder(value)}
                items={[
                    { label: "Latest Repositories", value: "LatestFirstReview" },
                    { label: "Highest rated repositories", value: "HightestRated" },
                    { label: "Lowest rated repositories", value: "LowestRated" },
                ]}
                value={order}
                modalViewMiddle
            /> */}

        </>
    );
};

const OrderingMenu = ({ setOrder }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <Provider>
            <View style={styles.menuTitle} contentStyle={styles.menuElements}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Select an Item...</Button>}
                >
                    <Menu.Item onPress={() => setOrder("LatestFirstReview")} title="Latest repositories" />
                    <Menu.Item onPress={() => setOrder("HightestRated")} title="Highest rated repositories" />
                    <Menu.Item onPress={() => setOrder("LowestRated")} title="Lowest rated repositories" />
                </Menu>
            </View >
        </Provider>
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
    // history = useHistory();
    goToRepository = (id) => {
        console.log(this.props);
        this.props.history.push({
            pathname: `/repository/${id}`,
        });
    }
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
                    <Pressable onPress={() => this.goToRepository(item.id)}>
                        <RepositoryItem {...item} />
                    </Pressable>

                }
                ItemSeparatorComponent={this.ItemSeparator}
                ListHeaderComponent={this.renderHeader}
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

// const ItemSeparator = () => (<View style={styles.separator} />);

const RepositoryList = () => {
    const [order, setOrder] = useState("LatestFirstReview");
    const [searchValue, setSearchValue] = useState("");
    const [value] = useDebounce(searchValue, 500);

    const { repositories } = useRepositories({ order, searchValue: value });
    console.log(repositories);
    return <RepositoryListContainer searchValue={searchValue} setSearchValue={setSearchValue} order={order} setOrder={setOrder} repositories={repositories} />;
};
export default RepositoryList;