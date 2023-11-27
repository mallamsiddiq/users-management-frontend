// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import App from '../App';  // Update the path to App
import { ThemeProvider } from '../utils/contexts/ThemeContext';
import { ErrorProvider } from '../utils/contexts/ErrorContext';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('renders App component', () => {
    render(
        <ThemeProvider>
        <ErrorProvider>
            <App />
        </ErrorProvider>
        </ThemeProvider>
    );
    
    expect(screen.getByText(/User List/)).toBeInTheDocument();
    expect(screen.getByText(/User Dashboard/)).toBeInTheDocument();
});

// test('renders UserForm component for /add-user route', () => {
//   render(
//     <ThemeProvider>
//       <ErrorProvider>
//         <MemoryRouter initialEntries={['/add-user']}>
//         <Routes>
//             <Route path="/add-user" element={<App />} />
//           </Routes>
//         </MemoryRouter>
//       </ErrorProvider>
//     </ThemeProvider>
//   );

//   // Assertions based on the content of your UserForm component
//   expect(screen.getByText(/Add New User/)).toBeInTheDocument();
//   // Add more assertions specific to your UserForm component
// });


// // test('renders Home component for / route', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   // Assertions based on the content of your Home component
// //   expect(screen.getByText(/User List/)).toBeInTheDocument();
// //   // Add more assertions specific to your Home component
// // });

// // test('renders UserProfile component for /users/:id route', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/users/123']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   // Assertions based on the content of your UserProfile component
// //   expect(screen.getByText(/User Profile/)).toBeInTheDocument();
// //   // Add more assertions specific to your UserProfile component
// // });

// // test('renders UserForm component for /add-user route', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/add-user']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   // Assertions based on the content of your UserForm component
// //   expect(screen.getByText(/Add New User/)).toBeInTheDocument();
// //   // Add more assertions specific to your UserForm component
// // });

// // test('renders NotFound component for unknown route', () => {
// //   render(
// //     <MemoryRouter initialEntries={['/unknown-route']}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   // Assertions based on the content of your NotFound component
// //   expect(screen.getByText(/404/)).toBeInTheDocument();
// //   expect(screen.getByText(/Oops! The requested page could not be found/)).toBeInTheDocument();
// //   // Add more assertions specific to your NotFound component
// // });
