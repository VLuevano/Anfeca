import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import IniciarSesionCorreo from "./screens/IniciarSesionCorreo";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={IniciarSesionCorreo} />
            <Tab.Screen name="Organizaciones" component={SettingsScreen} />
            <Tab.Screen name="Chat" component={SettingsScreen} />
            <Tab.Screen name="Cuenta" component={SettingsScreen} />

        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}