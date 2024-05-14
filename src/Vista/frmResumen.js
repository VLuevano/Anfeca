import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from './styles';

const ResumenScreen = () => {
    const navigation = useNavigation();

    const handleQuizzPress = () => {
        navigation.navigate('quizz');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Resumen</Text>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={styles.title}>Métodos anticonceptivos</Text>
            <Text style={styles.contenidoTxt}>
                Los métodos anticonceptivos son diferentes maneras de prevenir un embarazo. Sirven para ayudar a las personas a controlar cuándo quieren tener hijos y cuándo no. Estos métodos pueden ser usados por hombres o mujeres, y algunos son más efectivos que otros.

                Se clasifican en varios tipos:

                Anticonceptivos de barrera: Estos métodos evitan que los espermatozoides lleguen al óvulo. Ejemplos incluyen condones (masculinos y femeninos), diafragma y capuchón cervical.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    contenidoTxt: {
        fontSize: 20,
        paddingVertical: 10,
    },
});

export default ResumenScreen;
