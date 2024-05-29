import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { sharedStyles } from './styles';

const ResumenScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { titulo, informacion } = route.params;

    return (
        <View>
            <View style={sharedStyles.espacioSuperior}></View>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Image
                    source={require('../../resources/images/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={sharedStyles.titulo}>Resumen</Text>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.contenidoTxt}>{informacion}</Text>
            </ScrollView>
        </View>
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
        marginHorizontal: 10,
    },
});

export default ResumenScreen;
