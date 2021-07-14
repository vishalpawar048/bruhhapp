import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Rating, Button } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import ShareBtn from './ShareBtn';
import Swiper from './Swiper';
import LikeBtn from "./LikeBtn";
import Comments from "./Comments";
import { getWebsiteDetails } from "../services/getProductById";

export default function ProductDetails({ route }) {

    let product = route.params;
    const [website, setWebsite] = useState({})

    const getWebsite = async (product) => {
        try {
            let websiteDetails = await getWebsiteDetails(product.website);
            setWebsite(websiteDetails[0])
        } catch (error) {
        }
    }

    useEffect(() => {
        getWebsite(product)
    }, []);

    const handleWebsiteBtn = () => {
        WebBrowser.openBrowserAsync(product.url);
    }
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <Swiper images={product.imgUrls ? product.imgUrls : []}></Swiper>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", width: "90%", margin: 10 }}>
                <LikeBtn></LikeBtn>
                <View style={{ marginLeft: 20 }}>
                    <ShareBtn></ShareBtn>
                </View>
            </View>
            <View style={styles.container}>
                <Text adjustsFontSizeToFit={true} style={styles.name}>{product.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text adjustsFontSizeToFit={true} style={styles.description}>{product.description}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text adjustsFontSizeToFit={true} style={styles.price}>Rs. {product.price} *</Text>
            </View>
            <View style={styles.noteContainer}>
                <Text adjustsFontSizeToFit={true} style={styles.note}>* Price may vary on the actual website. The above price is as per the website on 29/5/2021, 23:3.</Text>
            </View>
            <View style={styles.noteContainer}>
            </View>

            <View style={styles.websiteContainer}>
                <Text adjustsFontSizeToFit={true} style={styles.website}>{product.website}</Text>
            </View>

            <View >
                <View style={styles.websiteRatingContainer}>
                    <Text adjustsFontSizeToFit={true} style={styles.websiteRatingtext}>Website Rating</Text>
                    <Rating type='custom' ratingColor={"#f1c40f"} imageSize={20} startingValue={website ? website.overallRating : "0"} readonly />
                </View>
                <View style={styles.websiteRatingContainer}>
                    <Text adjustsFontSizeToFit={true} style={styles.websiteRatingtext}>Delivery</Text>
                    <Rating imageSize={20} startingValue={website ? website.deliveryRating : "0"} readonly />
                </View>
                <View style={styles.websiteRatingContainer}>
                    <Text adjustsFontSizeToFit={true} style={styles.websiteRatingtext}>Return Policy</Text>
                    <Rating imageSize={20} startingValue={website ? website.returnPolicy : "0"} readonly />
                </View>
                <View style={styles.websiteRatingContainer}>
                    <Text adjustsFontSizeToFit={true} style={styles.websiteRatingtext}>Product Quality</Text>
                    <Rating imageSize={20} startingValue={website ? website.productsQuality : "0"} readonly />
                </View>
            </View>

            <View style={styles.websiteBtnContainer}>
                <Button
                    buttonStyle={styles.websiteBtn}
                    titleStyle={styles.buttonTitle}
                    title="Visit Webiste"
                    type="outline"
                    onPress={handleWebsiteBtn}
                />

            </View>
            <View>
                <Comments website={website.name} productId={product._id} ></Comments>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        color: '#ab0153',
    },
    websiteBtnContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    websiteBtn: {
        borderColor: "#ab0153",
        width: 200
    },

    websiteRatingContainer: {
        flexDirection: 'row',
        padding: 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    websiteRatingtext: {
        width: 130,
        padding: 10,
        alignItems: 'center',
        textAlign: "center",
    },
    container: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    name: {
        fontSize: 17,
        textAlign: "center"

    },
    descriptionContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'

    },
    description: {
        fontSize: 15,
        textAlign: "center",


    },
    priceContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },

    price: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "600"
    },

    note: {
        fontSize: 10,
        textAlign: "center"

    },
    noteContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },

    website: {
        fontSize: 20,
        textAlign: "center"

    },
    websiteContainer: {
        // padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
})