import React, { useState } from 'react';
import { AppRegistry, FlatList, Image, View, StyleSheet } from 'react-native';

export default function Wishlist() {

    const [images, setimages] = useState([
        "https://cdn.shopify.com/s/files/1/1695/7273/products/210123-5-016_1024x1024.jpg?v=1618984521",
        "https://www.labelritukumar.com/media/catalog/product/S/D/SDRVCF50S35N21908554-GREEN-1.jpg?optimize=high&fit=bounds&height=&width=",
        "https://cdn.shopify.com/s/files/1/1695/7273/products/210123-5-016_1024x1024.jpg?v=1618984521",
        "https://www.labelritukumar.com/media/catalog/product/S/D/SDRVCF50S35N21908554-GREEN-1.jpg?optimize=high&fit=bounds&height=&width=",
        "https://cdn.shopify.com/s/files/1/1695/7273/products/210123-5-016_1024x1024.jpg?v=1618984521",
        "https://www.labelritukumar.com/media/catalog/product/S/D/SDRVCF50S35N21908554-GREEN-1.jpg?optimize=high&fit=bounds&height=&width=",
        "https://cdn.shopify.com/s/files/1/1695/7273/products/210123-5-016_1024x1024.jpg?v=1618984521",
        "https://www.labelritukumar.com/media/catalog/product/S/D/SDRVCF50S35N21908554-GREEN-1.jpg?optimize=high&fit=bounds&height=&width=",
        "https://cdn.shopify.com/s/files/1/1695/7273/products/210123-5-016_1024x1024.jpg?v=1618984521",
        "https://www.labelritukumar.com/media/catalog/product/S/D/SDRVCF50S35N21908554-GREEN-1.jpg?optimize=high&fit=bounds&height=&width=",
    ]);

    const renderItem = ({ item }) => (
        <Image source={{
            uri: item,
        }}
            key={item} //change this to product ID.
            style={styles.image}
        />
    );
    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    numColumns={2}
                    renderItem={renderItem}
                />
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center'

    },
    image: {
        width: 180,
        height: 300,
        resizeMode: 'contain',
        margin: 5,
        borderRadius: 15
    },

});
