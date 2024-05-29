import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ForgotPasswordScreen from '../screens/frmRecuperarContraseña';

describe('ForgotPasswordScreen', () => {
  test('C1: Correo validado y correo de recuperación enviado', async () => {
    const { getByPlaceholderText, getByText } = render(<ForgotPasswordScreen />);

    const correoInput = getByPlaceholderText('Ingrese su correo electrónico');
    fireEvent.changeText(correoInput, 'tucorreo@ejemplo.com');

    const enviarCorreoButton = getByText('Enviar correo de recuperación');
    fireEvent.press(enviarCorreoButton);

    await waitFor(() => {
      expect(getByText('Correo de recuperación enviado. Revise su bandeja de entrada para restablecer su contraseña')).toBeTruthy();
    });
  });
});
