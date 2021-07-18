import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, Text, Button, TouchableWithoutFeedback, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductsList from '../Components/ProductsList'
import SearchBar from '../Components/SearchBar';
import { Chip, RadioButton } from 'react-native-paper';
import getWebsites from '../services/getWebsites';


export default function ProductsPage({ navigation, route }) {
    const [showFliter, setShowFliter] = useState(false);
    const [websites, setWebsites] = useState([]);
    const [sites, setsites] = useState([]);
    const [selectedWebsites, setselectedWebsites] = useState([]);
    
    const [sortZeroclicked, setSortZeroclicked] = useState(false);
    const [sortOneclicked, setSortOneclicked] = useState(false);
    let [pageNo, setPageNo] = useState(1);
    const [productsArray, setproductsArray] = useState([]);
    // const [checked, setChecked] = React.useState('0');
    const [sort, setSort] = useState(0);

    async function getWebsitesList() {
        try {
            let res = await getWebsites(route.params.category, route.params.subCategory);
            setWebsites(res);
        } catch (error) {
            console.log("error", error)
        }

    }
    function handleChipClick(button) {
        if (!selectedWebsites.includes(button)) {
            setselectedWebsites([...selectedWebsites, button])
        } else {
            selectedWebsites.splice(selectedWebsites.indexOf(button), 1);
            setselectedWebsites([...selectedWebsites])
        }
    }

    function handleFilterApply() {
        // setselectedWebsites([...selectedWebsites])
        // setPageNo(0)
        setproductsArray([]);
        setPageNo(1)
        setsites([...selectedWebsites])
        setShowFliter(false)
    }

    useEffect(() => {
        getWebsitesList()
    }, [])

    function handleSort(value) {
        console.log("value", value)
    }

    // function handleSortZero() {
    //     setSort(1)
    //     setSortOneclicked(sortOneclicked)
    //     setSortZeroclicked(!sortZeroclicked)
    // }


    return (
        <View>

            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.searchbar}>
                        <SearchBar></SearchBar>

                    </View>
                    <TouchableWithoutFeedback onPress={() => { setShowFliter(true) }}>
                        <View style={styles.textContainer}>
                            <Text>Filter</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Modal visible={showFliter} animationType="slide">
                    <SafeAreaView>

                        <View style={styles.modalWrapper}>
                            <View style={styles.filterTitle}>
                                <Text>By Price</Text>
                            </View>
                            <View style={styles.chipContainer}>
                                <View>
                                    <View style={{ flexDirection: "row", textAlign: "center", justifyContent:"center", alignContent:"center" }}>
                                        <Text style={{ textAlign: "center" }}>New</Text>
                                        <RadioButton
                                            value="0"
                                            status={sort === '0' ? 'checked' : 'unchecked'}
                                            onPress={() => setSort('0')}
                                        />
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ textAlign: "center" }}>Low To High</Text>
                                        <RadioButton
                                            value="1"
                                            status={sort === '1' ? 'checked' : 'unchecked'}
                                            onPress={() => setSort('1')}
                                        />
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text>High to Low</Text>
                                        <RadioButton
                                            value="-1"
                                            status={sort === '-1' ? 'checked' : 'unchecked'}
                                            onPress={() => setSort('-1')}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={styles.filterTitle}>
                                <Text>By Websites</Text>
                            </View>
                            <View style={styles.chipContainer}>
                                {
                                    websites.map((ele) => {
                                        return <Chip style={styles.chip} selected={selectedWebsites.includes(ele)} onPress={() => { handleChipClick(ele) }}>{ele}</Chip>

                                    })
                                }

                            </View>

                            <View style={styles.flterBtn}>
                                <Button title="Close" onPress={() => setShowFliter(false)}></Button>
                                <Button title="Apply" onPress={handleFilterApply}></Button>
                            </View>
                        </View>

                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
            <ProductsList
                selectedWebsites={sites}
                productsArray={productsArray}
                setproductsArray={setproductsArray}
                pageNo={pageNo}
                setPageNo={setPageNo}
                sort={sort}
                route={route}
                navigation={navigation}></ProductsList>
        </View>
    )
}

const styles = StyleSheet.create({
    filterTitle: {
        alignItems: "center"
    },
    modalWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    chipContainer: {
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    chip: {
        margin: 5,
        // width: "100%"
    },
    flterBtn: {
        flexDirection: "row"
    },
    textContainer: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    searchbar: {
        width: "80%",
        marginHorizontal: 10
    },

    container: {
        width: "100%",
        flexDirection: "row",

    },
})