import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { sharedStyles } from './styles';
import BottomBar from './BottomBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getFirestore, doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import listaTemas from './temas'

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#FFF";

const app = initializeApp(firebaseConfig);

const ComponenteTema = ({ titulo, informacion, preguntas, resumen, historial, locked, onUnlock }) => {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleJugarPress = () => {
        if (locked) {
            onUnlock(titulo);
        } else {
            toggleModal();
        }
    };

    const handleNavigate = (screen, params) => {
        toggleModal();
        setTimeout(() => {
            navigation.navigate(screen, params);
        }, 300);
    };

    return (
        <View style={styles.componenteTema}>
            <TouchableOpacity style={styles.temaContainer} onPress={handleJugarPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.centroText}>
                        {titulo} {locked && <Ionicons name="lock-closed" size={20} color="red" />}
                    </Text>
                    <Text style={styles.izquierdaText}>{resumen}</Text>
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
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Info', { titulo, informacion, preguntas })}>
                                <Text>Jugar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Historial')}>
                                <Text>Historial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Resumen', { titulo, informacion })}>
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
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);
    const [temas, setTemas] = useState(listaTemas);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
        const unsubscribe = onSnapshot(userDoc, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                console.log('Datos del usuario actualizados desde Firestore:', userData);
                setNombreUsuario(userData.username);
                // Actualiza los temas bloqueados desde Firestore si es necesario
                if (userData.temas) {
                    setTemas(userData.temas);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const handleUnlockTema = (titulo) => {
        setTemaSeleccionado(titulo);
    };

    const handleCompraTema = async () => {
        const updatedTemas = temas.map(tema => {
            if (tema.titulo === temaSeleccionado) {
                return { ...tema, locked: false };
            }
            return tema;
        });
        setTemas(updatedTemas);

        const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
        await updateDoc(userDoc, {
            temas: updatedTemas
        });

        setTemaSeleccionado(null);
    };

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
                        locked={tema.locked}
                        onUnlock={handleUnlockTema}
                    />
                ))}
            </ScrollView>

            {temaSeleccionado && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={!!temaSeleccionado}
                    onRequestClose={() => setTemaSeleccionado(null)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitleText}>Comprar {temaSeleccionado}</Text>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={handleCompraTema}>
                                <Text>Comprar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => setTemaSeleccionado(null)}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}

            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between',
    },
    bienvenidoText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    barraBuscar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: greyP,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        marginRight: 8,
    },
    icon: {
        marginRight: 8,
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    componenteTema: {
        backgroundColor: purpleP,
        marginBottom: 16,
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 10,
    },
    temaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    centroText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    izquierdaText: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: backgroundP,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        marginBottom: 20,
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonOpcionContainer: {
        alignItems: 'center',
    },
    buttonOpcion: {
        backgroundColor: purpleP,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: 100,
        alignItems: 'center',
    },
});
