import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { sharedStyles } from './styles';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function StepOne({ onNext }) {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa un correo electrónico y una contraseña.');
            return;
        }
        // Validar que el correo electrónico sea válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
            return;
        }

        // Validar que la contraseña tenga al menos 6 caracteres
        if (password.length < 6) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        onNext({ email, password });
    };

    return (
        <View style={sharedStyles.container2}>
            <View style={sharedStyles.espacioSuperior}></View>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('CrearCuenta')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={sharedStyles.titulo}>Registrarse</Text>
            <Text style={sharedStyles.textos}>Ingresa tu correo electrónico</Text>
            <TextInput
                onChangeText={setEmail}
                style={sharedStyles.entradaTexto}
                placeholder="tucorreo@ejemplo.com"
                value={email}
            />
            <Text style={sharedStyles.textos}>Ingresa tu contraseña</Text>
            <TextInput
                onChangeText={setPassword}
                placeholder="Contraseña"
                style={sharedStyles.entradaTexto}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleNext} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepTwo({ onNext }) {

    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    const handleNext = () => {
        if (username.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa un nombre de usuario.');
            return;
        }
        onNext({ username });
    };

    return (
        <View style={sharedStyles.container2}>
            <View style={sharedStyles.espacioSuperior}></View>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('CrearCuenta')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={sharedStyles.titulo}>Registrarse</Text>
            <Text style={sharedStyles.textos}>Ingresa tu nombre de usuario</Text>
            <TextInput
                onChangeText={setUsername}
                placeholder="Nombre de usuario"
                style={sharedStyles.entradaTexto}
                value={username}
            />
            <TouchableOpacity onPress={handleNext} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepThree({ onNext }) {

    const navigation = useNavigation();
    const [gender, setGender] = useState('Hombre');

    const handleNext = () => {
        onNext({ gender });
    };

    return (
        <View style={sharedStyles.container2}>
            <View style={sharedStyles.espacioSuperior}></View>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('CrearCuenta')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={sharedStyles.titulo}>Registrarse</Text>
            <Text style={sharedStyles.textos}>Selecciona tu sexo</Text>
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={sharedStyles.entradaTexto}
            >
                <Picker.Item label="Hombre" value="Hombre" />
                <Picker.Item label="Mujer" value="Mujer" />
            </Picker>
            <TouchableOpacity onPress={handleNext} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepFour({ onNext, onSelect }) {

    const navigation = useNavigation();
    const [avatars, setAvatars] = useState([]);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const avatarPaths = [
        '47207d84-logo-simi-e1667606405832.png',
        'OIP.jpeg',
        'hqdefault.jpg',
    ];

    const storage = getStorage();

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setShowDatePicker(false);
        setDateOfBirth(currentDate);
    };

    useEffect(() => {
        // Obtener las URLs de descarga de los avatares
        Promise.all(avatarPaths.map((path, index) => {
            const storageRef = ref(storage, 'avatars/' + path);
            return getDownloadURL(storageRef)
                .then((url) => {
                    // Crear un objeto avatar con la URL de descarga
                    return {
                        id: index + 1,
                        image: url,
                    };
                });
        })).then((newAvatars) => {
            setAvatars(newAvatars);
        });
    }, []);

    const handleNext = () => {
        if (!selectedAvatar) {
            Alert.alert('Error', 'Por favor selecciona un avatar.');
            return;
        }
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        const ageDifference = today.getFullYear() - birthDate.getFullYear();

        // Si la diferencia de años es menor a 10, mostrar un mensaje de error
        if (ageDifference < 10) {
            Alert.alert('Error', 'Debes tener al menos 10 años para registrarte.');
            return;
        }
        // Formatear la fecha de nacimiento a una cadena de texto en el formato "yyyy-mm-dd"
        const dateOfBirthString = `${birthDate.getFullYear()}-${birthDate.getMonth() + 1}-${birthDate.getDate()}`;
        onNext({ selectedAvatar, dateOfBirth: dateOfBirthString });
    };

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarPress = (avatar) => {
        setSelectedAvatar(avatar);
        onSelect && onSelect(avatar);
    };

    return (
        <View style={sharedStyles.container2}>
            <View style={sharedStyles.espacioSuperior}></View>
            <TouchableOpacity style={sharedStyles.botonVolver} onPress={() => navigation.navigate('CrearCuenta')}>
                <Image
                    source={require('../../Recursos/Imágenes/flechaRetroceder.png')}
                    style={sharedStyles.iconoVolver}
                />
            </TouchableOpacity>
            <Text style={sharedStyles.titulo}>Registrarse</Text>
            <Text style={sharedStyles.textos}>Selecciona tu avatar</Text>
            <FlatList
                data={avatars}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleAvatarPress(item)} style={{ margin: 5 }}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {selectedAvatar && (
                <Text>Avatar seleccionado: {selectedAvatar.id}</Text>
            )}

            <Text style={sharedStyles.textos}>Selecciona tu fecha de nacimiento</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={sharedStyles.entradaTexto}>
                <Text>{dateOfBirth.toDateString()}</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    testID="datePicker"
                    value={dateOfBirth}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <TouchableOpacity onPress={handleNext} style={sharedStyles.boton}>
                <Text style={sharedStyles.textoBoton}>Crear cuenta</Text>
            </TouchableOpacity>
        </View>
    );
}

function RegistrationScreen() {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({});

    const handleNext = (data) => {
        const newUserData = { ...userData, ...data };
        console.log('Datos recibidos en handleNext:', newUserData); // Añade esta línea
        setUserData(newUserData);
        if (step < 4) {
            setStep(step + 1);
        } else {
            console.log('Datos de newUserData antes de guardar en Firestore:', newUserData); // Añade esta línea
            // Crear la cuenta con el correo electrónico y la contraseña
            createUserWithEmailAndPassword(auth, newUserData.email, newUserData.password)
                .then((userCredential) => {
                    console.log("Cuenta creada exitosamente");
                    const user = userCredential.user;

                    // Guardar datos adicionales del usuario en Firestore
                    const db = getFirestore(app); // Asegúrate de tener inicializada tu instancia de Firebase

                    // Crea un documento en la colección "usuarios"
                    setDoc(doc(db, 'Usuario', user.uid), {
                        userId: user.uid, // Puedes usar el ID del usuario como clave
                        email: newUserData.email,
                        username: newUserData.username,
                        gender: newUserData.gender,
                        dateOfBirth: newUserData.dateOfBirth, // Guardar la fecha de nacimiento como una cadena de texto
                        avatar: newUserData.selectedAvatar, // Guardar el avatar seleccionado
                    })
                        .then(() => {
                            console.log('Datos del usuario guardados en Firestore');
                            navigation.navigate('MenuPrincipal');
                        })
                        .catch((error) => {
                            console.error('Error al guardar datos del usuario en Firestore:', error);
                        });
                })
                .catch(error => {
                    console.error("Error al crear la cuenta:", error);
                });

        }
    };

    return (
        <View>
            {step === 1 && <StepOne onNext={handleNext} />}
            {step === 2 && <StepTwo onNext={handleNext} />}
            {step === 3 && <StepThree onNext={handleNext} />}
            {step === 4 && <StepFour onNext={handleNext} />}
        </View>
    );
}

const styles = StyleSheet.create({
    sharedStyles,
});

export default RegistrationScreen;