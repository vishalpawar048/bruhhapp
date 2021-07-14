import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Platform } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        // <SafeAreaView style={styles.safeArea}>
            <View style={styles.containerWrapper}>
                <View style={styles.container}>
                    <FontAwesome name="search" size={20} color="black" />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Search"
                    ></TextInput>
                </View>
            </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        marginTop: 10,
    },
    containerWrapper: {
        // width: "100%",
        // justifyContent: "center",
        alignItems: "center",
    },
    container: {
        // backgroundColor:"gray",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        // marginBottom:10,
        borderWidth: 0.5,
        alignItems: "center"
    },
    textInput: {
        color: "gray",
        fontSize: 18,
        paddingHorizontal: 7,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        alignItems: "center"
    },
});

export default SearchBar;