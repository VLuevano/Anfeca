import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { sharedStyles } from './styles';
import BottomBar from './BottomBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#FFF";

const app = initializeApp(firebaseConfig);

const ComponenteTema = ({ titulo, informacion, preguntas, resumen, historial }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const navigation = useNavigation();

    const handleJugarPress = () => {
        toggleModal();
        navigation.navigate('Info', { titulo, informacion, preguntas });
        console.log("Valor de titulo:", titulo);
        console.log("Valor de info:", informacion);
        console.log("Valor de preguntas menu:", preguntas);
    };

    const handleHistorialPress = () => {
        toggleModal();
        navigation.navigate('Historial', { titulo, historial });
    };

    const handleResumenPress = () => {
        toggleModal();
        navigation.navigate('Resumen', { titulo, resumen });
    };

    return (
        <View style={styles.componenteTema}>
            <TouchableOpacity style={styles.temaContainer} onPress={toggleModal}>
                <View style={styles.textContainer}>
                    <Text style={styles.centroText}>{titulo}</Text>
                    <Text style={styles.izquierdaText}>{informacion}</Text>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalTitle}>
                            <Text style={styles.modalTitleText}>{titulo}</Text>
                        </View>
                        <View style={styles.buttonOpcionContainer}>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={handleJugarPress}>
                                <Text>Jugar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={handleHistorialPress}>
                                <Text>Historial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={handleResumenPress}>
                                <Text>Resumen</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: yellowP, borderRadius: 10, marginBottom: 10, padding: 1, width: 100, alignItems: 'center' }}
                                onPress={() => setShowModal(false)}
                            >
                                <Text>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default function MenuPrincipalHome() {
    const db = getFirestore(app);
    const [userName, setNombreUsuario] = useState('');
    const [temas, setTemas] = useState([
        {
            titulo: 'Tema 1',
            informacion: 'Información 1',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 1", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 1 aquí...
            ],
            resumen: 'Este es el resumen del Tema 1.',
            historial: [
                { tema: 'Tema 1', fecha: '10/05/2024', puntos: 80 },
                { tema: 'Tema 1', fecha: '11/05/2024', puntos: 75 },
                { tema: 'Tema 1', fecha: '12/05/2024', puntos: 90 },
            ],
        },
        {
            titulo: 'Tema 2',
            informacion: 'Información 2',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 2", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 2 aquí...
            ],
            resumen: 'Este es el resumen del Tema 2.',
            historial: [
                { tema: 'Tema 2', fecha: '10/05/2024', puntos: 80 },
                { tema: 'Tema 2', fecha: '11/05/2024', puntos: 75 },
                { tema: 'Tema2', fecha: '12/05/2024', puntos: 90 },
            ],
        },
        // Agrega más temas aquí...
    ]);

    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
            const userDocSnap = await getDoc(userDoc);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                console.log('Datos del usuario recuperados de Firestore:', userData);
                setNombreUsuario(userData.username);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style={styles.barraBuscar}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                />
                <Ionicons name="search" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.bienvenidoText}>Bienvenido {userName}</Text>
            {temas.map((tema, index) => (
                <ComponenteTema
                    key={index}
                    titulo={tema.titulo}
                    informacion={tema.informacion}
                    preguntas={tema.preguntas}
                    resumen={tema.resumen}
                    historial={tema.historial}
                />
            ))}
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
    barraBuscar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: backgroundP,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 30,
        width: "85%",
        height: "5%",
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    icon: {
        marginLeft: 10,
    },
    componenteTema: {
        backgroundColor: purpleP,
        borderRadius: 20,
        margin: 10,
    },
    temaContainer: {
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    textContainer: {
        width: "100%",
    },
    izquierdaText: {
        textAlign: "left",
    },
    centroText: {
        textAlign: "center",
    },
    bienvenidoText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: backgroundP,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: "75%",
        height: "50%",
    },
    buttonOpcion: {
        backgroundColor: purpleP,
        borderRadius: 20,
        marginBottom: 20,
        padding: 5,
    },
    modalTitle: {
        fontSize: 24,
        padding: 30,
        alignItems: "center"
    },
    modalTitleText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    sharedStyles,
});
