import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    // Inicializar Firebase Auth
    const auth = getAuth();

    useEffect(() => {
        // Comprobar el estado de la autenticación cuando el componente se monta
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Desuscribirse del cambio de estado de autenticación al desmontar el componente
        return () => unsubscribe();
    }, []);

    const handleLogoutAndNavigate = async () => {
        try {
            await signOut(auth);
            setUser(null); // Actualiza el estado del usuario a null
            // Redirige a la pantalla de inicio de sesión
            navigation.navigate('IniciarSesion');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {user && (
                <View>
                    <Text style={{ fontSize: 24, marginBottom: 10 }}>¡Bienvenido, {user.displayName || 'Usuario'}!</Text>
                    <Button title="Cerrar sesión" onPress={handleLogoutAndNavigate} />
                </View>
            )}
        </View>
    );
}

export default HomeScreen;