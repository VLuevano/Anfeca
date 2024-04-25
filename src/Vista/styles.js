import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E6F6',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    espacioSuperior: {
        height: 60,
        backgroundColor: '#FFABC5',
        width: '200%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginTop: 70,
        marginBottom: 30,
    },
    botonVolver: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 2,
    },
    iconoVolver: {
        width: 40,
        height: 20,
        marginLeft: 10,
    },
    boton: {
        backgroundColor: '#F8DD6C',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 10,
    },
    textoBoton: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    textos: {
        fontSize: 15,
        marginBottom: 10,
    },
    entradaTexto: {
        height: 50,
        width: '80%',
        backgroundColor: '#C8CCD8', // Fondo gris
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10, // Bordes redondeados
    },
});