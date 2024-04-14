import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style = {styles.container}>
        <StatusBar backgroundColor="#5ccedf" />
        {children}
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222f3e",
        padding: 20,
        flex: 1,
        alignItems: "center",
    },
    title: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },
});

export default Layout