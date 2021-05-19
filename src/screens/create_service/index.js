import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView, RefreshControl, Image, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignInput from '../../components/signInput';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function CreateService() {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(true);
    const [titleService, setTitleService] = useState('');
    const [descriptionService, setDescriptionService] = useState('');
    const [price, setPrice] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

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
                <View style={styles.fakeSwiper}><Text style={styles.serviceTitle}>Criar serviço</Text></View>
                <View style={styles.pageBody}>
                    <Text style={styles.serviceSubTitle}>Preencha os seguintes campos:</Text>
                    <SignInput
                        placeholder={"Título do serviço"}
                        value={titleService}
                        onChangeText={t => setTitleService(t)}
                    />
                    <SignInput
                        placeholder={"Descrição do serviço"}
                        value={descriptionService}
                        onChangeText={t => setDescriptionService(t)}
                    />
                    <SignInput
                        placeholder={"Preço"}
                        value={price}
                        onChangeText={t => setPrice(t)}
                    />
                    <SignInput
                        placeholder={"Tempo estimado"}
                        value={estimatedTime}
                        onChangeText={t => setEstimatedTime(t)}
                    />
                </View>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>CRIAR</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPage}>
                <Image style={styles.fav_icon} source={require('../../assets/arrow_back_icon.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}