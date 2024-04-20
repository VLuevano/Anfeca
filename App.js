import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import PantallaInicio from './frmPantallaInicio'; 
import CrearCuenta from './frmCrearCuenta'; 
import IniciarSesion from './frmIniciarSesion'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}