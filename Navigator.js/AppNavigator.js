import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wishlist from '../screens/Wishlist';
import HomeNavigator from './HomeNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeNavigator} options={{
              
                 tabBarIcon: ({ color, size }) => {
                    return <FontAwesome name="home" color={color} size={size} />
                }
            }} />
            {/* <Tab.Screen name="Products" component={ProductsPage} options={{ headerShown: false }} /> */}
            <Tab.Screen name="Wishlist" component={Wishlist} options={{
                
                 tabBarIcon: ({ color, size }) => {
                    return <FontAwesome name="heart" color={color} size={size} />
                }
            }} />
        </Tab.Navigator>
    );
}