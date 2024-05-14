import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { sharedStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'; // Importa el componente Modal

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

    const auth = getAuth();

    const handleForgotPassword = async () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Correo de recuperación enviado. Revise su bandeja de entrada para restablecer su contraseña.');
                console.log(message); // Agregar este console.log
            })
            .catch((error) => {
                Alert.alert('Error:', "Ingrese un correo válido\n "+ error);
                console.log('Error:', error);  // Agregar este console.log
            });
            setModalVisible(true); // Mostrar el modal después de actualizar el mensaje
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    
    return (
        <View style={sharedStyles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Recuperar contraseña</Text>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('IniciarSesion1')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <TextInput
                placeholder="Ingrese su correo electrónico"
                value={email}
                style={sharedStyles.entradaTexto}
                onChangeText={setEmail}
            />
            <TouchableOpacity onPress={handleForgotPassword} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Enviar correo de recuperación</Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text>{message}</Text>
                        <TouchableOpacity onPress={toggleModal} style={{ marginTop: 10 }}>
                            <Text style={{ color: 'blue' }}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    sharedStyles,
});

export default ForgotPasswordScreen;