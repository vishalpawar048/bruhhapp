import React, { useState, useEffect, useRef } from 'react';
import { AppRegistry, FlatList, Image, View, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../ActivityIndicator/Loader';
import { getProductList } from "../services/getProductList";
import LikeBtn from "./LikeBtn";

const ProductsList = ({ selectedWebsites, productsArray, setproductsArray, pageNo, setPageNo, sort, route, navigation }) => {
    let { category, subCategory } = route.params;
    // let [pageNo, setPageNo] = useState(1);
    // const [productsArray, setproductsArray] = useState([]);
    const [loading, setLoading] = useState(false);




    useEffect(() => {

        loadProducts()

    }, [selectedWebsites]);


    // let prevSite = usePrevious(selectedWebsites);
    const loadProducts = async () => {
        console.log("sort", sort)
        setPageNo((previousPage) => previousPage + 1);


        let obj = {
            website: selectedWebsites,
            category: category,
            subCategory: subCategory,
            pageNo: pageNo,
            sort: sort,
        }
        setLoading(true)
        let res = await getProductList(obj);
        // console.log(">>>>>res", res.length)
        setLoading(false);
        // setproductsArray([...productsArray, ...res])
        setproductsArray(prev => [...prev, ...res])


    }

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate("Details", item) }}>
                <Image source={{
                    uri: item.imgUrls[0],
                }}
                    key={item._id} //change this to product ID.
                    style={styles.image}
                />
            </TouchableWithoutFeedback>
            <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rs.{item.price}</Text>
            <Text style={styles.price}>{item.website}</Text>
            <View style={styles.likeBtn}>
                <LikeBtn size={20}></LikeBtn>
            </View>

        </View>
    );
    return (
        <SafeAreaView>
            <View>
                <View style={styles.container}>
                    <Loader visible={loading}></Loader>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item._id}
                        data={productsArray}
                        numColumns={2}
                        renderItem={renderItem}
                        onEndReached={loadProducts}
                        onEndReachedThreshold={0.7}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductsList;

const styles = StyleSheet.create({
    card: {
        width: "50%"
    },
    name: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    price: {
        textAlign: "center"
    },
    likeBtn: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center"

    },
    container: {
        width: "100%",
        height: "95%",
        alignItems: 'center',
    },
    image: {
        width: 180,
        height: 300,
        resizeMode: 'contain',
        margin: 5,
        borderRadius: 15,

    },

});
