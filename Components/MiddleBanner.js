import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';


export default function MiddelBanner({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => {
      navigation.navigate("Products", {
        category: "women",
        subCategory: "tops"
      })
    }}>

      <View style={styles.container}>
        {/* <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} /> */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/wishlist-app-a6894.appspot.com/o/banners%2FMiddleBanner%2Ftops%20low.jpg?alt=media&token=c7763ab6-4ec4-4592-b3f2-4dd99574bfc0',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15
  },

});