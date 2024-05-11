import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';



import MenuPrincipalHome from "./screens/HomeScreen";


// screens
import HomeScreen from "./screens/HomeScreen";
import IniciarSesionCorreo from "./screens/IniciarSesionCorreo";
import ChatbotScreen from "./screens/ChatBotScreen";
import CuentaScreen from "./screens/CuentaScreen";
import OrganizacionScreen from "./screens/OrganizacionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Infoo from "./screens/HomeScreenInformacion";
import Quizz from "./screens/QuizzScreen";




const Stack = createStackNavigator();



const Tab = createBottomTabNavigator();
const colorHead = "#FFABC5"

export const navigationRef = React.createRef(); // Crea una referencia para la navegación


export function navigate(name, params) {
    navigationRef.current?.navigate(name, params); // Función para navegar a una pantalla
}

const HomeStackNavigator = createNativeStackNavigator();



function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="info"  // Agregar la pantalla 'info' aquí
                component={Infoo}  // Componente asociado a la pantalla 'info'
            />

            <Stack.Screen
                name="quizz"  // Agregar la pantalla 'info' aquí
                component={Quizz}  // Componente asociado a la pantalla 'info'
            />
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { color: 'black' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarStyle: { backgroundColor: colorHead },
                    labelStyle: { backgroundColor: colorHead },
                    headerStyle: { backgroundColor: colorHead },

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/icons/Home.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    ),
                }}
            />

            <Tab.Screen name="Organizaciones" component={OrganizacionScreen}
                options={{
                    tabBarStyle: { backgroundColor: colorHead },
                    labelStyle: { backgroundColor: colorHead },
                    headerStyle: { backgroundColor: colorHead },

                    tabBarIcon: ({ color, size }) => (
                        <Icon name="business" size={size} color={color} />
                    ),
                }} />
            <Tab.Screen name="Chat" component={ChatbotScreen}
                options={{
                    tabBarStyle: { backgroundColor: colorHead },
                    labelStyle: { backgroundColor: colorHead },
                    headerStyle: { backgroundColor: colorHead },


                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/icons/ChatBot.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    ),


                }} />
            <Tab.Screen name="Cuenta" component={CuentaScreen}
                options={{
                    tabBarStyle: { backgroundColor: colorHead },
                    labelStyle: { backgroundColor: colorHead },
                    headerStyle: { backgroundColor: colorHead },

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/icons/profile.png')}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    ),


                }} />




        </Tab.Navigator>




    );

}



export default function AppNavigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <MyTabs />

            <Stack.Screen name="info" component={Infoo} />

        </NavigationContainer>
    );
}




