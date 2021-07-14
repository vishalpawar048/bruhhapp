import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function SquareBanner({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "men",
                        subCategory: "shoes"
                    })
                }}>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSquareBannerEnd%2Fmenshoes-low.jpg?alt=media&token=b58ad10c-80dc-4d17-ac62-ef079d777862',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "women",
                        subCategory: "shoes"
                    })
                }}>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSquareBannerEnd%2Fwomenshoes-low.jpg?alt=media&token=0d2cbfe9-4c6e-4a97-a69d-72f2b5ea4985',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "men",
                        subCategory: "jacket-hoodies"
                    })
                }}>

                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSquareBannerEnd%2Fmenjacket-low.jpg?alt=media&token=fe5c92ab-b10a-4a53-aba8-239b5239d8d3',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback >
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "women",
                        subCategory: "jacket-hoodies"
                    })
                }}>

                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSquareBannerEnd%2Fwomenjacket-low.jpg?alt=media&token=951450d2-c2aa-4c69-8351-8343a5f6b180',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback >


            </View>
        </View>

    );
}



const styles = StyleSheet.create({
    wrapper: {
        marginTop: 40,
    },
    container: {
        // width: "100%",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    image: {
        width: "100%",
        height: 150,
        // paddingHorizontal: 50,
        borderRadius: 15
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

        // marginHorizontal: 10,
        borderRadius: 10,
        width: 150,
    },

});