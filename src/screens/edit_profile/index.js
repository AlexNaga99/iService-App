import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView, RefreshControl, Image, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignInput from '../../components/signInput';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { styles } from './styles';

export default function EditProfile() {

    const navigation = useNavigation();
    const route = useRoute();

    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [refreshing, setRefreshing] = useState(true);
    const [userProfile, setUserProfile] = useState({
        name: route.params.name,
        lastName: route.params.lastName,
        email: route.params.email,
        phone: route.params.phone,
        address: route.params.address,
    });

    const onRefresh = () => {
        setRefreshing(false); 
    }

    const handleBackPage = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroller}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.fakeSwiper}><Text style={styles.profileTitle}>Editar perfil</Text></View>
                <View style={styles.pageBody}>
                    <Text style={styles.profileSubTitle}>Primeiro nome:</Text>
                    <SignInput
                        IconPng={require('../../assets/person.png')}
                        placeholder={userProfile.name}
                        value={name}
                        onChangeText={t => setName(t)}
                    />
                    <Text style={styles.profileSubTitle}>Último nome:</Text>
                    <SignInput
                        IconPng={require('../../assets/person.png')}
                        placeholder={userProfile.lastName}
                        value={lastName}
                        onChangeText={t => setLastName(t)}
                    />
                    <Text style={styles.profileSubTitle}>Endereço:</Text>
                    <SignInput
                        IconPng={require('../../assets/location_black_icon.png')}
                        placeholder={userProfile.address}
                        value={address}
                        onChangeText={t => setAddress(t)}
                        password={false}
                    />
                    <Text style={styles.profileSubTitle}>Telefone:</Text>
                    <SignInput
                        IconPng={require('../../assets/cell_icon.png')}
                        placeholder={userProfile.phone}
                        value={cellphone}
                        onChangeText={t => setCellphone(t)}
                        password={false}
                    />
                    <Text style={styles.profileSubTitle}>Email:</Text>
                    <SignInput
                        IconPng={require('../../assets/email.png')}
                        placeholder={userProfile.email}
                        value={email}
                        onChangeText={t => setEmail(t)}
                    />
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>SALVAR</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPage}>
                <Image style={styles.fav_icon} source={require('../../assets/arrow_back_icon.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}