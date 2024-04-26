import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import BottomBar from './BottomBar';
import { sharedStyles } from './styles';

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C"
const backgroundP = "#E0E6F6"

export default function CuentaScreen() {

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style= {styles.perfil}>
                <Text style={{paddingBottom: 10, fontSize: 24, fontWeight: "bold"}}>Perfil</Text>
                <Image
                    source={require('../../Recursos/Imágenes/FotoPerfil.png')}
                    style={styles.fotoPerfil} 
                />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Nombre:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Apellidos:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Correo:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Sexo:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={styles.items}>
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar Cambios</Text>
            </TouchableOpacity>

            <BottomBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between', // Alinea los elementos en el eje principal
    },
    items: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: greyP,
        height: 24,
        borderRadius: 20,
    },
    label: {
        width: "30%",
        fontSize: 12,
    },
    confirmButton: {
        backgroundColor: yellowP,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    confirmButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "bold",
    },
    fotoPerfil: {
        width: 100,
        height: 100,
    },
    perfil: {
        alignContent: "center",
        alignItems: "center",
        marginTop : 25,
    },
    sharedStyles,
});