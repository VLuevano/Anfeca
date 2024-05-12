import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistorialScreen = () => {
    // Suponiendo que tienes un array de juegos jugados con la siguiente estructura
    const historialJuegos = [
        { tema: 'Tema 1', fecha: '10/05/2024', puntos: 80 },
        { tema: 'Tema 2', fecha: '11/05/2024', puntos: 75 },
        { tema: 'Tema 3', fecha: '12/05/2024', puntos: 90 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Text style={styles.encabezadoTexto}>Tema</Text>
                <Text style={styles.encabezadoTexto}>Fecha</Text>
                <Text style={styles.encabezadoTexto}>Pts</Text>
            </View>
            {historialJuegos.map((juego, index) => (
                <View key={index} style={styles.juegoContainer}>
                    <Text style={styles.text}>{juego.tema}</Text>
                    <Text style={styles.text}>{juego.fecha}</Text>
                    <Text style={styles.text}>{juego.puntos}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
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