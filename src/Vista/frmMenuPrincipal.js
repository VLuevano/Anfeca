import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
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
        navigation.navigate('Historial');
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
            vendido: false
        },
        {
            titulo: 'Tema 2',
            informacion: 'Información 2',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 3", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 3 aquí...
            ],
            resumen: 'Este es el resumen del Tema 2.',
            vendido: false
        },
        {
            titulo: 'Tema 3',
            informacion: 'Información 3',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 3", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 1 aquí...
            ],
            resumen: 'Este es el resumen del Tema 3.',
            vendido: false
        },
        {
            titulo: 'Tema 4',
            informacion: 'Información 4',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 4", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 1 aquí...
            ],
            resumen: 'Este es el resumen del Tema 4.',
            vendido: false
        },
        {
            titulo: 'Tema 5',
            informacion: 'Información 5',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 5", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 1 aquí...
            ],
            resumen: 'Este es el resumen del Tema 5.',
            vendido: false
        },
        {
            titulo: 'Tema 6',
            informacion: 'Información 6',
            preguntas: [
                { pregunta: "Pregunta 1 del Tema 6", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], respuestaCorrecta: "Opción 1" },
                // Más preguntas del Tema 1 aquí...
            ],
            resumen: 'Este es el resumen del Tema 6.',
            vendido: false
        },
        // Otros temas...

    ]);
    const [searchText, setSearchText] = useState('');

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

    // Filtra los temas en función del texto de búsqueda
    const filteredTemas = temas.filter(tema =>
        tema.titulo.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style={styles.barraBuscar}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <Ionicons name="search" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.bienvenidoText}>Bienvenido {userName}</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {filteredTemas.map((tema, index) => (
                    <ComponenteTema
                        key={index}
                        titulo={tema.titulo}
                        informacion={tema.informacion}
                        preguntas={tema.preguntas}
                        resumen={tema.resumen}
                        historial={tema.historial}
                    />
                ))}
            </ScrollView>
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
    scrollViewContent: {
        paddingBottom: 20,
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
