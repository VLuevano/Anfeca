import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from './styles';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { Alert } from 'react-native';

function LoginScreen() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Signied in!")
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('MenuPrincipal');
            })
            .catch(error => {
                Alert.alert("Ingrese datos válidos", error.message)
            })
    }

    return (
        <View style={sharedStyles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Iniciar Sesión</Text>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('CrearCuenta')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={sharedStyles.textos}>Ingresa tu correo electrónico</Text>
            <TextInput
                onChangeText={setEmail}
                style={sharedStyles.entradaTexto}
                placeholder="tucorreo@ejemplo.com"
                value={email}
            />
            <Text style={sharedStyles.textos}>Ingresa tu contraseña</Text>
            <TextInput
                onChangeText={setPassword}
                style={sharedStyles.entradaTexto}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={() => navigation.navigate('RecuperarContraseña')} style={[sharedStyles.botonTexto, { borderWidth: 0 }]}>
                <Text style={[sharedStyles.textoBoton, { fontSize: 12 }]}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignIn} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function PantallaCrearCuenta() {
    return (
        <LoginScreen />
    );
}

const styles = StyleSheet.create({
    sharedStyles,
});