import React, { useState } from 'react';
import { styles } from './styles';
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import SignInput from '../../components/signInput';
import { useNavigation } from '@react-navigation/native';
import { credentials_service } from '../../services/credentials';

export default function singup() {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRedirectSingIn = () => {
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        })
    }

    const handleSignClick = async () => {
        if(await isValid()){

            let data = {
                username: name,
                email: email,
                password: password
            }

            let isRegisterValid = await credentials_service.singUp(data);
            let isValid = isRegisterValid.data;
            
            if(isValid){
                navigation.reset({
                    routes: [{ name: 'SingIn' }]
                });
                alert('Usuário registrado com sucesso.');
            }
            else {
                alert('Erro ao cadastrar.');
            }
        }
    }

    const isValid = async () => {
        if(!name){
            alert('Preencha o campo de nome.');
            return false;
        }
        if(!email){
            alert('Preencha o campo de email.');
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
                    IconPng={require('../../assets/person.png')}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={t => setName(t)}
                />
                <SignInput
                    IconPng={require('../../assets/email.png')}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t => setEmail(t)}
                />
                <SignInput
                    IconPng={require('../../assets/lock.png')}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={t => setPassword(t)}
                    password={true}
                />
                <TouchableOpacity style={styles.customButton} onPress={handleSignClick}>
                    <Text style={styles.customButtonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signMessageButton} onPress={handleRedirectSingIn}>
                <Text style={styles.signMessageButtonText}>Já possui uma conta?</Text>
                <Text style={styles.signMessageButtonTextBold}>Faça Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}