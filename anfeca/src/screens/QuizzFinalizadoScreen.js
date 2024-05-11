import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

const QuizzFinalizadoScreen = () => {
    <View>
        <Text>
            inoi
        </Text>
    </View>
    
};

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        marginTop: "5%",
        alignItems: "center",
        padding: "4%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center"
    },
    counter: {
        fontSize: 20,
        marginTop: 10
    },
    optionButton: {
        backgroundColor: "#CDBFEA",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: "center"
    },
    correctIndicator: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5
    },
    correctText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default Quizz;
