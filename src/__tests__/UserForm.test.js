// __tests__/UserForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserForm from '../pages/UserForm';
import { ThemeProvider } from '../utils/contexts/ThemeContext';
import { ErrorProvider } from '../utils/contexts/ErrorContext';

const getByFieldName = (fieldName) => screen.getByRole('input', { name: fieldName }).toBeInTheDocument();
const rederForm = () => {
  render(
      <BrowserRouter>
          <ErrorProvider>
            <ThemeProvider>
              <UserForm />
            </ThemeProvider>
          </ErrorProvider>
      </BrowserRouter>
  );
};

describe('UserForm', () => {
  test('renders UserForm components', () => {
    rederForm()

    // Assert that the form elements are rendered
    expect(screen.getByText('Add New User')).toBeInTheDocument();

    expect(getByFieldName('name'));
    expect(getByFieldName('email'));
    expect(getByFieldName('phone'));
    expect(getByFieldName('website'));

    // Assert that company fields are rendered with lowercase names
    expect(getByFieldName('company name'));
    expect(getByFieldName('company catchphrase'));
    expect(getByFieldName('company bs'));

    // Assert that address fields are rendered with lowercase names
    expect(getByFieldName('address street'));
    expect(getByFieldName('address suite'));
    expect(getByFieldName('address city'));
    expect(getByFieldName('address zipcode'));
    // Add more assertions for other fields if needed
    // Add more assertions for other fields if needed
  });

  test('renders UserForm component', () => {
    rederForm()

    // Assert that the form elements are rendered
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone:')).toBeInTheDocument();
    expect(screen.getByLabelText('Website:')).toBeInTheDocument();
    // Add more assertions for other fields if needed
  });

  test('handles user input correctly', () => {
    rederForm()

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Website:'), { target: { value: 'https://example.com' } });

    // Add more assertions for other fields if needed
    expect(screen.getByLabelText('Name:').value).toBe('John Doe');
    expect(screen.getByLabelText('Email:').value).toBe('john@example.com');
    expect(screen.getByLabelText('Phone:').value).toBe('1234567890');
    expect(screen.getByLabelText('Website:').value).toBe('https://example.com');
  });

  test('submits the form with valid input', async () => {
    rederForm()

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '1234567890' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Add assertions for successful form submission
    // For example, you can check if a success message is displayed or if the user is redirected
    // Use waitFor or other mechanisms to wait for asynchronous actions if needed
  });
});
