import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView, RefreshControl, Image, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { service_provider } from '../../services/service_provider';
import Stars from '../../components/stars';
import Swiper from 'react-native-swiper';
import { styles } from './styles';
import ServiceModal from '../../components/serviceModal'

export default function ServiceProvider() {

    const navigation = useNavigation();
    const route = useRoute();

    const [loading, setLoading] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [refreshing, setRefreshing] = useState(true);
    const [selectedService, setSelectedService] = useState(null);
    const [visibleModal, setVisibleModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        name: route.params.name
    });

    useEffect(() => {
        getProviderServiceById();
    }, []);

    const getProviderServiceById = async () => {
        setLoading(true);
        let token = await AsyncStorage.getItem('token');
        let isValidProviderById = await service_provider.getEstablishmentById(userInfo.id, token);
        let isValid = isValidProviderById.data;
        if(!isValid.error){
            setUserInfo(isValid.data[0]);
            //se está já favoritado
            setFavorited(true);
        }
        else {
            alert('Erro ao carregar o prestador '+ userInfo.name +'.');
        }
        setLoading(false);
    }

    const onRefresh = () => {
        setRefreshing(false);
        getProviderServiceById();
    }

    const handleBackPage = () => {
        navigation.goBack();
    }

    const handleFavClick = () => {
        setFavorited(!favorited);
    }

    const handleServiceChoose = (key) => {
        setSelectedService(key);
        setVisibleModal(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroller}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.fakeSwiper} />
                <View style={styles.pageBody}>
                    <View style={styles.userInfoArea}>
                        <View style={styles.userInfo}>
                            <Text style={styles.userInfoText} numberOfLines={2}>{userInfo.Name}</Text>
                            <Stars stars={5} showNumber={true} />
                        </View>
                        <TouchableOpacity style={styles.userFavButton} onPress={handleFavClick}>
                            {
                                favorited ?
                                <Image style={styles.fav_icon} source={require('../../assets/favorite_full_icon.png')}/>
                                :
                                <Image style={styles.fav_icon} source={require('../../assets/favorite_empty_icon.png')}/>
                            }
                        </TouchableOpacity>
                    </View>

                    {loading && <ActivityIndicator style={styles.loadingIcon} size="large" color="#000000"/>}

                    {userInfo.Services && userInfo.Services.length > 0 &&
                        <View style={styles.serviceArea}>
                            <Text style={styles.serviceTitle}>Lista de serviços</Text>
                            {userInfo.Services.map((item, key) => {
                                return(
                                    <View key={key}>
                                        <View style={styles.serviceItem}>
                                            <View style={styles.serviceInfo}>
                                                <Text style={styles.serviceName}>{item.Name}</Text>
                                                <Text style={styles.servicePrice}>R$ {item.Price}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.serviceChooseButton} onPress={() => handleServiceChoose(key)}>
                                                <Text style={styles.serviceChooseButtonText}>Agendar</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/* <View style={styles.serviceItem}>
                                        <Text style={styles.serviceName}>Descrição: </Text><Text style={styles.servicePrice}>{item.Description}</Text>
                                        </View> */}
                                    </View>
                                );
                            })}
                        </View>
                    }
                    {userInfo.Testimonial && userInfo.Testimonial.length > 0 &&
                        <View style={styles.testimonialArea}>
                            <Swiper
                                style={styles.swiperConfig}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<Image style={styles.testimonialIcon} source={require('../../assets/arrow_back_icon.png')}/>}
                                nextButton={<Image style={styles.testimonialIcon} source={require('../../assets/arrow_next_icon.png')}/>}
                            >
                                {userInfo.Testimonial.map((item, k) => {
                                    return(
                                        <View key={k} style={styles.testimonialItem}>
                                            <View style={styles.testimonialInfo}>
                                                <Text style={styles.testimonialName}>{item.Name}</Text>
                                                <Stars stars={item.Rate}/>
                                            </View>
                                            <Text  style={styles.testimonialBody}>{item.Body}</Text>
                                        </View>
                                    );
                                })}
                            </Swiper>
                        </View>
                    }
                </View>
                <ServiceModal 
                    show={visibleModal}
                    setShow={setVisibleModal}
                    user={userInfo}
                    service={selectedService}
                />
            </ScrollView>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPage}>
                <Image style={styles.fav_icon} source={require('../../assets/arrow_back_icon.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}