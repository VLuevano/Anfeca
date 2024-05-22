import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, updateDoc, getDoc, arrayUnion } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Quizz = () => {
    const route = useRoute();
    const { preguntas, titulo } = route.params || {};
    const [contador, setContador] = useState(10);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [respuestaCorrectaAnimada] = useState(new Animated.Value(0));
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [respuestasElegidas, setRespuestasElegidas] = useState([]);
    const totalPreguntas = preguntas ? preguntas.length : 0;
    const [pregunta, setPregunta] = useState(preguntas && preguntas.length > 0 ? preguntas[0].pregunta : "");

    const navigation = useNavigation();

    useEffect(() => {
        if (contador === 0 && !mostrarResultados) {
            avanzarPregunta();
        }

        const interval = setInterval(() => {
            setContador((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [contador, mostrarResultados]);

    useEffect(() => {
        setContador(10);
    }, [preguntaActual, mostrarResultados]);

    const avanzarPregunta = () => {
        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual((prevPreguntaActual) => prevPreguntaActual + 1);
            setPregunta(preguntas[preguntaActual + 1].pregunta);
            setRespuestaSeleccionada(null);
            respuestaCorrectaAnimada.setValue(0);
        } else {
            setMostrarResultados(true);
        }
    };

    const handleOpcionSeleccionada = (opcion) => {
        setRespuestaSeleccionada(opcion);
        setRespuestasElegidas([...respuestasElegidas, opcion]);

        if (opcion === preguntas[preguntaActual].respuestaCorrecta) {
            setRespuestasCorrectas((prevRespuestasCorrectas) => prevRespuestasCorrectas + 1);
            Animated.timing(respuestaCorrectaAnimada, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
            setTimeout(avanzarPregunta, 500);
        } else {
            Animated.timing(respuestaCorrectaAnimada, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            }).start();
            setTimeout(avanzarPregunta, 1000);
        }
    };

    const guardarResultados = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const userDocRef = doc(collection(db, 'Historial'), user.uid);

            const fechaActual = new Date().toLocaleString();

            const nuevoResultado = {
                tema: titulo, // Incluimos el tema aquí
                aciertos: respuestasCorrectas,
                fecha: fechaActual,
                totalPreguntas
            };

            try {
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    await updateDoc(userDocRef, {
                        resultados: arrayUnion(nuevoResultado)
                    });
                } else {
                    await setDoc(userDocRef, {
                        resultados: [nuevoResultado]
                    });
                }

                console.log("Resultados guardados correctamente en Historial");
            } catch (error) {
                console.error("Error guardando los resultados en Historial: ", error);
            }
        }
    };

    const handleJugarOtraVez = async () => {
        await guardarResultados();
        setRespuestasCorrectas(0);
        setPreguntaActual(0);
        setRespuestaSeleccionada(null);
        setMostrarResultados(false);
        setRespuestasElegidas([]);
    };

    const handleSalir = async () => {
        await guardarResultados();
        navigation.navigate('MenuPrincipal');
    };

    return (
        <View>
            {!mostrarResultados ? (
                <View>
                    <View style={styles.container}>
                        <Text style={styles.title}>{pregunta}</Text>
                        <Text style={styles.counter}>Tiempo restante: {contador} s</Text>
                    </View>

                    {preguntas[preguntaActual].opciones.map((opcion, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleOpcionSeleccionada(opcion)}
                            style={[
                                styles.optionButton,
                                respuestaSeleccionada === opcion && opcion === preguntas[preguntaActual].respuestaCorrecta && { backgroundColor: "green" },
                                respuestaSeleccionada === opcion && opcion !== preguntas[preguntaActual].respuestaCorrecta && { backgroundColor: "red" }
                            ]}
                            disabled={respuestaSeleccionada !== null}
                        >
                            <Text>{opcion}</Text>
                            {respuestaSeleccionada && (
                                <Text style={{ fontWeight: "bold" }}>
                                    {opcion === preguntas[preguntaActual].respuestaCorrecta ? "(Correcta)" : "(Incorrecta)"}
                                </Text>
                            )}
                        </TouchableOpacity>
                    ))}

                    {respuestaSeleccionada && (
                        <View style={[styles.respuestaSeleccionadaContainer, { backgroundColor: respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta ? "green" : "red" }]}>
                            <Text style={styles.respuestaSeleccionadaText}>Tu respuesta: {respuestaSeleccionada}</Text>
                        </View>
                    )}

                    {respuestaCorrectaAnimada === 1 && (
                        <Animated.View style={[styles.correctIndicator, { backgroundColor: "green" }]}>
                            <Text style={styles.correctText}>La respuesta correcta es: {preguntas[preguntaActual].respuestaCorrecta}</Text>
                        </Animated.View>
                    )}
                </View>
            ) : (
                <View style={styles.resultadosContainer}>
                    <Text style={styles.resultadosTitle}>Resultados del Quizz</Text>
                    <Text style={styles.resultadosText}>Puntuación: {respuestasCorrectas}/{totalPreguntas}</Text>

                    <TouchableOpacity onPress={handleJugarOtraVez}>
                        <Button style={styles.button}>Jugar otra vez</Button>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSalir}>
                        <Button style={styles.button}>Salir</Button>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        marginTop: "5%",
        alignItems: "center",
        padding: "4%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center"
    },
    counter: {
        fontSize: 20,
        marginTop: 10
    },
    optionButton: {
        backgroundColor: "#CDBFEA",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    correctIndicator: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5
    },
    correctText: {
        color: "white",
        fontWeight: "bold"
    },
    resultadosContainer: {
        marginTop: "40%",
        alignItems: "center"
    },
    resultadosTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 20
    },
    resultadosText: {
        fontSize: 18,
        marginBottom: 20
    },
    respuestaSeleccionadaContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5
    },
    respuestaSeleccionadaText: {
        color: "white",
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#CDBFEA",
        borderRadius: 20,
        marginBottom: 20,
        width: 300,
        height: 50,
        alignItems: "center",
        alignContent: "center",
    }
});

export default Quizz;
