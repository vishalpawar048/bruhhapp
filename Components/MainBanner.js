import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function MainBanner({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => {
      navigation.navigate("Products", {
        category: "women",
        subCategory: "dresses"
      })
    }}>
      <View style={styles.container}>
        {/* <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} /> */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FCarouselBanner%2FWomenDresses-low.jpg?alt=media&token=f59803bd-e62c-4891-b1b1-3812be1914b2',
          }}
        />

      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    //   paddingTop: 50,
    paddingHorizontal: 10,
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 15
  },

});