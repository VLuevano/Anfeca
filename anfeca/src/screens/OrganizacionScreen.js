import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from 'react-native';


const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#E0E6F6";

const ComponenteOrganizacion = ({ titulo, informacion }) => {
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const toggleInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };

    return (
        <View style={styles.componenteTema}>
            <TouchableOpacity style={styles.temaContainer} onPress={toggleInfo}>
                <View style={styles.textContainer}>
                    <Text style={styles.centroText}>{titulo}</Text>
                </View>
                <TouchableOpacity onPress={toggleInfo}>
                    <Ionicons name={mostrarInfo ? "arrow-up-circle" : "arrow-down-circle"} size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </TouchableOpacity>
            {mostrarInfo && (
                <View style={styles.informacionContainer}>
                    <Text style={styles.informacionText}>{informacion}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.amssac.org')}>
    <Text style={{ textAlign: "center", marginTop: 10, color: purpleContornoP, fontWeight: 'bold', fontSize: 17 }}>Más información</Text>
</TouchableOpacity>

                </View>
            )}
        </View>
    );
};

export default function OrganizacionScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.barraBuscar}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                />
                <Ionicons name="search" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.bienvenidoText}>Organizacones especializadas</Text>
            <ComponenteOrganizacion titulo={"Asociación Mexicana para la Salud Sexual"} informacion={"Atención para resolver problemas relacionados con las disfunciones sexuales, conflictos de orientación sexual, abuso y violencia sexual, entre otros"} />
            <ComponenteOrganizacion titulo={"IMSS"} informacion={"Informacaión..."} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%",
    },
    barraBuscar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: backgroundP,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        width: "85%",
        height: "5%",
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    icon: {
        marginLeft: 10,
    },
    componenteTema: {
        backgroundColor: purpleP,
        borderRadius: 20,
        margin: 10,
    },
    temaContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Alinear los elementos a los lados
        padding: 10,
    },
    textContainer: {
        flex: 1,
    },
    centroText: {
        textAlign: "center",
    },
    bienvenidoText: {
        textAlign: "center",
        marginTop: "5%",
    },
    informacionContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        marginTop: 10,
    },
    informacionText: {
        textAlign: "center",
    },
});
