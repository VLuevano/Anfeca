import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

const Infoo = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { titulo, informacion, preguntas } = route.params;

    const handleContinuarPress = () => {
        navigation.navigate('Quizz', { preguntas: preguntas, titulo: titulo });
        console.log("Valor de preguntas info:", preguntas);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{titulo}</Text>
            </View>

            <View>
                <Text style={styles.contenidoTxt}>{informacion}</Text>
            </View>

            <View style={{ alignItems: "center" }} >
                <TouchableOpacity onPress={handleContinuarPress} style={styles.botton}>
                    <Text style={{ marginTop: 10 }} >Siguiente</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 20,
    },
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
