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
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C"
const backgroundP = "#E0E6F6"

const app = initializeApp(firebaseConfig);

const domainList = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

export default function CuentaScreen() {
    const db = getFirestore(app);
    const navigation = useNavigation();

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
                console.log('Datos del usuario recuperados de Firestore:', userData);
                setNombreUsuario(userData.username);
                setCorreo(userData.email);
                setSexo(userData.gender);
                setDateOfBirth(userData.dateOfBirth);
                setAvatarUrl(userData.avatar.image);
            }
        };

        fetchUserData();
    }, []);

    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigation.navigate('Inicio');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleConfirmChanges = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            if (!validateEmail(email)) {
                Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
                return;
            }

            if (!username.trim()) {
                Alert.alert('Error', 'Por favor ingresa un nombre de usuario.');
                return;
            }

            try {
                await updateEmail(user, email);
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
                Alert.alert('Los cambios se han guardado con éxito');

            } catch (error) {
                Alert.alert('Hubo un error al guardar los cambios: ' + error.message);
            }
        }
    };


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+\@[^\s@]+\.[a-zA-Z]{2,}$/;
        const emailDomain = email.split('@')[1];
        return emailRegex.test(email) && domainList.includes(emailDomain);
    };

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style={styles.perfil}>
                <Text style={{ paddingBottom: 10, fontSize: 24, fontWeight: "bold" }}>Perfil</Text>
                <TouchableOpacity onPress={handleSignOut} style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
                {avatarUrl ? (
                    <Image
                        source={{ uri: avatarUrl }}
                        style={styles.fotoPerfil}
                    />
                ) : (
                    <Text>Cargando avatar...</Text>
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
        justifyContent: 'space-between',
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
        borderRadius: 50
    },
    perfil: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    logoutButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
    },
    logoutButtonText: {
        color: 'red',
    },
    sharedStyles,
});