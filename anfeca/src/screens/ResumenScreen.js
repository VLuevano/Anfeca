import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

const ResumenScreen = () => {
    const navigation = useNavigation(); // Mover la declaración de navigation aquí

    const handleQuizzPress = () => {
        navigation.navigate('quizz'); // Utilizar navigation dentro de la función Infoo
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Métodos anticonceptivos</Text>
            </View>

            <View>
                <Text style={styles.contenidoTxt}>Los métodos anticonceptivos son diferentes maneras de prevenir un embarazo. Sirven para ayudar a las personas a controlar cuándo quieren tener hijos y cuándo no. Estos métodos pueden ser usados por hombres o mujeres, y algunos son más efectivos que otros.

Se clasifican en varios tipos:

Anticonceptivos de barrera: Estos métodos evitan que los espermatozoides lleguen al óvulo. Ejemplos incluyen condones (masculinos y femeninos), diafragma y capuchón cervical.</Text>
            </View>


        </View>
    );
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
        alignItems: "center",
        fontSize: 30,
        textAlign: "center",
    },
    contenidoTxt: {
        fontSize: 20,
        padding: "10%",
    },
    botton: {
        backgroundColor: "#CDBFEA",
        borderRadius: 20,
        marginBottom: 20,
        width: 300,
        height: 50,
        alignItems: "center",
        alignContent: "center",
    },
});

export default ResumenScreen;
