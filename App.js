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
      </Stack.Navigator>
    </NavigationContainer>
  );
}