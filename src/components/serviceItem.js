import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Stars from '../components/stars';
import { useNavigation } from '@react-navigation/native';

export default ({ data }) => {

    const styles = StyleSheet.create({
        area: {
          backgroundColor: '#FFFFFF',
          marginBottom: '20px',
          borderRadius: '20px',
          padding: '15px',
          flexDirection: 'row'
        },
        avatar: {
            width: '88px',
            height: '88px',
            borderRadius: '20px'
        },
        infoArea: {
            marginLeft: '20px',
            justifyContent: 'space-between'
        },
        userName: {
            fontSize: '17px',
            fontWeight: 'bold',
        },
        profileDetails: {
            width: '85px',
            height: '26px',
            border: '1px solid #4EADBE',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        profileText: {
            fontSize: '13px',
            color: '#268596'
        }
    });
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Service', {
            id: data.ID,
            name: data.Name
        })
    }

    return(
        <TouchableOpacity style={styles.area} onPress={handleClick}>
            <Image style={styles.avatar} source={require('../assets/person.png')} />
            <View style={styles.infoArea}>
                <View  style={styles.userName}><Text>{data.Name}</Text></View>

                <Stars stars={data.rate} showNumber={true} />

                <View  style={styles.profileDetails}>
                    <Text  style={styles.profileText}>Ver Perfil</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}