import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { sharedStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { firebaseConfig } from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const HistorialScreen = () => {
    const [historialJuegos, setHistorialJuegos] = useState([]); // Estado para almacenar los datos
    const navigation = useNavigation();

    useEffect(() => {
        const fetchHistorial = async (uid) => {
            try {
                const docRef = doc(db, 'Historial', uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    console.log('Document data:', docSnap.data());
                    setHistorialJuegos(docSnap.data().resultados || []);
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is signed in:', user);
                fetchHistorial(user.uid);
            } else {
                console.log('No user is signed in.');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Historial</Text>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <View style={styles.encabezado}>
                <Text style={styles.encabezadoTexto}>Tema</Text>
                <Text style={styles.encabezadoTexto}>Fecha</Text>
                <Text style={styles.encabezadoTexto}>Puntaje</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                {historialJuegos.map((juego, index) => (
                    <View key={index} style={styles.juegoContainer}>
                        <Text style={styles.text}>{juego.tema}</Text>
                        <Text style={styles.text}>{juego.fecha}</Text>
                        <Text style={styles.text}>{juego.aciertos}/{juego.totalPreguntas}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    encabezado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },
    encabezadoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    scrollView: {
        width: '100%',
    },
    juegoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 20, // Borde de radio de 20
        width: '100%',
        marginTop: 10, // Espacio entre cada componente
    },
    text: {
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
});

export default HistorialScreen;
