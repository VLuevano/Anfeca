import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { sharedStyles } from './styles';
import BottomBar from './BottomBar'; // Importa el componente BottomBar

const MenuPrincipal = () => {
    const [username, setUsername] = useState('Usuario');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Lógica para buscar
        console.log('Buscar:', searchQuery);
    };

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <Text style={sharedStyles.titulo}>Bienvenido, {username}</Text>
            {/* Espacio en medio */}
            <View style={styles.space} />
            {/* Agrega el componente BottomBar */}
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between', // Alinea los elementos en el eje principal
    },
    space: {
        flex: 1, // Ocupa el espacio disponible
    },
});

export default MenuPrincipal;