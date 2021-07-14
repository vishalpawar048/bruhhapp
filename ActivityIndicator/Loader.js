import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Loader({visible = false}) {
    if(!visible) return null;

    return (
       <LottieView autoPlay loop source={require("../assets/Animation/loading.json")} />
    )
}

const styles = StyleSheet.create({
    container:{
        width:"50%"
    }
})
