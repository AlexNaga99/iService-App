import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function profile() {

    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await AsyncStorage.removeItem('token');
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        })
    }

    return(
        <SafeAreaView>
            <TouchableOpacity onPress={handleLogoutClick}>
                    <Text>DESLOGAR</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}