import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    Modal: {
        flex: 1,
    },  
    Area: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    Body: {
        backgroundColor: '#83D6E3',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        minHeight: '400px',
        padding: '10px 20px 40px 20px'
    }
  });

export default ({ show, setShow, user, service }) => {

    const navigation = useNavigation();
    
    return (
        <Modal
            isVisible={show}
        >
            <View style={styles.Area}>
                <View style={styles.Body}>
                    <Text>Testando</Text><Text>Testando</Text><Text>Testando</Text>
                </View>
            </View>
        </Modal>
    );
}