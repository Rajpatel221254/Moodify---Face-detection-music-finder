import React, { useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router';
import './navbar.scss';

const Navbar = () => {
    const { user, handleLogout } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const onLogout = async () => {
        await handleLogout();
        navigate('/login');
    };

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <nav className="navbar">
                <a href="/" className="navbar__brand">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                    <span className="logo-text">Moodify</span>
                </a>

                {/* Desktop Actions */}
                <div className="navbar__actions">
                    {user && (
                        <div className="user-greeting">
                            Welcome, <span>{user.username || 'Music Fan'}</span>
                        </div>
                    )}
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? (
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {user && (
                    <div className="user-greeting">
                        Welcome, <span>{user.username || 'Music Fan'}</span>
                    </div>
                )}
                <button className="logout-btn" onClick={() => {
                    toggleMenu();
                    onLogout();
                }}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default Navbar;
