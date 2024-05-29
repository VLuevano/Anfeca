import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CuentaScreen from '../screens/frmCuentaUsuario';

describe('CuentaScreen', () => {
  test('C1: Cambios válidos', async () => {
    const { getByText, getByPlaceholderText } = render(<CuentaScreen />);

    const nombreUsuarioInput = getByPlaceholderText('Nombre de usuario:');
    const correoInput = getByPlaceholderText('Correo electrónico:');
    const confirmarCambiosButton = getByText('Confirmar Cambios');

    fireEvent.changeText(nombreUsuarioInput, 'miusuario1');
    fireEvent.changeText(correoInput, 'tucorreo@ejemplo.com');

    fireEvent.press(confirmarCambiosButton);

    await waitFor(() => {
      expect(getByText('Los cambios se han guardado con éxito')).toBeTruthy();
    });
  });

});
