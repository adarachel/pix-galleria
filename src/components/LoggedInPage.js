import React from 'react';
import { Link } from 'react-router-dom';
import AuthStatus from './AuthStatus';

function LoggedInPage() {
    return (
        <div>
            <h2>Logged In Page</h2>
            <AuthStatus /> {/* Display the user status */}
            <p>This is a protected page for logged-in users.</p>
            <Link to="/">Go back to Home</Link> {/* Link to navigate back to the home page */}
        </div>
    );
}

export default LoggedInPage;
