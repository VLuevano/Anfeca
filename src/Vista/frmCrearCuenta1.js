import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from './styles';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function StepOne({ onNext }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = () => {
        onNext({ email, password });
    };

    return (
        <View>
            <Text>Ingresa tu correo electrónico</Text>
            <TextInput
                onChangeText={setEmail}
                placeholder="tucorreo@ejemplo.com"
                value={email}
            />
            <Text>Ingresa tu contraseña</Text>
            <TextInput
                onChangeText={setPassword}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleNext}>
                <Text>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepTwo({ onNext }) {
    const [username, setUsername] = useState('');

    const handleNext = () => {
        onNext({ username });
    };

    return (
        <View>
            <Text>Ingresa tu nombre de usuario</Text>
            <TextInput
                onChangeText={setUsername}
                placeholder="Nombre de usuario"
                value={username}
            />
            <TouchableOpacity onPress={handleNext}>
                <Text>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepThree({ onNext }) {
    const [gender, setGender] = useState('');

    const handleNext = () => {
        onNext({ gender });
    };

    return (
        <View>
            <Text>Selecciona tu sexo</Text>
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
            >
                <Picker.Item label="Masculino" value="male" />
                <Picker.Item label="Femenino" value="female" />
            </Picker>
            <TouchableOpacity onPress={handleNext}>
                <Text>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

function StepFour({ onNext }) {
    const [avatar, setAvatar] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setShowDatePicker(false);
        setDateOfBirth(currentDate);
    };

    const handleNext = () => {
        onNext({ avatar, dateOfBirth });
    };

    return (
        <View>
            <Text>Selecciona tu avatar</Text>
            {/* Lógica para seleccionar un avatar */}

            <Text>Selecciona tu fecha de nacimiento</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
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

            <TouchableOpacity onPress={handleNext}>
                <Text>Crear cuenta</Text>
            </TouchableOpacity>
        </View>
    );
}

function RegistrationScreen() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({});

    const handleNext = (data) => {
        setUserData({ ...userData, ...data });
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Crear la cuenta con toda la información ingresada
            createUserWithEmailAndPassword(auth, userData.email, userData.password, userData.username, userData.gender, userData.dateOfBirth)
                .then((userCredential) => {
                    console.log("Account created")
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch(error => {
                    console.error("Error al crear la cuenta:", error);
                    // Manejar el error de creación de cuenta
                })
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