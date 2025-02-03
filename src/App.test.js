import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App'; // Az App komponens importálása

describe('App component', () => {
  test('should render username and password input fields', () => {
    // Az App komponens renderelése
    render(<App />);
    
    // Ellenőrizzük, hogy a felhasználónév és jelszó input mezők megjelennek
    expect(screen.getByPlaceholderText('felhasználónév')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('jelszó')).toBeInTheDocument();
  });

  test('should allow input in username and password fields', () => {
    // Az App komponens renderelése
    render(<App />);
    
    // Keresés az input mezőkre és szimuláljuk a felhasználó bevitelt
    const usernameInput = screen.getByPlaceholderText('felhasználónév');
    const passwordInput = screen.getByPlaceholderText('jelszó');

    // Felhasználónév és jelszó beírása
    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Ellenőrizzük, hogy a mezők értékei a beírt értékek
    expect(usernameInput.value).toBe('user');
    expect(passwordInput.value).toBe('password');
  });
});
