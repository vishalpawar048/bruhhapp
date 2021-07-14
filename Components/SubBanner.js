import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function SubBanner({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "men",
                        subCategory: "shirts"
                    })
                }}>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FCarouselBanner%2Fshirts%20low.jpg?alt=media&token=5bc8dfb3-0078-415e-895b-abb9a3449884',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate("Products", {
                        category: "gifts",
                        subCategory: ""
                    })
                }}>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FCarouselBanner%2Fgifts%20low.jpg?alt=media&token=a0c30745-71b4-420a-b802-768ce6655b9d',
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: 220,
        paddingHorizontal: 50,
        borderRadius: 15
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

        marginHorizontal: 20,
        borderRadius: 10,
        width: 220,
    },

});