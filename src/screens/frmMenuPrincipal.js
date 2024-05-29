import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { sharedStyles } from './styles';
import BottomBar from './BottomBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const greyP = "#C8CCD8";
const pinkP = "#FFABC5";
const yellowP = "#F8DD6C";
const purpleP = "#CDBFEA";
const purpleContornoP = "#4D59A5";
const backgroundP = "#FFF";

const app = initializeApp(firebaseConfig);

const ComponenteTema = ({ titulo, informacion, preguntas, resumen, historial, locked, onUnlock }) => {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleJugarPress = () => {
        if (locked) {
            onUnlock(titulo);
        } else {
            toggleModal();
        }
    };

    const handleNavigate = (screen, params) => {
        toggleModal();
        setTimeout(() => {
            navigation.navigate(screen, params);
        }, 300);
    };

    return (
        <View style={styles.componenteTema}>
            <TouchableOpacity style={styles.temaContainer} onPress={handleJugarPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.centroText}>
                        {titulo} {locked && <Ionicons name="lock-closed" size={20} color="red" />}
                    </Text>
                    <Text style={styles.izquierdaText}>{resumen}</Text>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalTitle}>
                            <Text style={styles.modalTitleText}>{titulo}</Text>
                        </View>
                        <View style={styles.buttonOpcionContainer}>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Info', { titulo, informacion, preguntas })}>
                                <Text>Jugar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Historial')}>
                                <Text>Historial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => handleNavigate('Resumen', { titulo, informacion })}>
                                <Text>Resumen</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: yellowP, borderRadius: 10, marginBottom: 10, padding: 1, width: 100, alignItems: 'center' }}
                                onPress={() => setShowModal(false)}
                            >
                                <Text>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default function MenuPrincipalHome() {
    const db = getFirestore(app);
    const [userName, setNombreUsuario] = useState('');
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);
    const [temas, setTemas] = useState([
        {
            titulo: 'Disfruta tu sexualidad de modo responsable y con menos riesgos',
            informacion: '¿Sabías que …?\n1 de cada 2 adolescentes de 12 a 19 años que inicia su vida sexual se embaraza\n3 de cada 10 adolescentes no utilizaron ningún método anticonceptivo en su primera relación sexual\nSi consumes alcohol u otras drogas aumentas los riesgos\nLa ley protege tus derechos sexuales y reproductivos\nDecide si quieres o no tener sexo\nValora tu cuerpo y haz que lo respeten\nUsa condón y otros anticonceptivos\nEvita compartir tus fotos o videos de tipo sexual',
            preguntas: [
                {
                    pregunta: "¿Qué porcentaje de adolescentes de 12 a 19 años que inician su vida sexual se embaraza?",
                    opciones: ["10%", "25%", "50%", "75%"],
                    respuestaCorrecta: "50%"
                },
                {
                    pregunta: "¿Cuántos de cada 10 adolescentes no utilizaron ningún método anticonceptivo en su primera relación sexual?",
                    opciones: ["1 de cada 10", "3 de cada 10", "5 de cada 10", "7 de cada 10"],
                    respuestaCorrecta: "3 de cada 10"
                },
                {
                    pregunta: "¿El consumo de alcohol y otras drogas puede aumentar los riesgos en tu vida sexual?",
                    opciones: ["No, no tiene ningún efecto", "Sí, puede aumentar los riesgos", "Solo el alcohol aumenta los riesgos", "Solo las drogas aumentan los riesgos"],
                    respuestaCorrecta: "Sí, puede aumentar los riesgos"
                },
                {
                    pregunta: "¿La ley protege tus derechos sexuales y reproductivos?",
                    opciones: ["No, la ley no protege estos derechos", "Sí, la ley protege estos derechos", "Solo en algunos países", "Depende de la edad"],
                    respuestaCorrecta: "Sí, la ley protege estos derechos"
                },
                // Más preguntas aquí...
            ],
            resumen: 'Este es el resumen del tema: Disfruta tu sexualidad de modo responsable y con menos riesgos.',
        },
        {
            titulo: 'Yo ejerzo mis derechos',
            informacion: 'Los derechos sexuales y reproductivos son derechos humanos y hacen referencia a la facultad que tienen todas las personas, sin distinción alguna, a tomar decisiones sobre su propia sexualidad.\n\n' +
                'Decidir de forma libre, autónoma e informada sobre su cuerpo y sexualidad de acuerdo con su desarrollo y edad.\n\n' +
                'Ejercer y disfrutar plenamente su sexualidad como práctica de una vida plena, protegida y placentera, sin lesionar ni forzar la voluntad propia y ajena.\n\n' +
                'Manifestar públicamente sus afectos sin prejuicios, discriminación ni violencia, respetando la diversidad sexual.\n\n' +
                'Decidir libremente con quién o quiénes se relacionan afectiva, erótica y socialmente sin coacción ni obligación.\n\n' +
                'A que se respete su privacidad e intimidad resguardando confidencialmente su información personal sin importar la índole.\n\n' +
                'A la vida, a la integridad física, psicológica y sexual, a vivir libres de violencia, con dignidad, integridad y libertad.\n\n' +
                'A la igualdad, a vivir libres de prejuicios y estereotipos de género que limiten sus capacidades, prácticas y ejercicio pleno de los derechos.\n\n' +
                'A vivir libres de discriminación al expresar su identidad sexual y cultural, así como forma de vivir y ejercer la sexualidad.\n\n' +
                'A la información actualizada, veraz, completa, científica y laica sobre sexualidad, y poder tomar decisiones libres de estereotipos, prejuicios o culpas.\n\n' +
                'A la educación integral en sexualidad basada en evidencia científica y en el marco de los derechos humanos, con perspectiva de género y pertenencia cultural.\n\n' +
                'A servicios de salud sexual y reproductiva confiables, amigables, gratuitos y con pertinencia cultural, sin ser negados por la ausencia de padre, madre o tutor legal.\n\n' +
                'A la identidad sexual, a construir, decidir y expresar su identidad de género, orientación sexual e identidad política.\n\n' +
                'A la participación en las políticas públicas sobre sexualidad y reproducción, dialogando, creando y proponiendo acciones que contribuyan a su salud y bienestar.',
            preguntas: [
                {
                    pregunta: "¿Qué son los derechos sexuales y reproductivos?",
                    opciones: [
                        "Son derechos exclusivos de los adultos.",
                        "Son derechos humanos que permiten a las personas tomar decisiones sobre su propia sexualidad.",
                        "Son derechos que solo tienen las mujeres.",
                        "Son derechos que solo tienen los hombres."
                    ],
                    respuestaCorrecta: "Son derechos humanos que permiten a las personas tomar decisiones sobre su propia sexualidad."
                },
                {
                    pregunta: "¿Qué significa ejercer plenamente su sexualidad?",
                    opciones: [
                        "Significa forzar la voluntad propia y ajena.",
                        "Significa lesionar la voluntad propia y ajena.",
                        "Significa disfrutar de una vida plena, protegida y placentera, sin lesionar ni forzar la voluntad propia y ajena.",
                        "Significa manifestar públicamente sus afectos con prejuicios y discriminación."
                    ],
                    respuestaCorrecta: "Significa disfrutar de una vida plena, protegida y placentera, sin lesionar ni forzar la voluntad propia y ajena."
                },
                {
                    pregunta: "¿Qué implica el derecho a la igualdad en el contexto de los derechos sexuales y reproductivos?",
                    opciones: [
                        "Implica vivir con prejuicios y estereotipos de género.",
                        "Implica vivir libres de prejuicios y estereotipos de género que limiten sus capacidades, prácticas y ejercicio pleno de los derechos.",
                        "Implica discriminar al expresar su identidad sexual y cultural.",
                        "Implica limitar las capacidades y prácticas de los demás."
                    ],
                    respuestaCorrecta: "Implica vivir libres de prejuicios y estereotipos de género que limiten sus capacidades, prácticas y ejercicio pleno de los derechos."
                },
                {
                    pregunta: "¿Qué se entiende por educación integral en sexualidad?",
                    opciones: [
                        "Es una educación basada en mitos y creencias populares.",
                        "Es una educación que promueve los estereotipos y prejuicios.",
                        "Es una educación basada en evidencia científica y en el marco de los derechos humanos, con perspectiva de género y pertenencia cultural.",
                        "Es una educación que se imparte solo a los adultos."
                    ],
                    respuestaCorrecta: "Es una educación basada en evidencia científica y en el marco de los derechos humanos, con perspectiva de género y pertenencia cultural."
                },
                {
                    pregunta: "¿Qué significa decidir de forma libre, autónoma e informada sobre su cuerpo y sexualidad?",
                    opciones: [
                        "Significa tomar decisiones basadas en prejuicios y estereotipos.",
                        "Significa tomar decisiones sin tener en cuenta su desarrollo y edad.",
                        "Significa tomar decisiones basadas en la opinión de los demás.",
                        "Significa tomar decisiones de acuerdo con su desarrollo y edad."
                    ],
                    respuestaCorrecta: "Significa tomar decisiones de acuerdo con su desarrollo y edad."
                },
                {
                    pregunta: "¿Qué implica el derecho a la privacidad e intimidad?",
                    opciones: [
                        "Implica que su información personal puede ser compartida sin importar la índole.",
                        "Implica que su información personal debe ser resguardada confidencialmente sin importar la índole.",
                        "Implica que su información personal puede ser divulgada públicamente.",
                        "Implica que su información personal puede ser utilizada para fines comerciales."
                    ],
                    respuestaCorrecta: "Implica que su información personal debe ser resguardada confidencialmente sin importar la índole."
                },
                {
                    pregunta: "¿Qué se entiende por servicios de salud sexual y reproductiva confiables, amigables, gratuitos y con pertinencia cultural?",
                    opciones: [
                        "Son servicios que pueden ser negados por la ausencia de padre, madre o tutor legal.",
                        "Son servicios que solo están disponibles para adultos.",
                        "Son servicios que solo están disponibles para ciertos grupos de personas.",
                        "Son servicios que no pueden ser negados por la ausencia de padre, madre o tutor legal."
                    ],
                    respuestaCorrecta: "Son servicios que no pueden ser negados por la ausencia de padre, madre o tutor legal."
                },
                {
                    pregunta: "¿Qué implica el derecho a la participación en las políticas públicas sobre sexualidad y reproducción?",
                    opciones: [
                        "Implica dialogar, crear y proponer acciones que contribuyan a su salud y bienestar.",
                        "Implica seguir las políticas públicas sin cuestionarlas.",
                        "Implica aceptar las políticas públicas sin tener la oportunidad de dialogar, crear o proponer acciones.",
                        "Implica no participar en las políticas públicas."
                    ],
                    respuestaCorrecta: "Implica dialogar, crear y proponer acciones que contribuyan a su salud y bienestar."
                }
                // Más preguntas aquí...
            ],
            resumen: 'Este es el resumen del tema: Yo ejerzo mis derechos.',
        },
        {
            titulo: 'Diferencias entre Salud Sexual y Salud Reproductiva',
            informacion: 'La salud sexual y la salud reproductiva son derechos humanos relacionados con el libre ejercicio de la sexualidad, el placer físico y emocional, la libre orientación sexual, la elección del número de hijas e hijos, la protección y cuidados obstétricos, entre otros aspectos.\n\n' +
                'Salud Sexual\n' +
                'La Organización Mundial de la Salud (OMS) la define como “el estado de bienestar físico, mental y social en relación con la sexualidad”.\n' +
                'La salud sexual está relacionada con el ejercicio del derecho a:\n' +
                'Decidir libre y responsablemente sobre todos los aspectos relacionados con la sexualidad como la orientación sexual e identidad de género.\n' +
                'Ejercer una sexualidad placentera y segura, libre de toda presión, discriminación y violencia.\n' +
                'Al acceso a información actualizada, veraz, completa, científica y laica sobre sexualidad.\n\n' +
                'La salud sexual requiere un enfoque positivo y respetuoso de la sexualidad, como la posibilidad de tener experiencias sexuales placenteras y seguras, sin coerción, discriminación ni violencia.\n\n' +
                'Salud Reproductiva\n' +
                'El Fondo de Población de las Naciones Unidas (UNFPA) la define como “el conjunto de métodos, técnicas y servicios que contribuyen a la salud y al bienestar reproductivo”.\n\n' +
                'La salud reproductiva está relacionada con el ejercicio del derecho a:\n' +
                'Tener información, educación y medios para decidir libre y responsablemente sobre el número y espaciamiento de hijas e hijos.\n' +
                'Elegir el método anticonceptivo que se adapte a las necesidades de cada persona.\n' +
                'Acceder a servicios de salud apropiados que permitan los embarazos y los partos sin riesgos y libres de violencia obstétrica.\n\n' +
                'Las decisiones relacionadas con la salud reproductiva son determinantes para la vida presente y futura, por lo que se deben tomar de manera libre, informada y en un contexto de apoyo y seguridad jurídica y de salud.',
            preguntas: [
                {
                    pregunta: "¿Cómo define la Organización Mundial de la Salud (OMS) la salud sexual?",
                    opciones: [
                        "El estado de bienestar físico y social en relación con la sexualidad.",
                        "El estado de bienestar físico, mental y social en relación con la sexualidad.",
                        "El estado de bienestar físico y mental en relación con la sexualidad.",
                        "El estado de bienestar social en relación con la sexualidad."
                    ],
                    respuestaCorrecta: "El estado de bienestar físico, mental y social en relación con la sexualidad."
                },
                {
                    pregunta: "¿Cuál de los siguientes NO es un derecho relacionado con la salud sexual?",
                    opciones: [
                        "Decidir libre y responsablemente sobre todos los aspectos relacionados con la sexualidad.",
                        "Ejercer una sexualidad placentera y segura.",
                        "Acceder a servicios de salud apropiados que permitan los embarazos y los partos sin riesgos.",
                        "Acceso a información actualizada, veraz, completa, científica y laica sobre sexualidad."
                    ],
                    respuestaCorrecta: "Acceder a servicios de salud apropiados que permitan los embarazos y los partos sin riesgos."
                },
                {
                    pregunta: "¿Qué organización define la salud reproductiva como “el conjunto de métodos, técnicas y servicios que contribuyen a la salud y al bienestar reproductivo”?",
                    opciones: [
                        "Organización Mundial de la Salud (OMS)",
                        "Fondo de Población de las Naciones Unidas (UNFPA)",
                        "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO)",
                        "Organización Internacional del Trabajo (OIT)"
                    ],
                    respuestaCorrecta: "Fondo de Población de las Naciones Unidas (UNFPA)"
                },
                {
                    pregunta: "¿Cuál de los siguientes NO es un derecho relacionado con la salud reproductiva?",
                    opciones: [
                        "Tener información, educación y medios para decidir libre y responsablemente sobre el número y espaciamiento de hijas e hijos.",
                        "Elegir el método anticonceptivo que se adapte a las necesidades de cada persona.",
                        "Ejercer una sexualidad placentera y segura, libre de toda presión, discriminación y violencia.",
                        "Acceder a servicios de salud apropiados que permitan los embarazos y los partos sin riesgos."
                    ],
                    respuestaCorrecta: "Ejercer una sexualidad placentera y segura, libre de toda presión, discriminación y violencia."
                },
                {
                    pregunta: "¿La salud sexual requiere un enfoque positivo y respetuoso de la sexualidad?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿Las decisiones relacionadas con la salud reproductiva son determinantes para la vida presente y futura?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿La salud sexual y la salud reproductiva son derechos humanos?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos países",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿La salud sexual está relacionada con el ejercicio del derecho a decidir libre y responsablemente sobre todos los aspectos relacionados con la sexualidad, incluyendo la orientación sexual e identidad de género?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                }
            ],
            resumen: 'Este es el resumen del tema: Diferencias entre Salud Sexual y Salud Reproductiva.',
        },
        {
            titulo: 'Derechos sexuales y derechos reproductivos',
            informacion: 'Todas las personas tienen derechos humanos universales que se encuentran reconocidos en la Constitución Política de los Estados Unidos Mexicanos.\n' +
                'Los derechos sexuales y los derechos reproductivos son parte de los derechos humanos.\n\n' +
                'Los Derechos Sexuales\n' +
                'Se derivan de los derechos humanos, y están basados en la dignidad del ser humano.\n' +
                'Fueron creados para proteger el ejercicio de la sexualidad plena, libre, segura, responsable, sin violencia ni prejuicios de cada persona.\n\n' +
                'Expresar libremente la sexualidad a través de la comunicación, el contacto, la expresión emocional y el amor sin ser juzgado.\n' +
                'Vivir una sexualidad sin violencia.\n' +
                'Obtener placer incluyendo el autoerotismo.\n\n' +
                'Los Derechos Reproductivos\n' +
                'Hacen referencia a las garantías y obligaciones que tienen todas las personas sobre su capacidad reproductiva.\n' +
                'Es decir, a todo lo relacionado con la reproducción humana:\n' +
                'Poder decidir cuántas hijas e hijos tener y con quién.\n' +
                'Recibir la atención en salud reproductiva de acuerdo a sus necesidades.\n\n' +
                'Recibir el método anticonceptivo adecuado.\n' +
                'Recibir información, orientación, consejería y servicios solicitados en un ambiente de privacidad y confidencialidad.',
            preguntas: [
                {
                    pregunta: "¿Los derechos sexuales y los derechos reproductivos son parte de qué tipo de derechos?",
                    opciones: [
                        "Derechos civiles",
                        "Derechos humanos",
                        "Derechos laborales",
                        "Derechos de autor"
                    ],
                    respuestaCorrecta: "Derechos humanos"
                },
                {
                    pregunta: "¿Los derechos sexuales se derivan de qué tipo de derechos?",
                    opciones: [
                        "Derechos civiles",
                        "Derechos humanos",
                        "Derechos laborales",
                        "Derechos de autor"
                    ],
                    respuestaCorrecta: "Derechos humanos"
                },
                {
                    pregunta: "¿Cuál de los siguientes NO es un derecho sexual?",
                    opciones: [
                        "Expresar libremente la sexualidad a través de la comunicación, el contacto, la expresión emocional y el amor sin ser juzgado.",
                        "Vivir una sexualidad sin violencia.",
                        "Recibir el método anticonceptivo adecuado.",
                        "Obtener placer incluyendo el autoerotismo."
                    ],
                    respuestaCorrecta: "Recibir el método anticonceptivo adecuado."
                },
                {
                    pregunta: "¿Los derechos reproductivos hacen referencia a las garantías y obligaciones que tienen todas las personas sobre qué aspecto?",
                    opciones: [
                        "Su capacidad laboral",
                        "Su capacidad reproductiva",
                        "Su capacidad de expresión",
                        "Su capacidad de aprendizaje"
                    ],
                    respuestaCorrecta: "Su capacidad reproductiva"
                },
                {
                    pregunta: "¿Cuál de los siguientes NO es un derecho reproductivo?",
                    opciones: [
                        "Poder decidir cuántas hijas e hijos tener y con quién.",
                        "Recibir la atención en salud reproductiva de acuerdo a sus necesidades.",
                        "Expresar libremente la sexualidad a través de la comunicación, el contacto, la expresión emocional y el amor sin ser juzgado.",
                        "Recibir información, orientación, consejería y servicios solicitados en un ambiente de privacidad y confidencialidad."
                    ],
                    respuestaCorrecta: "Expresar libremente la sexualidad a través de la comunicación, el contacto, la expresión emocional y el amor sin ser juzgado."
                },
                {
                    pregunta: "¿Los derechos sexuales y los derechos reproductivos están reconocidos en la Constitución Política de los Estados Unidos Mexicanos?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos estados",
                        "No se especifica"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿Los derechos sexuales fueron creados para proteger el ejercicio de la sexualidad plena, libre, segura, responsable, sin violencia ni prejuicios de cada persona?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿Los derechos reproductivos permiten recibir el método anticonceptivo adecuado?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                }
            ],
            resumen: 'Este es el resumen del tema: Derechos sexuales y derechos reproductivos.',
            vendido: false,
            locked: true
        },
        {
            titulo: 'Servicios Amigables',
            informacion: '¿QUÉ SON LOS SERVICIOS AMIGABLES?\n' +
                'Son espacios diseñados especialmente para proporcionar información, orientación, ' +
                'consejería, atención médica, atención psicológica, dotación de métodos ' +
                'anticonceptivos, entre otros, a mujeres y hombres de 10 a 19 años de edad.\n' +
                'De acuerdo a la Norma Oficial Mexicana para la atención a la salud del Grupo ' +
                'Etario de 10 a 19 años de edad (NOM-047-SSA2-2015), en los Servicios Amigables:\n\n' +
                'Podrás solicitar directamente al personal de salud, consejería en materia de planificación familiar, salud sexual y reproductiva, métodos anticonceptivos, prevención del embarazo no planeado y de las infecciones de transmisión sexual.\n\n' +
                'Recibirás atención con absoluto respeto a tus derechos sexuales y reproductivos y sin ser necesaria la presencia de padres o tutores. Se cuenta con una política de privacidad y confidencialidad, lo que garantiza que no habrá divulgación de información personal.\n\n' +
                'Podrás elegir si deseas recibir los servicios con o sin acompañamiento. Si eliges recibir la atención sin acompañamiento, quien otorgue la consejería, debe solicitar la presencia de al menos otro miembro del personal de salud el tiempo que dure la consejería.\n\n' +
                'Te informarán sobre los beneficios y alternativas para postergar un embarazo y prevenir las infecciones de transmisión sexual, mediante el uso simultáneo de un método anticonceptivo reversible de larga duración y del condón.',
            preguntas: [
                {
                    pregunta: "¿Qué son los Servicios Amigables?",
                    opciones: [
                        "Son espacios diseñados para proporcionar información y atención médica a personas de todas las edades.",
                        "Son espacios diseñados especialmente para proporcionar información, orientación, consejería, atención médica, atención psicológica, dotación de métodos anticonceptivos, entre otros, a mujeres y hombres de 10 a 19 años de edad.",
                        "Son espacios diseñados para proporcionar información y atención médica solo a adultos.",
                        "Son espacios diseñados para proporcionar información y atención médica solo a personas mayores."
                    ],
                    respuestaCorrecta: "Son espacios diseñados especialmente para proporcionar información, orientación, consejería, atención médica, atención psicológica, dotación de métodos anticonceptivos, entre otros, a mujeres y hombres de 10 a 19 años de edad."
                },
                {
                    pregunta: "¿De acuerdo a qué norma se rigen los Servicios Amigables?",
                    opciones: [
                        "NOM-047-SSA2-2015",
                        "NOM-035-SSA2-2015",
                        "NOM-019-SSA2-2015",
                        "NOM-025-SSA2-2015"
                    ],
                    respuestaCorrecta: "NOM-047-SSA2-2015"
                },
                {
                    pregunta: "¿Qué puedes solicitar directamente al personal de salud en los Servicios Amigables?",
                    opciones: [
                        "Consejería en materia de planificación familiar, salud sexual y reproductiva, métodos anticonceptivos, prevención del embarazo no planeado y de las infecciones de transmisión sexual.",
                        "Consejería en materia de nutrición y ejercicio.",
                        "Consejería en materia de salud mental.",
                        "Consejería en materia de salud bucal."
                    ],
                    respuestaCorrecta: "Consejería en materia de planificación familiar, salud sexual y reproductiva, métodos anticonceptivos, prevención del embarazo no planeado y de las infecciones de transmisión sexual."
                },
                {
                    pregunta: "¿Necesitas la presencia de padres o tutores para recibir atención en los Servicios Amigables?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "No"
                },
                {
                    pregunta: "¿Puedes elegir si deseas recibir los servicios con o sin acompañamiento en los Servicios Amigables?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿Qué te informarán en los Servicios Amigables?",
                    opciones: [
                        "Sobre los beneficios y alternativas para postergar un embarazo y prevenir las infecciones de transmisión sexual, mediante el uso simultáneo de un método anticonceptivo reversible de larga duración y del condón.",
                        "Sobre los beneficios y alternativas para una alimentación saludable.",
                        "Sobre los beneficios y alternativas para un estilo de vida activo.",
                        "Sobre los beneficios y alternativas para una buena higiene bucal."
                    ],
                    respuestaCorrecta: "Sobre los beneficios y alternativas para postergar un embarazo y prevenir las infecciones de transmisión sexual, mediante el uso simultáneo de un método anticonceptivo reversible de larga duración y del condón."
                },
                {
                    pregunta: "¿Los Servicios Amigables cuentan con una política de privacidad y confidencialidad?",
                    opciones: [
                        "Sí",
                        "No",
                        "Solo en algunos casos",
                        "Depende de la cultura"
                    ],
                    respuestaCorrecta: "Sí"
                },
                {
                    pregunta: "¿A quiénes están dirigidos los Servicios Amigables?",
                    opciones: [
                        "A mujeres y hombres de 10 a 19 años de edad.",
                        "A mujeres y hombres de todas las edades.",
                        "A mujeres y hombres mayores de 18 años.",
                        "A mujeres y hombres mayores de 60 años."
                    ],
                    respuestaCorrecta: "A mujeres y hombres de 10 a 19 años de edad."
                }
            ],
            resumen: 'Este es el resumen del tema: Servicios Amigables.',
            vendido: false,
            locked: true
        },
    ]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
            const userDocSnap = await getDoc(userDoc);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                console.log('Datos del usuario recuperados de Firestore:', userData);
                setNombreUsuario(userData.username);
                // Actualiza los temas bloqueados desde Firestore si es necesario
                if (userData.temas) {
                    setTemas(userData.temas);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleUnlockTema = (titulo) => {
        setTemaSeleccionado(titulo);
    };

    const handleCompraTema = async () => {
        const updatedTemas = temas.map(tema => {
            if (tema.titulo === temaSeleccionado) {
                return { ...tema, locked: false };
            }
            return tema;
        });
        setTemas(updatedTemas);

        const userDoc = doc(db, 'Usuario', getAuth().currentUser.uid);
        await updateDoc(userDoc, {
            temas: updatedTemas
        });

        setTemaSeleccionado(null);
    };

    const filteredTemas = temas.filter(tema =>
        tema.titulo.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={sharedStyles.espacioSuperior}></View>
            <View style={styles.barraBuscar}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <Ionicons name="search" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.bienvenidoText}>Bienvenido {userName}</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {filteredTemas.map((tema, index) => (
                    <ComponenteTema
                        key={index}
                        titulo={tema.titulo}
                        informacion={tema.informacion}
                        preguntas={tema.preguntas}
                        resumen={tema.resumen}
                        historial={tema.historial}
                        locked={tema.locked}
                        onUnlock={handleUnlockTema}
                    />
                ))}
            </ScrollView>

            {temaSeleccionado && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={!!temaSeleccionado}
                    onRequestClose={() => setTemaSeleccionado(null)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitleText}>Comprar {temaSeleccionado}</Text>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={handleCompraTema}>
                                <Text>Comprar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpcion} onPress={() => setTemaSeleccionado(null)}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}

            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#E0E6F6',
        justifyContent: 'space-between', // Alinea los elementos en el eje principal
    },
    bienvenidoText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    barraBuscar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: greyP,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        marginRight: 8,
    },
    icon: {
        marginRight: 8,
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    componenteTema: {
        backgroundColor: purpleP,
        marginBottom: 16,
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 10,
    },
    temaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    centroText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    izquierdaText: {
        fontSize: 14,
        color: 'black', // Cambiado a negro
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: backgroundP,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        marginBottom: 20,
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonOpcionContainer: {
        alignItems: 'center',
    },
    buttonOpcion: {
        backgroundColor: purpleP,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: 100,
        alignItems: 'center',
    },
});
