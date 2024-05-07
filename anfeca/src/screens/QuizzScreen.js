import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

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

    useEffect(() => {
        const interval = setInterval(() => {
            setContador((prevContador) => prevContador - 1);
        }, 1000);

        if (contador === 0) {
            avanzarPregunta();
        }

        return () => clearInterval(interval);
    }, [contador]);

    const avanzarPregunta = () => {
        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual((prevPreguntaActual) => prevPreguntaActual + 1);
            setPregunta(preguntas[preguntaActual + 1].pregunta);
            setContador(10);
            setRespuestaSeleccionada(null); // Reiniciamos la respuesta seleccionada
        } else {
            // Si ya no hay más preguntas, mostrar un mensaje o realizar alguna acción
            console.log("¡Fin del quizz!");
        }
    };

    const handleOpcionSeleccionada = (opcion) => {
        setRespuestaSeleccionada(opcion);

        // Verificar si la respuesta seleccionada es correcta
        if (opcion === preguntas[preguntaActual].respuestaCorrecta) {
            // Aplicar un efecto visual para indicar la respuesta correcta
            Animated.timing(respuestaCorrectaAnimada, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();

            // Avanzar a la siguiente pregunta
            setTimeout(avanzarPregunta, 1500); // Avanzar después de 1.5 segundos
        }
    };

    return (
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
                        opcion === preguntas[preguntaActual].respuestaCorrecta && respuestaSeleccionada === opcion && { backgroundColor: "green" }
                    ]}
                >
                    <Text>{opcion}</Text>
                </TouchableOpacity>
            ))}

            {/* Efecto visual para la respuesta correcta */}
            {respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta && (
                <Animated.View
                    style={[
                        styles.correctIndicator,
                        {
                            opacity: respuestaCorrectaAnimada.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }
                    ]}
                >
                    <Text style={styles.correctText}>¡Correcto!</Text>
                </Animated.View>
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
        alignItems: "center"
    },
    correctIndicator: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5
    },
    correctText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default Quizz;
