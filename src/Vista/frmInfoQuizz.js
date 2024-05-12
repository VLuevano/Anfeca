import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

const Infoo = () => {
    const navigation = useNavigation(); // Mover la declaración de navigation aquí

    const handleQuizzPress = () => {
        navigation.navigate('Quizz'); // Utilizar navigation dentro de la función Infoo
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Métodos anticonceptivos</Text>
            </View>

            <View>
                <Text style={styles.contenidoTxt}>Los métodos anticonceptivos son diferentes maneras de prevenir un embarazo. Sirven para ayudar a las personas a controlar cuándo quieren tener hijos y cuándo no. Estos métodos pueden ser usados por hombres o mujeres, y algunos son más efectivos que otros.</Text>
            </View>

            <View style={{alignItems: "center"}} >
                <TouchableOpacity onPress={handleQuizzPress} style={styles.botton}>
                    <Text style={{marginTop: 10}} >Siguiente</Text>
                </TouchableOpacity>
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

export default Infoo;