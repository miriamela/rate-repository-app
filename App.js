// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, View } from 'react-native';
import Main from "./src/components/Main";
import {NativeRouter} from "react-router-native";
import {ApolloProvider} from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient =createApolloClient();


function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main/>
      </ApolloProvider>   
    </NativeRouter>
  );
}

export default App;

