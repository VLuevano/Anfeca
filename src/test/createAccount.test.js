import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RegistrationScreen from '../screens/frmCrearCuenta1';

describe('RegistrationScreen', () => {
  test('C1: Registro exitoso con valores válidos', async () => {
    const { getByPlaceholderText, getByText } = render(<RegistrationScreen />);
    const emailInput = getByPlaceholderText('tucorreo@ejemplo.com');
    const passwordInput = getByPlaceholderText('Contraseña');
    const continueButton = getByText('Continuar');

    fireEvent.changeText(emailInput, 'tucorreo@ejemplo.com');
    fireEvent.changeText(passwordInput, 'contraseña123');

    fireEvent.press(continueButton);

    await waitFor(() => {
      expect(navigationMock.navigate).toHaveBeenCalledWith('PasoDos');
    });
  });
});
