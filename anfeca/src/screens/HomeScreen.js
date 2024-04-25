import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function MenuPrincipalHome() {
  return (
    <View style={styles.MenuPrincipalHome}>
      <View style={styles.Group968}>
        <View style={styles.Rectangle17} />
        <View style={styles.Group570}>
          <View style={styles.Group251}>
            <Text style={styles.BSqueda}>Búsqueda</Text>
            <View style={styles.Line1} />
          </View>
          <View style={styles.Ellipse2} />
        </View>
        <Text style={styles.BienvenidoCabezaDeMa}>
          Bienvenido Cabeza de mazapán
        </Text>
        <View style={styles.Group1}>
          <View style={styles.Group112}>
            <Text style={styles.MTodosAnticonceptivo}>
              Métodos anticonceptivos
            </Text>
            <Image
              style={styles.Rectangle24}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-52%3A117?alt=media&token=cc5220df-8bff-4882-84d7-5224a938588e",
              }}
            />
          </View>
        </View>
        <View style={styles.Group2}>
          <Text style={styles.EtsEIts}>ETS e ITS</Text>
          <Text style={styles.LasEnfermedadesDeTra}>
            Las Enfermedades de Transmisión Sexual (ETS) son infecciones que...
          </Text>
        </View>
        <View style={styles.Group15}>
          <View style={styles.Group943}>
            <Text style={styles.Embarazos}>Embarazos</Text>
            <Image
              style={styles.Rectangle241}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-184%3A135?alt=media&token=51d1ab3a-fa27-41a9-8354-dbd2f704ef3a",
              }}
            />
          </View>
        </View>
        <View style={styles.Group793}>
          <View style={styles.Group11}>
            <Image
              style={styles.Image21}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-52%3A103?alt=media&token=8d1ef650-b22e-4636-9450-57c5532f24c6",
              }}
            />
            <Text style={styles.Home}>Home</Text>
          </View>
          <View style={styles.Group16}>
            <Image
              style={styles.BotIcon2883144_128021}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-225%3A143?alt=media&token=08d3ad5d-f534-4e3c-80d7-792ee686cade",
              }}
            />
            <Text style={styles.Organizaciones}>Organizaciones</Text>
          </View>
          <View style={styles.Group12}>
            <Image
              style={styles.BotIcon2883144_1280211}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-52%3A97?alt=media&token=595184f9-23ae-4757-b31a-98e9ce7db4a7",
              }}
            />
            <Text style={styles.Chat}>Chat</Text>
          </View>
          <View style={styles.Group14}>
            <Image
              style={styles.ProfileIconAvatarIconUserIconPersonIconFreePng1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qc8kvr8ycyg-52%3A100?alt=media&token=198ca39e-e5c7-4fed-a5b4-f0e5e764d998",
              }}
            />
            <Text style={styles.Cuenta}>Cuenta</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MenuPrincipalHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 390,
    height: 844,
    boxSizing: "border-box",
    backgroundColor: "rgba(224,230,246,1)",
  },
  Group968: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Rectangle17: {
    width: "100%",
    height: 77,
    backgroundColor: "rgba(255,171,197,1)",
  },
  Group570: {
    position: "relative",
    width: 349,
    height: 35,
    borderWidth: 2,
    borderColor: "rgba(77,89,165,1)",
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group251: {
    position: "absolute",
    top: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: 315,
    height: 20,
    boxSizing: "border-box",
  },
  BSqueda: {
    color: "rgba(0,0,0,0.35)",
    fontSize: "18px",
    lineHeight: "18px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Line1: {
    width: 13.45,
    height: 3,
    borderWidth: 3,
    borderColor: "rgba(77,89,165,1)",
    transform: "rotate(-41.99deg);",
  },
  Ellipse2: {
    position: "absolute",
    top: 7,
    left: 310,
    width: 15,
    height: 15,
    borderWidth: 3,
    borderColor: "rgba(77,89,165,1)",
    borderRadius: 7.5,
    boxSizing: "border-box",
  },
  BienvenidoCabezaDeMa: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,0.8)",
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Group1: {
    width: "100%",
    height: 160,
    paddingLeft: 3,
    paddingRight: 18,
    boxSizing: "border-box",
  },
  Group112: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingLeft: 38,
    paddingRight: 23,
    paddingTop: 10,
    paddingBottom: 6,
    borderWidth: 3,
    borderColor: "rgba(77,89,165,1)",
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(205,191,234,1)",
  },
  MTodosAnticonceptivo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "20px",
    lineHeight: "20px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Rectangle24: {
    width: 189,
    height: 99.88,
  },
  Group2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingLeft: 38,
    paddingRight: 41,
    paddingTop: 16,
    paddingBottom: 53,
    borderWidth: 3,
    borderColor: "rgba(77,89,165,1)",
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(205,191,234,1)",
  },
  EtsEIts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  LasEnfermedadesDeTra: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "16px",
    lineHeight: "16px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Group15: {
    width: "100%",
    height: 160,
    paddingLeft: 3,
    paddingRight: 18,
    boxSizing: "border-box",
  },
  Group943: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingLeft: 64,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 6,
    borderWidth: 3,
    borderColor: "rgba(77,89,165,1)",
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(205,191,234,1)",
  },
  Embarazos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "20px",
    lineHeight: "20px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Rectangle241: {
    width: 189,
    height: 99.88,
  },
  Group793: {
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
})
