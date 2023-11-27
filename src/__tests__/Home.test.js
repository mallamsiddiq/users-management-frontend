// __tests__/Home.test.js
import React from 'react';
import { render, waitFor, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';  // Ensure this import is correct
import { getUsers } from '../api/users';
import { ThemeProvider } from '../utils/contexts/ThemeContext';
import { useTheme } from '../utils/contexts/ThemeContext';

jest.mock('../api/users');

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    address: {
      street: '123 Main St',
      suite: 'Apt 4',
      city: 'Cityville',
      zipcode: '12345',
    },
  },
];

test('renders link to user details', async () => {
  getUsers.mockResolvedValueOnce(mockUsers);

  render(
    <ThemeProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );

  await waitFor(() => {
    const link = screen.getByText(/John Doe/i);
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/users/1');
  });
});

test('renders Home with dark theme', async () => {
    getUsers.mockResolvedValueOnce(mockUsers);
    render(
      <ThemeProvider initialDarkMode={true}>
          <BrowserRouter>
              <Home />
          </BrowserRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      const profileLink = screen.getByText('John Doe'); // Replace with the actual user name

      // Assert the initial class based on dark mode
      expect(profileLink).toHaveClass('btn-link', 'text-primary');

    });

});
