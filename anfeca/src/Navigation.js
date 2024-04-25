import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";



// screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import IniciarSesionCorreo from "./screens/IniciarSesionCorreo";
import ChatbotScreen from "./screens/ChatBotScreen";
import CuentaScreen from "./screens/CuentaScreen";

const Tab = createBottomTabNavigator();
const colorHead = "#FFABC5"

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { color: 'black' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
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

            <Tab.Screen name="Organizaciones" component={SettingsScreen}
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

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
