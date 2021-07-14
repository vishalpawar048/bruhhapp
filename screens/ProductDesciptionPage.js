import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ProductDetails from '../Components/ProductDetails'
import Swiper from '../Components/Swiper'


export default function ProductDesciptionPage({ route }) {
    return (
        <ScrollView>
            <View>
                <ProductDetails route={route}></ProductDetails>
            </View>
        </ScrollView>

    )
}



const styles = StyleSheet.create({})
