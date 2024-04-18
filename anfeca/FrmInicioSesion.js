import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function IniciarSesiN() {
  return (
    <View style={styles.IniciarSesiN}>
      <View style={styles.Group425}>
        <View style={styles.Rectangle7} />
        <Text style={styles.IniciaSesiN}>Inicia sesión</Text>
        <View style={styles.BotNLargo}>
          <Text style={styles.IniciaConCorreoElect}>
            Inicia con correo electrónico
          </Text>
        </View>
        <View style={styles.BotNLargo1}>
          <Text style={styles.IniciaConFacebook}>Inicia con Facebook</Text>
        </View>
        <View style={styles.BotNLargo2}>
          <Text style={styles.IniciaConGoogle}>Inicia con Google</Text>
        </View>
      </View>
      <Image
        style={styles.Image2}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qwnlzdsdp-34%3A36?alt=media&token=8f72061a-5c23-454c-82f9-26e9abed5ee8",
        }}
      />
      <Image
        style={styles.Image3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qwnlzdsdp-34%3A45?alt=media&token=049e15c4-7838-42fb-920e-42d283cc7ec9",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  IniciarSesiN: {
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
  Group425: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 421,
    boxSizing: "border-box",
  },
  Rectangle7: {
    width: "100%",
    height: 77,
    backgroundColor: "rgba(255,171,197,1)",
  },
  IniciaSesiN: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "40px",
    lineHeight: "40px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "800",
  },
  BotNLargo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 33,
    paddingRight: 26,
    paddingTop: 23,
    paddingBottom: 26,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,108,1)",
  },
  IniciaConCorreoElect: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(30,30,30,1)",
    fontSize: "19px",
    lineHeight: "19px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "right",
  },
  BotNLargo1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 323,
    height: 68,
    paddingLeft: 26,
    paddingRight: 26,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,108,1)",
  },
  IniciaConFacebook: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(30,30,30,1)",
    fontSize: "19px",
    lineHeight: "19px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "right",
  },
  BotNLargo2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 323,
    height: 68,
    paddingLeft: 26,
    paddingRight: 26,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,108,1)",
  },
  IniciaConGoogle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(30,30,30,1)",
    fontSize: "19px",
    lineHeight: "19px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "right",
  },
  Image2: {
    position: "absolute",
    top: 368,
    left: 69,
    width: 38,
    height: 38,
  },
  Image3: {
    position: "absolute",
    top: 284,
    left: 69,
    width: 38,
    height: 38,
  },
})
