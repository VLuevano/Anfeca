import React from "react";
import { View, Text } from "react-native"

const HomeScreen = ({ userData }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: "center" }}>Bienvenido, {userData.name}</Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Correo electrónico: {userData.email}</Text>
            {/* Mostrar otros detalles del usuario aquí */}
        </View>
    );
}

export default HomeScreen;
