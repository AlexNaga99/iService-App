import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, Image, View, TouchableOpacity, TextInput, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import * as Permissions from 'expo-permissions';
import Geolocation from '@react-native-community/geolocation';
import ServiceItems from '../../components/serviceItem';
import { service_provider } from '../../services/service_provider';
import AsyncStorage from '@react-native-community/async-storage';

export default function home() {

    const navigation = useNavigation();
    const [location, setLocation] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [listService, setListService] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getServices();
    },[]);

    const handleLocation = async () => {
        setCoords(null);
        const { status } = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);

        if(status == 'granted'){
            setLoading(true);
            setLocation('');
            setListService([]);
            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
                getServices();
            });
        }
    }

    const getServices = async () => {
        setLoading(true);
        
        if(coords){
            var data = {
                lat: coords.latitude,
                lng: coords.longitude
            }
        }
        
        if(location){
            data = {
                location: location
            }
        }
        //colocar o get services aqui com a latitude e a longitude      
        let token = await AsyncStorage.getItem('token');
        let establishments = await service_provider.getEstablishment(token);
        let isOkEstablishments = establishments.data;
        if(isOkEstablishments){
            setListService(isOkEstablishments.data);
        }
        setLoading(false);
    }

    const onRefresh = () => {
        setRefreshing(false);
        getServices();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getServices();
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.scroller} 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.headerArea}>
                    <Text style={styles.headerTitle} numberOfLines={2}>
                        Encontre seu prestador de serviço!
                    </Text>
                    <TouchableOpacity  style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
                        <Image style={styles.icon} source={require('../../assets/search_icon.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.locationArea}>
                    <TextInput  
                        style={styles.locationInput}
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={location}
                        onChangeText={t => setLocation(t)}
                        onEndEditing={handleLocationSearch}
                    >
                    </TextInput>
                    <TouchableOpacity  style={styles.locationFinder} onPress={handleLocation}>
                        <Image style={styles.icon} source={require('../../assets/location_icon.png')} />
                    </TouchableOpacity>
                </View>

                {loading && <ActivityIndicator style={styles.loadingIcon} size="large" color="#FFFFFF"/>}

                <View style={styles.listArea}>
                    {listService.map((item, k) => {
                        return(
                            <ServiceItems data={item} key={k} />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}