import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Text style={styles.optionText}>Menú</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Organizaciones')}>
                <Text style={styles.optionText}>Organizaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Chatbot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Cuenta')}>
                <Text style={styles.optionText}>Cuenta</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFABC5',
        height: 50,
    },
    option: {
        backgroundColor: '#FFABC5',
        paddingVertical: 15,
        borderRadius: 10,
    },
    optionText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default BottomBar;