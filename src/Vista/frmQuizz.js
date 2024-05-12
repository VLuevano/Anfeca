import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Quizz = () => {
    const [contador, setContador] = useState(10);
    const [pregunta, setPregunta] = useState("¿Cuál es la capital de Francia?");
    const [preguntas, setPreguntas] = useState([
        { pregunta: "¿Cuál es la capital de Francia?", opciones: ["Londres", "París", "Madrid", "Berlín"], respuestaCorrecta: "París" },
        { pregunta: "¿En qué año comenzó la Primera Guerra Mundial?", opciones: ["1914", "1918", "1939", "1945"], respuestaCorrecta: "1914" },
        { pregunta: "¿Quién escribió la obra 'Don Quijote de la Mancha'?", opciones: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "Leo Tolstoy"], respuestaCorrecta: "Miguel de Cervantes" }
    ]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [respuestaCorrectaAnimada, setRespuestaCorrectaAnimada] = useState(new Animated.Value(0));
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [respuestasElegidas, setRespuestasElegidas] = useState([]);
    const [totalPreguntas, setTotalPreguntas] = useState(preguntas.length);

    const navigation = useNavigation();

    useEffect(() => {
        const interval = setInterval(() => {
            setContador((prevContador) => prevContador - 1);
        }, 1000);

        if (contador === 0) {
            avanzarPregunta();
        }

        return () => clearInterval(interval);
    }, [contador]);

    useEffect(() => {
        // Reiniciar el contador cuando se muestren los resultados
        setContador(10);
    }, [mostrarResultados]);

    const avanzarPregunta = () => {
        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual((prevPreguntaActual) => prevPreguntaActual + 1);
            setPregunta(preguntas[preguntaActual + 1].pregunta);
            setContador(10);
            setRespuestaSeleccionada(null); // Reiniciamos la respuesta seleccionada
            setRespuestaCorrectaAnimada(new Animated.Value(0)); // Reiniciamos la animación de respuesta correcta
        } else {
            // Si ya no hay más preguntas, mostrar la pantalla de resultados
            setMostrarResultados(true);
        }
    };

    const handleOpcionSeleccionada = (opcion) => {
        setRespuestaSeleccionada(opcion);

        // Almacenar la respuesta elegida
        setRespuestasElegidas([...respuestasElegidas, opcion]);

        // Verificar si la respuesta seleccionada es correcta
        if (opcion === preguntas[preguntaActual].respuestaCorrecta) {
            // Incrementar el contador de respuestas correctas
            setRespuestasCorrectas((prevRespuestasCorrectas) => prevRespuestasCorrectas + 1);

            // Aplicar un efecto visual para indicar la respuesta correcta
            Animated.timing(respuestaCorrectaAnimada, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();

            // Avanzar a la siguiente pregunta
            setTimeout(avanzarPregunta, 500); // Avanzar después de 0.5 segundos
        } else {
            // Si la respuesta es incorrecta, mostrar la respuesta correcta después de un tiempo
            setTimeout(() => {
                Animated.timing(respuestaCorrectaAnimada, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true
                }).start();
                avanzarPregunta();
            }, 1000); // Mostrar la respuesta correcta después de 1 segundo
        }
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

                    {/* Mostrar la opción seleccionada */}
                    {respuestaSeleccionada && (
                        <View style={[styles.respuestaSeleccionadaContainer, { backgroundColor: respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta ? "green" : "red" }]}>
                            <Text style={styles.respuestaSeleccionadaText}>Tu respuesta: {respuestaSeleccionada}</Text>
                        </View>
                    )}

                    {/* Efecto visual para la respuesta correcta */}
                    {respuestaCorrectaAnimada === 1 && (
                        <Animated.View style={[styles.correctIndicator, { backgroundColor: "green" }]}>
                            <Text style={styles.correctText}>La respuesta correcta es: {preguntas[preguntaActual].respuestaCorrecta}</Text>
                        </Animated.View>
                    )}
                </View>
            ) : (
                <View style={styles.resultadosContainer}>
                    <Text style={styles.resultadosTitle}>Resultados del Quizz</Text>
                    <Text style={styles.resultadosText}>Puntuacion final</Text>
                    <Text style={styles.resultadosText}>Puntuación: {respuestasCorrectas}/{totalPreguntas}</Text>

                    {/* Botón "Jugar otra vez" */}
                    <TouchableOpacity onPress={() => {
                        // Reiniciar el estado para jugar otra vez
                        setRespuestasCorrectas(0);
                        setPreguntaActual(0);
                        setRespuestaSeleccionada(null);
                        setMostrarResultados(false);
                        setRespuestasElegidas([]);
                    }}>
                        <Button style={styles.button}>Jugar otra vez</Button>
                    </TouchableOpacity>

                    {/* Botón "Salir" */}
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('MenuPrincipal'); // Navega a la pantalla 'Home' cuando se hace clic en el botón "Salir"
                    }}>
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