import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function PantallaInicio() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./Recursos/Imágenes/FondoInicio.jpg')}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('./Recursos/Imágenes/VITA3.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CrearCuenta')} // Cambiar a nombre registrado de la pantalla
        >
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CrearCuenta')} // Cambiar a nombre registrado de la pantalla
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F8DD6C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});