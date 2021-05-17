import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Appointments from '../screens/appointments';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import CustomTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Appointments" component={Appointments} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
} 