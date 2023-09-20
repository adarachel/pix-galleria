import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';

function LoggedInPage() {
    return (
        <div>
            <h2>Welcome to Pix Galleria! You are logged in.</h2>
            <Gallery />
            <Link to="/">Go back to Home</Link> {/* Link to navigate back to the home page */}
        </div>
    );
}

export default LoggedInPage;
