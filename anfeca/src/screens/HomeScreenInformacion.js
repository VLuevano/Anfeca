import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();



const Infoo = () => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
};
/*
const HomeInformacion = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="informacion" component={Info} />
                    <Stack.Screen name="settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
*/
export default Infoo;
