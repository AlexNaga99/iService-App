import React, { useState } from 'react';
import { styles } from './styles';
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import SignInput from '../../components/signInput';
import { useNavigation } from '@react-navigation/native';
import { credentials_service } from '../../services/credentials';

export default function singup() {

    const navigation = useNavigation();
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [cellphone, setCellphone] = useState('');

    const handleRedirectSingIn = () => {
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        })
    }

    const handleSignClick = async () => {
        if(await isValid()){

            let data = {
                userName: userName,
                lastName: lastName,
                name: name,
                email: email,
                password: password,
                phone: cellphone,
                address: address
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
            alert('Preencha seu primeiro nome.');
            return false;
        }
        if(!userName){
            alert('Preencha o campo nome de usuário.');
            return false;
        }
        if(!lastName){
            alert('Preencha seu último nome.');
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
        if(!cellphone){
            alert('Preencha o campo telefone.');
            return false;
        }
        if(!address){
            alert('Preencha o campo endereço.');
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
                    placeholder="Primeiro nome"
                    value={name}
                    onChangeText={t => setName(t)}
                />
                <SignInput
                    IconPng={require('../../assets/person.png')}
                    placeholder="Ultimo nome"
                    value={lastName}
                    onChangeText={t => setLastName(t)}
                />
                <SignInput
                    IconPng={require('../../assets/person.png')}
                    placeholder="Nome de usuário"
                    value={userName}
                    onChangeText={t => setUserName(t)}
                />
                <SignInput
                    IconPng={require('../../assets/email.png')}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={t => setEmail(t)}
                />
                <SignInput
                    IconPng={require('../../assets/lock.png')}
                    placeholder="Senha"
                    value={password}
                    onChangeText={t => setPassword(t)}
                    password={true}
                />
                <SignInput
                    IconPng={require('../../assets/location_black_icon.png')}
                    placeholder="Endereço completo"
                    value={address}
                    onChangeText={t => setAddress(t)}
                    password={false}
                />
                <SignInput
                    IconPng={require('../../assets/cell_icon.png')}
                    placeholder="Celular"
                    value={cellphone}
                    onChangeText={t => setCellphone(t)}
                    password={false}
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