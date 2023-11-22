// Navbar.js
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../utils/contexts/ThemeContext';
import { CustomNavLink } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();


  return (
    <nav
      className={`navbar container-fluid navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'primary' : 'info'}`}
    >
      <div className="container">
        <CustomNavLink className='navbar-brand' darkMode={darkMode}>
            User Dashboard
        </CustomNavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen && 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
                <CustomNavLink to="/" darkMode={darkMode}>
                    Home
                </CustomNavLink>
            </li>
            <li className="nav-item">
                <CustomNavLink to="/add-user" darkMode={darkMode}>
                    Add User
                </CustomNavLink>
            </li>
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
