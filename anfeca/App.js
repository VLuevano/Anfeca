import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, handlePress } from "react-native";

export default function FrmIniciarSesionCorreo() {
  const handleForgotPassword = () => {
    console.log("¿Olvidaste tu contraseña? clickeado");
  };

  const handleShowPassword = () => {
    console.log("Ícono del ojo clickeado");
  };

  return (
    <View style={styles.IniciarSesiNCorreo}>
      <View style={styles.Group947}>
        <View style={styles.Encabezado} />
        <Text style={styles.Titulos}>Inicia sesión</Text>
        
        <View style={styles.Formulario}>
          <Text style={styles.Text}>Ingresa tu correo electrónico</Text>
          <View>
            <TextInput style={styles.TextInput} placeholder="tucorreo@ejemplo.com" />
          </View>
        </View>
        
        <View style={styles.Formulario}>
          <Text style={styles.Text}>Ingresa tu contraseña</Text>
          <View style={styles.PasswordInput}>
            <TextInput style={styles.PasswordTextInput} placeholder="Contraseña" secureTextEntry={true} />
            <TouchableOpacity onPress={handleShowPassword}>
              <Image
                style={styles.IconOjo}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/20oz2lhhgau-34%3A77?alt=media&token=149b1c6b-0c13-44c5-9915-3b5f7c0d9d13",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.OlvidasteTuContraseña}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        
        <View style={styles.Group6}>
          <View style={styles.Boton}>
            <TouchableOpacity style={styles.Button} onPress={handlePress}>
              <Text style={styles.TxtButton}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  IniciarSesiNCorreo: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 390,
    height: 844,
    backgroundColor: "rgba(224,230,246,1)",
  },
  Button: {
    backgroundColor: "#F8DD6C",
    height: 58,
    width: 256,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },
  IconOjo: {
    width: 46,
    height: 29,
    left: -10,
  },
  Group947: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 657,
  },
  Encabezado: {
    width: "100%",
    height: 77,
    backgroundColor: "rgba(255,171,197,1)",
  },
  Titulos: {
    color: "rgba(0,0,0,0.8)",
    fontSize: 40,
    fontWeight: "800",
    marginTop: 20,
  },
  Formulario: {
    width: "100%",
  },
  Text: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "400",
    margin: 20
  },
  TextInput: {
    width: 323,
    height: 68,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: "rgba(200,204,216,1)",
    paddingLeft: 20,
  },
  PasswordInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 323,
    height: 68,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: "rgba(200,204,216,1)",
    paddingLeft: 20,
  },
  PasswordTextInput: {
    flex: 1,
  },
  OlvidasteTuContraseña: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
    textDecorationLine: "underline",
  },
  Group6: {
    width: "100%",
    height: 58,
  },
  Boton: {
    width: "100%",
    height: "100%",
    paddingLeft: 51,
    paddingRight: 51,
    paddingTop: 10,
    paddingBottom: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtButton: {
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});

// Segunda función IniciarSesiN
/*
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
*/

/*
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
});
*/