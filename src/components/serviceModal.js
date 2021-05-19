import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    Modal: {
        flex: 1,
        borderWidth: 0,
        width: '100%',
    },  
    Area: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    Body: {
        bottom: 0,
        backgroundColor: '#83D6E3',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        minWidth: '300px',
        padding: '10px 20px 40px 20px',
    },
    closeButton: {
        width: '40px',
        height: '40px',
    },
    iconClose: {
        width: 40,
        height: 40,
    }
  });

export default ({ show, setShow, user, service, setService }) => {
    
    const navigation = useNavigation();
    
    const handleCloseButton = () => {
        setShow(false);
        setService(null);
    }

    return (
        <View style={styles.Modal}>
            <Modal style={styles.Modal} visible={show} transparent={true} animationType="slide" >
                <View style={styles.Area}>
                    <View style={styles.Body}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseButton}>
                            <Image style={styles.iconClose} source={require('../assets/arrow_down_icon.png')}/>
                        </TouchableOpacity>
                        
                        <View style={styles.modalItem}>
                            <View style={styles.modalInfo}>
                                <Text style={styles.UserName}>{user.Name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
}