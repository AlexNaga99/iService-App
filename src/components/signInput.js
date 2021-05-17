import React from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input_body: {
        width: '100%',
        height: '60px',
        backgroundColor: '#83D6E3',
        flexDirection: 'row',
        borderRadius: '30px',
        paddingLeft: '15px',
        alignItems: 'center',
        marginBottom: '15px'
    },
    input: {
        flex: 1,
        fontSize: '16px',
        color: '#268596',
        marginLeft: '10px'
    },
    icon_style: {
        width: 24,
        height: 24,
    }
});

export default ({ IconPng, placeholder, value, onChangeText, password }) => {
    return (
        <View style={styles.input_body}>
            <Image style={styles.icon_style} source={IconPng}/>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    )
}