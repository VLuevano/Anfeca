import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import BottomBar from './BottomBar';
import { sharedStyles } from './styles';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { updateProfile } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { updateEmail } from "firebase/auth";
import { Alert } from 'react-native';

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C"
const backgroundP = "#E0E6F6"

const app = initializeApp(firebaseConfig);

export default function CuentaScreen() {

    const db = getFirestore(app);

    const [username, setNombreUsuario] = useState('');
    const [email, setCorreo] = useState('');
    const [gender, setSexo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [message, setMessage] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
            const userDocSnap = await getDoc(userDoc);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                console.log('Datos del usuario recuperados de Firestore:', userData); // Agrega esta línea
                setNombreUsuario(userData.username);
                setCorreo(userData.email);
                setSexo(userData.gender);
                setDateOfBirth(userData.dateOfBirth);
                setAvatarUrl(userData.avatar.image); // Recuperar la URL de la imagen del avatar
            }
        };

        fetchUserData();
    }, []);


    const handleConfirmChanges = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            try {
                // Intenta actualizar el correo electrónico
                await updateEmail(user, email);

                // Si la actualización fue exitosa, actualiza el perfil y los datos en Firestore
                await updateProfile(user, {
                    displayName: username,
                    email: email,
                });

                const userDoc = doc(db, 'Usuario', user.uid);
                await setDoc(userDoc, {
                    username: username,
                    email: email,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                }, { merge: true });

                // Si todo fue exitoso, establece un mensaje de éxito
                setMessage('Los cambios se han guardado con éxito.');

            } catch (error) {
                // Si hubo un error, establece un mensaje de error
                setMessage('Hubo un error al guardar los cambios: ' + error.message);
            }

            // Muestra una alerta con el mensaje
            Alert.alert(message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style={styles.perfil}>
                <Text style={{ paddingBottom: 10, fontSize: 24, fontWeight: "bold" }}>Perfil</Text>
                {avatarUrl ? (
                    <Image
                        source={{ uri: avatarUrl }} // Usar la URL del avatar para mostrar la imagen
                        style={styles.fotoPerfil}
                    />
                ) : (
                    <Text>Cargando avatar...</Text> // Mostrar un mensaje de carga mientras la URL del avatar se está cargando
                )}
            </View>


            <View style={styles.items}>
                <Text style={styles.label}>Nombre de usuario:</Text>
                <TextInput
                    style={styles.textInput}
                    value={username}
                    onChangeText={setNombreUsuario}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setCorreo}
                />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Sexo:</Text>
                <Text style={styles.textInput}>{gender}</Text>
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Fecha de nacimiento:</Text>
                <Text style={styles.textInput}>{dateOfBirth}</Text>
            </View>

            <TouchableOpacity onPress={handleConfirmChanges} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar Cambios</Text>
            </TouchableOpacity>

            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between', // Alinea los elementos en el eje principal
    },
    items: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: greyP,
        height: 24,
        borderRadius: 20,
        marginRight: 20,
    },
    label: {
        width: "30%",
        fontSize: 12,
        marginLeft: 20,
    },
    confirmButton: {
        backgroundColor: yellowP,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 40,
    },
    confirmButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold",
    },
    fotoPerfil: {
        width: 100,
        height: 100,
    },
    perfil: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    sharedStyles,
});