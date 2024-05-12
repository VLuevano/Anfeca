import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import PantallaInicio from './src/Vista/frmPantallaInicio'; 
import CrearCuenta from './src/Vista/frmCrearCuenta'; 
import IniciarSesion from './src/Vista/frmIniciarSesion'; 
import CrearCuenta1 from './src/Vista/frmCrearCuenta1'; 
import IniciarSesion1 from './src/Vista/frmIniciarSesion1'; 
import MenuPrincipal from './src/Vista/frmMenuPrincipal'; 
import RecuperarContraseña from './src/Vista/frmRecuperarContraseña'; 
import Cuenta from './src/Vista/frmCuentaUsuario'; 
import Organizaciones from './src/Vista/frmOrganizaciones';
import Chatbot from './src/Vista/frmChatbot';
import Info from './src/Vista/frmInfoQuizz'
import Historial from './src/Vista/frmHistorial'
import Resumen from './src/Vista/frmResumen'
import Quizz from './src/Vista/frmQuizz'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="CrearCuenta1" component={CrearCuenta1}/>
        <Stack.Screen name="IniciarSesion1" component={IniciarSesion1}/>
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal}/>
        <Stack.Screen name="RecuperarContraseña" component={RecuperarContraseña}/>
        <Stack.Screen name="Cuenta" component={Cuenta}/>
        <Stack.Screen name="Organizaciones" component={Organizaciones}/>
        <Stack.Screen name="Chatbot" component={Chatbot}/>
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="Historial" component={Historial}/>
        <Stack.Screen name="Resumen" component={Resumen}/>
        <Stack.Screen name="Quizz" component={Quizz}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}