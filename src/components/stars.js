import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default ({ stars, showNumber }) => {

    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for (var index = 0; index < floor; index++) {
        s[index] = 2;
    }

    if(left > 0){
        s[index] = 1;
    }

    const styles = StyleSheet.create({
        area_start: {
          flexDirection: 'row'
        },
        star: {
            width: 15,
            height: 15,
            marginLeft: '3px',
            paddingRight: '3px'
        },
        text_star: {
            fontSize: '12px',
            fontWeight: 'bold',
            marginLeft: '5px',
            color: '#737373'
        }
    });

    return(
        <View style={styles.area_start}>
            {s.map((i, k) => {
                return (
                    <View key={k}>
                        {i === 0 && <Image style={styles.star} source={require('../assets/empty_star_icon.png')}/>}
                        {i === 1 && <Image style={styles.star} source={require('../assets/half_star_icon.png')}/>}
                        {i === 2 && <Image style={styles.star} source={require('../assets/star_icon.png')}/>}
                    </View>
                );
            })}
            {showNumber && <Text style={styles.text_star}>{stars}</Text>}
        </View>
    );
}