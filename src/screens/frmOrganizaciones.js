import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomBar from './BottomBar';
import { sharedStyles } from './styles';
import { Linking } from 'react-native';

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#FFF";

const data = [
    { titulo: "Asociación Mexicana para la Salud Sexual", informacion: "Atención para resolver problemas relacionados con las disfunciones sexuales, conflictos de orientación sexual, abuso y violencia sexual, entre otros", url: "https://www.amssac.org" },
    { titulo: "IMSS", informacion: "Información...", url: "http://www.imss.gob.mx" },
];

const ComponenteOrganizacion = ({ titulo, informacion, url }) => {
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
                    <TouchableOpacity onPress={() => Linking.openURL(url)}>
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
            <View style={sharedStyles.espacioSuperior}></View>
            <ScrollView>
                <Text style={styles.bienvenidoText}>Organizaciones especializadas</Text>
                <ComponenteOrganizacion titulo={"Asociación Mexicana para la Salud Sexual"} informacion={"La Asociación Mexicana para la Salud Sexual (AMSSAC) es una asociación civil que ofrece una variedad de servicios, incluyendo atención clínica para personas que desean resolver problemas en su sexualidad, como disfunciones sexuales, conflictos con la orientación sexual, problemas relacionados con el abuso y la violencia sexuales, conflictos con la identidad sexual y trastornos parafílicos."} url={"https://www.amssac.org/"} />
                <ComponenteOrganizacion titulo={"Instituto Mexicano del Seguro Social"} informacion={"El Instituto Mexicano del Seguro Social (IMSS) es un organismo descentralizado del gobierno federal mexicano, sectorizado a la Secretaría de Salud. Su misión es brindar servicios de salud y de seguridad social a la población que cuenta con afiliación al instituto."} url={"http://www.imss.gob.mx"} />
            </ScrollView>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between', // Alinea los elementos en el eje principal
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
        marginTop: 60,
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 50,
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
    sharedStyles,
});