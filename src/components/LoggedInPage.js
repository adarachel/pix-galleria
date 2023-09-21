import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import Gallery from './Gallery';
import Search from './Search';
import { firebaseAuth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../LoggedInPage.css';

function LoggedInPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth);
            // Redirect to the login page after successful logout
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

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