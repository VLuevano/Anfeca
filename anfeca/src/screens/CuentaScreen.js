import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C"
const backgroundP = "#E0E6F6"

export default function CuentaScreen() {
    return (
        <View style={styles.container}>
            <View style= {styles.perfil}>
                <Text style={{paddingBottom: 15, fontSize: 24, fontWeight: "bold"}}>Perfil</Text>
                <Image
                    source={require('/Users/christianjairrodriguezhernadez/Desktop/AppEducacion/anfeca/assets/icons/FotoPerfil.png')}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundP,
        padding: 20,
    },
    items: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: greyP,
        height: 32,
        borderRadius: 20,
    },
    label: {
        width: "30%",
        marginRight: "5%",
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: yellowP,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
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
        paddingBottom: "10%",

    },



});
