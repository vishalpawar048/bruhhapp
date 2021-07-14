import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProductsPage from "../screens/ProductsPage"
import ProductDesciptionPage from "../screens/ProductDesciptionPage"
import Homepage from '../screens/Homepage';


const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
            <Stack.Screen name="Products" component={ProductsPage} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={ProductDesciptionPage} options={{ headerShown: true }}/>
        </Stack.Navigator>
    );
}