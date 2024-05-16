import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../Vista/frmIniciarSesion1';

test('Iniciar sesión con credenciales válidas', () => {
  // Renderiza el componente
  const { getByPlaceholderText, getByText } = render(<LoginScreen />);

  // Encuentra los campos de correo electrónico y contraseña
  const emailInput = getByPlaceholderText('tucorreo@ejemplo.com');
  const passwordInput = getByPlaceholderText('Contraseña');

  // Simula la entrada de datos
  fireEvent.changeText(emailInput, 'usuario@example.com');
  fireEvent.changeText(passwordInput, 'contraseña123');

  // Encuentra y presiona el botón de inicio de sesión
  const loginButton = getByText('Iniciar Sesión');
  fireEvent.press(loginButton);

  // Verifica que se haya llamado a la función handleSignIn
  // (puedes espiar la función o usar mocks)
  // También puedes verificar si la navegación se activó correctamente
});
