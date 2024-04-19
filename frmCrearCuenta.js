import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function PantallaCrearCuenta() {
  return (
    <View style={styles.container}>
      <View style={styles.espacioArriba}></View>
      <Text style={styles.titulo}>Crear cuenta</Text>
      <TouchableOpacity style={styles.botonCorreo}>
        <Text style={styles.textoBoton}>Registrarse con correo electrónico</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonFacebook}>
        <Text style={styles.textoBoton}>Registrarse con Facebook</Text>
        <Image 
          style={styles.logo}
          source={require('./Recursos/Imágenes/LogoFacebook.png')} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonGoogle}>
        <Text style={styles.textoBoton}>Registrarse con Google</Text>
        <Image 
          style={styles.logo}
          source={require('./Recursos/Imágenes/LogoGoogle.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E6F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  espacioArriba: {
    height: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botonCorreo: {
    backgroundColor: '#F8DD6C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  botonFacebook: {
    backgroundColor: '#F8DD6C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  botonGoogle: {
    backgroundColor: '#F8DD6C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
});