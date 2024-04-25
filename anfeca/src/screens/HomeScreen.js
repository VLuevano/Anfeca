import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa Ionicons desde tu biblioteca de iconos

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#E0E6F6";

const ComponenteTema = ({ titulo, informacion }) => {
  return (
    <View style={styles.componenteTema}>
    <TouchableOpacity style={styles.temaContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.centroText}>{titulo}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.izquierdaText}>{informacion} </Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

export default function MenuPrincipalHome() {
  return (
    <View style={styles.container}>
      <View style={styles.barraBuscar}>
        <TextInput 
          style={styles.input}
          placeholder="Buscar..."
        />
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
      </View>
      <Text style={styles.bienvenidoText}>Bienvenido Christian</Text>
      <ComponenteTema titulo={"Metodos"} informacion={"Enfermedades...."}/>

      <ComponenteTema titulo={"Metodos2"} informacion={"Enfermedades...."}/>

      <ComponenteTema titulo={"Metodos3"} informacion={"Enfermedades...."}/>



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
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    width: "100%",
  },
  izquierdaText: {
    textAlign: "left",
  },
  centroText: {
    textAlign: "center",
  },
  bienvenidoText: {
    textAlign: "center",
    marginTop: "5%"
  },
});
