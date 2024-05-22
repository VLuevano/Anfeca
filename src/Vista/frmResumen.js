import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { sharedStyles } from './styles';

const ResumenScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { titulo, resumen } = route.params;

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
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.contenidoTxt}>{resumen}</Text>
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
