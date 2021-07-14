import React from "react";
import { Dimensions, Text, Image, StyleSheet, View, ScrollView } from "react-native";

export default function Swiper({ images }) {
  return (
    <View style={styles.container}>
      <ScrollView
        snapToInterval={Dimensions.get('window').width}
        horizontal
      // decelerationRate="fast"
      // showsHorizontalScrollIndicator={false}
      >
        {
          images.map((url) => {
            if (url) {
              return <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{
                    uri: url,
                  }}
                />
              </View>
            } else {
              return null
            }

          })
        }
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {

    flexDirection: "row",

  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
    resizeMode: "contain",

  },
  card: {

    justifyContent: 'center',
    alignItems: 'center',

  },

});