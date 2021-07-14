import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';


const Item = ({ item }) => (
    <View style={styles.itemContainer}>
        <Avatar containerStyle={{ backgroundColor: "gray" }} rounded title="MD" />
        <View style={styles.comments}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.commentText}>{item.comment}</Text>
        </View>
    </View>
);

const CommentsList = ({ comments }) => {

    console.log(comments)
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    comments: {
        width: "100%",
        flexDirection: "column"
    },
    commentText: {
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 15
    },
    itemContainer: {
        flexDirection: "row",
        // backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 12,
        paddingLeft: 10
    },
});

export default CommentsList;