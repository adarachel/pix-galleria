import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome.</h1>
            <p>Acceptable Credentials:</p>
            <p>Email: user@example.com <br /> Password: 1Password</p>

            <div>
                <Link to="/register">
                    <button className="register-button">Register</button>
                </Link>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
