import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ListViewBase, ListViewComponent, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import MainBanner from '../Components/MainBanner';
import SubBanner from '../Components/SubBanner';
import SlidingBanner from '../Components/SlidingBanner';
import MiddelBanner from '../Components/MiddleBanner';
import SquareBanner from '../Components/SquareBanner';
import SearchBar from '../Components/SearchBar';



export default function Homepage({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBar />
                <MainBanner navigation={navigation} />
                <SubBanner navigation={navigation} />
                <SlidingBanner navigation={navigation} />
                <MiddelBanner navigation={navigation} />
                <SquareBanner navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
});




