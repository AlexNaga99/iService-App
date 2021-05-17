import React, { useEffect } from 'react';
import { Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function preload() {

    useEffect(() => {
        checkToken();
    }, []);

    const navigation = useNavigation();

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            });
        }
        else {
            navigation.navigate('SingIn');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/team.png')}></Image>
            <ActivityIndicator size="large" color="#ffffff" />
        </SafeAreaView>
    );
}