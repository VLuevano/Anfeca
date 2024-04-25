import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from './styles';

export default function PantallaIniciarSesion() {

  const navigation = useNavigation();

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.espacioSuperior}></View>
      <Text style={sharedStyles.titulo}>Iniciar sesión</Text>
      <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('Inicio')}>
        <Image
          source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
          style={sharedStyles.iconoVolver}
        />
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton} onPress={() => navigation.navigate('IniciarSesion1')}>
        <Text style={sharedStyles.textoBoton}>Iniciar sesión con correo electrónico</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton}>
        <Image
          style={sharedStyles.logo}
          source={require('../../Recursos/Imágenes/LogoFacebook.png')}
        />
        <Text style={sharedStyles.textoBoton}>Iniciar sesión con Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.boton}>
        <Image
          style={sharedStyles.logo}
          source={require('../../Recursos/Imágenes/LogoGoogle.png')}
        />
        <Text style={sharedStyles.textoBoton}>Iniciar sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sharedStyles,
});