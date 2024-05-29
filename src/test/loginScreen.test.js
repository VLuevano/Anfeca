import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../screens/frmIniciarSesion1';

describe('LoginScreen', () => {
  test('C1: Usuario autenticado y navegación a MenuPrincipal', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('tucorreo@ejemplo.com');
    const passwordInput = getByPlaceholderText('Contraseña');
    const signInButton = getByText('Iniciar Sesión');

    fireEvent.changeText(emailInput, 'tucorreo@ejemplo.com');
    fireEvent.changeText(passwordInput, 'contraseña123');

    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(navigationMock.navigate).toHaveBeenCalledWith('MenuPrincipal');
    });
  });

  test('C2: Error de inicio de sesión con correo inválido', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('tucorreo@ejemplo.com');
    const passwordInput = getByPlaceholderText('Contraseña');
    const signInButton = getByText('Iniciar Sesión');

    fireEvent.changeText(emailInput, 'correo_invalido');
    fireEvent.changeText(passwordInput, 'contraseña123');

    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(getByText('Ingrese datos válidos')).toBeTruthy();
    });
  });
});
