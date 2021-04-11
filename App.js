// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, View } from 'react-native';
import Main from "./src/components/Main";
import {NativeRouter} from "react-router-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

function App() {
  return (
    <NativeRouter>
        <Main/>
    </NativeRouter>
  );
}

export default App;

