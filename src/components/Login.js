import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../firebase';
import { firebaseAuth } from '../firebase';
import { Navigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        // Check if the provided email and password match the predefined credentials
        if (email === 'user@example.com' && password === '1Password') {
            try {
                await signInWithEmailAndPassword(firebaseAuth, email, password);
                setLoggedIn(true);
            } catch (error) {
                setError(error.message);
            }
        } else {
            setError('Invalid email or password. Please use the provided credentials.');
        }
    };

    if (loggedIn) {
        return <Navigate to="/loggedin" />;
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
            <div>
                <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Login;
