import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const backgroundP = "#E0E6F6";

export default function ChatbotScreen() {
    return (
        <View style={styles.Chatbot}>

            <View style={styles.Group493}>

                <View style={styles.Group876}>
                    <Image
                        style={styles.BotIcon2883144_128023}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/71g67cl5lc2-46%3A66?alt=media&token=a654b161-ff7e-4afa-9840-55cf577c97b1",
                        }}
                    />
                    <View style={styles.Group1046}>
                        <Text style={styles.EscribeAqu}>Escribe aquí</Text>
                    </View>
                    <Image
                        style={styles._73616131}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/71g67cl5lc2-46%3A65?alt=media&token=6ec5d1fe-7ec8-418e-a791-2c407743df54",
                        }}
                    />
                    
                </View>

                <View style={styles.Group035}>
                    <Text style={styles.HolaQuNecesitas}>Hola, ¿Qué necesitas?</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Chatbot: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 390,
        height: 844,
        boxSizing: "border-box",
        backgroundColor: "rgba(224,230,246,1)",
    },
    BotIcon2883144_128022: {
        position: "absolute",
        top: 116,
        left: 37,
        width: 28,
        height: 33,
    },
    Group493: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
    },
    Rectangle17: {
        width: "100%",
        height: 77,
        backgroundColor: "rgba(255,171,197,1)",
    },
    Group876: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "130%",
    },
    BotIcon2883144_128023: {
        width: 51,
        height: "100%",
    },
    Group1046: {
        width: 267,
        height: "100%",
        paddingLeft: 9,
        paddingRight: 160,
        paddingTop: 10,
        paddingBottom: 12,
        borderRadius: 20,
        boxSizing: "border-box",
        backgroundColor: "rgba(200,204,216,1)",
    },
    EscribeAqu: {
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
    _73616131: {
        width: 37,
        height: 34,
    },
    Group466: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 9,
        paddingBottom: 9,
        boxSizing: "border-box",
        backgroundColor: "rgba(255,171,197,1)",
    },
    Group11: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingBottom: 3,
        boxSizing: "border-box",
    },
    Image21: {
        width: 33,
        height: 44,
    },
    Home: {
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
    Group16: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingBottom: 3,
        boxSizing: "border-box",
    },
    BotIcon2883144_128021: {
        width: 51,
        height: 48,
    },
    Organizaciones: {
        color: "rgba(0,0,0,1)",
        fontSize: "14px",
        lineHeight: "14px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
    Group12: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingBottom: 3,
        boxSizing: "border-box",
    },
    BotIcon2883144_1280211: {
        width: "100%",
        height: 48,
    },
    Chat: {
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
    Group14: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingBottom: 3,
        boxSizing: "border-box",
    },
    ProfileIconAvatarIconUserIconPersonIconFreePng1: {
        width: 48,
        height: 48,
    },
    Cuenta: {
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
    Group035: {
        position: "absolute",
        top: 116,
        width: "100%",
        height: 38,
        paddingLeft: 45,
        paddingRight: 26,
        paddingTop: 10,
        paddingBottom: 12,
        borderRadius: 20,
        boxSizing: "border-box",
        backgroundColor: "rgba(200,204,216,1)",
    },
    HolaQuNecesitas: {
        color: "rgba(0,0,0,1)",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
    },
})
