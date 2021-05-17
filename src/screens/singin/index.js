import React, { useState, useContext } from 'react';
import { styles } from './styles';
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import SignInput from '../../components/signInput';
import { useNavigation } from '@react-navigation/native';
import { credentials_service } from '../../services/credentials';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

export default function singin() {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    const [loginCredentials, setLoginCredentials] = useState('');
    const [password, setPassword] = useState('');

    const handleRedirectSingUp = () => {
        navigation.reset({
            routes: [{ name: 'SingUp' }]
        });
    }

    const handleSignClick = async () => {
        if(await isValid()){
            
            let data = {
                username: loginCredentials,
                password: password
            }

            try {
                var isLoginValid = await credentials_service.singIn(data);
            } catch (error) {
            }

            if(isLoginValid){
                let isValid = isLoginValid.data;
                if(isValid){
                    let token = isValid.access_token;
                    await AsyncStorage.setItem('token', token);
                    userDispatch({
                        type: 'id',
                        payload: {
                            id: 1
                        }
                    });
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                }
                else {
                    alert('Sua senha está incorreta.');
                }
            }
            else {
                alert('Sua senha está incorreta.');
            }
        }
    }

    const isValid = async () => {
        if(!loginCredentials){
            alert('Preencha o campo de login.');
            return false;
        }
        if(!password){
            alert('Preencha o campo senha.');
            return false;
        }
        return true
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/team.png')}/>
            <View style={styles.inputArea}>
                <SignInput
                    IconPng={require('../../assets/email.png')}
                    placeholder="Digite seu email"
                    value={loginCredentials}
                    onChangeText={t => setLoginCredentials(t)}
                />
                <SignInput
                    IconPng={require('../../assets/lock.png')}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={t => setPassword(t)}
                    password={true}
                />
                <TouchableOpacity style={styles.customButton} onPress={handleSignClick}>
                    <Text style={styles.customButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signMessageButton} onPress={handleRedirectSingUp}>
                <Text style={styles.signMessageButtonText}>Ainda não possui uma conta?</Text>
                <Text style={styles.signMessageButtonTextBold}>Cadastre-se</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}