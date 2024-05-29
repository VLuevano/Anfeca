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
    const [showPassword, setShowPassword] = useState(false);

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={sharedStyles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Iniciar Sesión</Text>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('IniciarSesion')}>
                <Image
                    source={require('../../resources/images/flechaRetroceder.png')}
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
            <View style={[styles.passwordInputContainer, sharedStyles.entradaTexto]}>
                <TextInput
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                    style={styles.passwordInput}
                    value={password}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                    <Image
                        source={showPassword ? require('../../resources/images/eye-open.png') : require('../../resources/images/eye-closed.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

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
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        paddingHorizontal: 8,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 12,
    },
    eyeIconContainer: {
        padding: 10,
    },
    eyeIcon: {
        width: 30,
        height: 20,
    },
});