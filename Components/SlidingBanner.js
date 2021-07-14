import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';


export default function SlidingBanner({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate("Products", {
                    category: "women",
                    subCategory: "t-shirts"
                })
            }}>

                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSlidingBanner%2FWomen%20T-shirts-low.jpg?alt=media&token=f047bb8d-b378-4760-bb31-b436aefb2da5',
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate("Products", {
                    category: "men",
                    subCategory: "t-shirts"
                })
            }}>

                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSlidingBanner%2FMensTshirt%20low.jpg?alt=media&token=d56197cb-be98-42a7-9370-6743db22d72d',
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate("Products", {
                    category: "men",
                    subCategory: "bags"
                })
            }}>

                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FSlidingBanner%2FBags-low.jpg?alt=media&token=374bbcf3-b9d7-4d7b-8761-cfd47843c8ac',
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>


        </View>
    );
}



const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    image: {
        width: "100%",
        height: 150,
        paddingHorizontal: 50,
        borderRadius: 15
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        width: 100,
    },

});