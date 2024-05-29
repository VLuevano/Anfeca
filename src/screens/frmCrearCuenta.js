import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from './styles';

export default function PantallaCrearCuenta() {

  const navigation = useNavigation();

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.espacioSuperior}></View>
      <Text style={sharedStyles.titulo}>Registrarse</Text>
      <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('Inicio')}>
        <Image
          source={require('../../resources/images/flechaRetroceder.png')}
          style={sharedStyles.iconoVolver}
        />
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton} onPress={() => navigation.navigate('CrearCuenta1')}>
        <Text style={sharedStyles.textoBoton}>Registrarse con correo electrónico</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton}>
        <Image
          style={sharedStyles.logo}
          source={require('../../resources/images/LogoFacebook.png')}
        />
        <Text style={sharedStyles.textoBoton}>Registrarse con Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton}>
        <Image
          style={sharedStyles.logo}
          source={require('../../resources/images/LogoGoogle.png')}
        />
        <Text style={sharedStyles.textoBoton}>Registrarse con Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sharedStyles,
});