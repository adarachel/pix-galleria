import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import Gallery from './Gallery';
import Search from './Search';
import { firebaseAuth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../LoggedInPage.css';

function LoggedInPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth);
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    useEffect(() => {
        // Check for user authentication state in local storage on component mount
        const savedUser = localStorage.getItem('user');
        if (!savedUser) {
            // If user is not authenticated, navigate to login page
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <div className="header">
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Gallery searchQuery={searchQuery} />
        </div>
    );
}

export default LoggedInPage;