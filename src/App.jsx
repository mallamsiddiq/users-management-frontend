// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import UserForm from './pages/UserForm';
import Navbar from './components/Navbar';
import { ErrorProvider } from './utils/contexts/ErrorContext';
import { ThemeProvider } from './utils/contexts/ThemeContext';
import PopupMessage from './components/PopupMessage';
import ThemedContainer from './components/ThemedContainer';
import NotFound from './components/NotFound';
import './App.css'; // Import your app.css file

function App() {
  return (
    <ThemeProvider>
      <ErrorProvider>
        <Router>
          <div className="app">
            <Navbar />
            <ThemedContainer>
              <PopupMessage/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:id" element={<UserProfile />} />
                <Route path="/add-user" element={<UserForm />} />
                {/* <Route path="/update-user/:id" element={<UserForm />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ThemedContainer>
          </div>
        </Router>
      </ErrorProvider>
    </ThemeProvider>
  );
}


export default App;