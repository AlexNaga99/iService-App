import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/preload';
import SingIn from '../screens/singin';
import SingUp from '../screens/singup';
import ServiceProvider from '../screens/service_provider';
import CreateService from '../screens/create_service';
import EditService from '../screens/edit_service';
import EditProfile from '../screens/edit_profile';
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SingIn" component={SingIn} />
            <Stack.Screen name="SingUp" component={SingUp} />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Service" component={ServiceProvider} />
            <Stack.Screen name="CreateService" component={CreateService} />
            <Stack.Screen name="EditService" component={EditService} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
}