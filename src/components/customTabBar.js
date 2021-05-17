import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function CustomTabBar({ state, navigation }) {
    const styles = StyleSheet.create({
        container_tab_bar: {
          height: '60px',
          backgroundColor: '#4EADBE',
          flexDirection: 'row',
        },
        custom_icon: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        custom_icon_center: {
            width: '70px',
            height: '70px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            borderRadius: '35px',
            border: '3px solid #4EADBE',
            marginTop: '-20px',
        },
        icon: {
            height: 20,
            width: 20,
        },
        icon_center: {
            height: 32,
            width: 32,
        },
      });

      const redirectTo = (screenName) => {
        navigation.navigate(screenName);
      }

    return(
        <View style={styles.container_tab_bar}>
            <TouchableOpacity style={styles.custom_icon} onPress={() => redirectTo('Home')}>
                <Image style={[{ opacity: state.index === 0 ? 1 : 0.5 }, styles.icon ]} source={require('../assets/home_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.custom_icon} onPress={() => redirectTo('Search')}>
                <Image style={[{ opacity: state.index === 1 ? 1 : 0.5 }, styles.icon ]} source={require('../assets/search_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.custom_icon_center} onPress={() => redirectTo('Appointments')}>
                <Image style={styles.icon_center} source={require('../assets/calendar_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.custom_icon} onPress={() => redirectTo('Favorites')}>
                <Image style={[{ opacity: state.index === 3 ? 1 : 0.5 }, styles.icon ]} source={require('../assets/favorite_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.custom_icon} onPress={() => redirectTo('Profile')}>
                <Image style={[{ opacity: state.index === 4 ? 1 : 0.5 }, styles.icon ]} source={require('../assets/profile_icon.png')} />
            </TouchableOpacity>
        </View>
    );
}