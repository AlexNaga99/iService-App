import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ScrollView, RefreshControl, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Collapsible from 'react-native-collapsible';
import { service_customer } from '../../services/service_customer';

export default function profile() {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(true);
    const [collapsedData, setCollapsedData] = useState(true);
    const [collapsedSerivce, setCollapsedSerivce] = useState(true);
    const [customer, setCustomer] = useState({});

    const handleLogoutClick = async () => {
        await AsyncStorage.removeItem('token');
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        })
    }

    useEffect(() => {
        getCustomer();
    }, []);

    const getCustomer = async () => {

        let token = await AsyncStorage.getItem('token');
        let isCustomer = await service_customer.getCustomer(token);
        let customer = isCustomer.data;
        if(!customer.error){
            setCustomer(customer.data[0]);
        }
        else {
            alert('Erro ao carregar as informçaões.');
        }
    }

    const onRefresh = () => {
        setRefreshing(false);
    }

    const hadleDataExpanded = () => {
        setCollapsedData(!collapsedData);
    }

    const hadleServicesExpanded = () => {
        setCollapsedSerivce(!collapsedSerivce);
    }

    const handleEditService = () => {
    }

    const handleCreateService = () => {
        navigation.navigate('CreateService');
    }

    const handleEditProfile = () => {
        navigation.navigate('EditProfile', {
            name: customer.Name,
            lastName: customer.LastName,
            email: customer.Email,
            phone: customer.Phone,
            addres: customer.Address,
        });
    }

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scroller}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.fakeSwiper}><Text style={styles.profileTitle}>Meu perfil</Text></View>
            <View style={styles.pageBody}>
                <View style={styles.userInfoArea}>
                    <View style={styles.userInfo}>
                        <Text style={styles.userInfoText} numberOfLines={2}>{customer.Name}</Text>
                    </View>
                    <TouchableOpacity style={styles.profileChooseButton} onPress={handleLogoutClick}>
                        <Text style={styles.profileChooseButtonText}>SAIR DA CONTA</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.profileOptionsButton} onPress={hadleDataExpanded}>
                    <Text style={styles.profileOptionsButtonText}>Meus dados</Text>
                    {/* Colocar aqui dentro a opção se e cliente ou prestador */}
                </TouchableOpacity>
                
                <Collapsible collapsed={collapsedData} align="center">
                    <View style={styles.content}>
                        <Text style={styles.dataTextTitle}>Primeiro nome:</Text>
                        <Text style={styles.dataText}>{customer.Name}</Text>
                        <Text style={styles.dataTextTitle}>Ultimo nome:</Text>
                        <Text style={styles.dataText}>{customer.LastName}</Text>
                        <Text style={styles.dataTextTitle}>Email:</Text>
                        <Text style={styles.dataText}>{customer.Email}</Text>
                        <Text style={styles.dataTextTitle}>Telefone:</Text>
                        <Text style={styles.dataText}>{customer.Phone}</Text>
                        <Text style={styles.dataTextTitle}>Endereço:</Text>
                        <Text style={styles.dataText}>{customer.Address}</Text>

                        <TouchableOpacity style={styles.createServiceButton} onPress={handleEditProfile}>
                            <Text style={styles.createServiceButtonText}>EDITAR</Text>
                        </TouchableOpacity>
                    </View>
                </Collapsible>

                <TouchableOpacity style={styles.profileOptionsButton} onPress={hadleServicesExpanded}>
                    <Text style={styles.profileOptionsButtonText}>Meus Serviços</Text>
                    {/* Aparece só se for o prestador de serviços */}
                </TouchableOpacity>

                <Collapsible collapsed={collapsedSerivce} align="center">
                    <View style={styles.content}>
                        {
                            customer.Services && customer.Services.lenght > 0 ?
                                <>
                                    <Text>SERVICOS...</Text>
                                    <TouchableOpacity style={styles.createServiceButton}>
                                        <Text style={styles.createServiceButtonText}>CADASTRAR</Text>
                                    </TouchableOpacity>
                                </>
                            :
                                <>
                                    <Text style={{ textAlign: 'center' }}>
                                        Você ainda não possui nenhum serviço cadastrado!
                                    </Text>
                                    <TouchableOpacity style={styles.createServiceButton} onPress={handleCreateService}>
                                        <Text style={styles.createServiceButtonText}>CADASTRAR</Text>
                                    </TouchableOpacity>
                                </>
                        }
                    </View>
                </Collapsible>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}