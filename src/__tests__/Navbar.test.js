// __tests__/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../utils/contexts/ThemeContext';

test('renders Navbar with light theme', () => {
  render(
    <ThemeProvider>
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    </ThemeProvider>
  );

  // Check for elements that should be present in the light theme
  const navbar = screen.getByRole('navigation');
  const homeLink = screen.getByText('Home');
  const addUserLink = screen.getByText('Add User');

  expect(navbar).toHaveClass('navbar-light');
  expect(navbar).toHaveClass('bg-info');
  expect(homeLink).toHaveClass('text-dark');
  expect(addUserLink).toHaveClass('text-dark');
});

test('renders Navbar with dark theme', () => {
  render(
    <ThemeProvider initialDarkMode={true}>
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    </ThemeProvider>
  );

  // Check for elements that should be present in the dark theme
  const navbar = screen.getByRole('navigation');
  const homeLink = screen.getByText('Home');
  const addUserLink = screen.getByText('Add User');

  expect(navbar).toHaveClass('navbar-dark');
  expect(navbar).toHaveClass('bg-primary');
  expect(homeLink).toHaveClass('text-light');
  expect(addUserLink).toHaveClass('text-light');
});

test('toggles theme using the Navbar toggle button', () => {
    render(
        <ThemeProvider>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </ThemeProvider>
    );

    // Check initial theme
    let navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-light');

    // Click the toggle button
    const toggleButton = screen.getByRole('checkbox', { id: 'flexSwitchCheckDefault' });
    console.log(toggleButton)
    fireEvent.click(toggleButton);

    // Check if the theme is toggled to dark
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark');

    // Click the toggle button again
    fireEvent.click(toggleButton);

    // Check if the theme is toggled back to light
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-light');
});

test('renders Navbar with links working', () => {
    render(
      <ThemeProvider>
          <BrowserRouter>
              <Navbar />
          </BrowserRouter>
      </ThemeProvider>
    );
  
    // Check for elements that should be present in the light theme
    const brandlink = screen.getByText('User Dashboard');
    const homeLink = screen.getByText('Home');
    const addUserLink = screen.getByText('Add User');

    
    expect(brandlink.getAttribute('href')).toBe('/');
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(addUserLink.getAttribute('href')).toBe('/add-user');
  });