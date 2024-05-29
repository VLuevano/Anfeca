import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import PantallaInicio from './src/screens/frmPantallaInicio'; 
import CrearCuenta from './src/screens/frmCrearCuenta'; 
import IniciarSesion from './src/screens/frmIniciarSesion'; 
import CrearCuenta1 from './src/screens/frmCrearCuenta1'; 
import IniciarSesion1 from './src/screens/frmIniciarSesion1'; 
import MenuPrincipal from './src/screens/frmMenuPrincipal'; 
import RecuperarContraseña from './src/screens/frmRecuperarContraseña'; 
import Cuenta from './src/screens/frmCuentaUsuario'; 
import Organizaciones from './src/screens/frmOrganizaciones';
import Chatbot from './src/screens/frmChatbot';
import Info from './src/screens/frmInfoQuizz'
import Historial from './src/screens/frmHistorial'
import Resumen from './src/screens/frmResumen'
import Quizz from './src/screens/frmQuizz'

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