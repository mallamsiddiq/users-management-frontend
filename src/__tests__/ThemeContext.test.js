// __tests__/ThemeContext.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../utils/contexts/ThemeContext';

test('ThemeProvider toggles the theme', () => {
  const TestComponent = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
      <div>
        <div data-testid="dark-mode">{darkMode ? 'Dark Mode' : 'Light Mode'}</div>
        <button data-testid="toggle-theme" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    );
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  // Check initial theme
  const initialModeText = screen.getByTestId('dark-mode');
  expect(initialModeText).toHaveTextContent('Light Mode');

  // Toggle the theme
  const toggleButton = screen.getByTestId('toggle-theme');
  fireEvent.click(toggleButton);

  // Check if the theme is toggled
  const toggledModeText = screen.getByTestId('dark-mode');
  expect(toggledModeText).toHaveTextContent('Dark Mode');
});
