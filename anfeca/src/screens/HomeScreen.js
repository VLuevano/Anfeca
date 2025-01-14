import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { useNavigation } from "@react-navigation/native";

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#E0E6F6";

const ComponenteTema = ({ titulo, informacion, busqueda }) => {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const navigation = useNavigation();

  const handleJugarPress = () => {
    toggleModal();
    navigation.navigate('info');
  };

  const handleHistorialPress = () => {
    toggleModal();
    navigation.navigate('historial');
  };

  const handleResumenPress = () => {
    toggleModal();
    navigation.navigate("resumen")
  };

  return (
    <View style={styles.componenteTema}>
      
      <TouchableOpacity style={styles.temaContainer} onPress={toggleModal}>
        <View style={styles.textContainer}>
          <Text style={styles.centroText}>{titulo}</Text>
          <Text style={styles.izquierdaText}>{informacion}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalTitleText}>{titulo}</Text>
            </View>
            <View style={styles.buttonOpcionContainer}>
              <TouchableOpacity style={styles.buttonOpcion} onPress={handleJugarPress}>
                <Text style={{ marginTop: 5 }}>Jugar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOpcion} onPress={handleHistorialPress}>
                <Text style={{ marginTop: 5 }}>Historial</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOpcion} onPress={handleResumenPress}>
                <Text style={{ marginTop: 5 }}>Resumen</Text>
              </TouchableOpacity>
              <View style={{ backgroundColor: yellowP, borderRadius: 20, marginTop: "40%" }}>
                <TouchableOpacity>
                  <Button title="Cerrar" onPress={toggleModal} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function MenuPrincipalHome() {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.barraBuscar}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={busqueda}
          onChangeText={handleBusqueda}
        />
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
      </View>
      <Text style={styles.bienvenidoText}>Bienvenido Christian</Text>
      <ComponenteTema titulo={"Metodo1"} informacion={"Enfermedades...."} />
      <ComponenteTema titulo={"Metodo2"} informacion={"Enfermedades...."} />
      <ComponenteTema titulo={"Metodo3"} informacion={"Enfermedades...."} />
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: backgroundP,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "75%",
    height: "50%",
  },
  buttonOpcion: {
    backgroundColor: purpleP,
    borderRadius: 50,
    alignItems: "center",
    width: 250,
    height: 30,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    padding: 30,
    alignItems: "center",
  },
  modalTitleText: {
    marginBottom: "10%",
    fontSize: 20,
  }
});
