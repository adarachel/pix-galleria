import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../firebase';
import { firebaseAuth } from '../firebase'; // Import signInWithEmailAndPassword
import { Link } from 'react-router-dom';
import '../Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [registered, setRegistered] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        // Check if the provided email and password match the predefined credentials
        if (email === 'user@example.com' && password === '1Password') {
            try {
                // Create a new user with email and password
                await createUserWithEmailAndPassword(firebaseAuth, email, password);
                // If registration is successful, set registered to true
                setRegistered(true);
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') { // Check for email-already-in-use error
                    setError('This email address is already registered. Please return to the homepage and log in instead.');
                } else {
                    setError('Invalid email or password. Please use the acceptable credentials.');
                }
            }
        } else {
            setError('Invalid email or password. Please use the acceptable credentials.');
        }
    }

    return (
        <div>
            <h2>Register</h2>
            {registered ? (
                <div>
                    <p>{`Welcome, ${email}! You have registered successfully! You can now log in.`}</p>
                    <Link to="/login">Click here to Login</Link>
                </div>
            ) : (
                <form onSubmit={handleRegister}>
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
                    <button type="submit">Register</button>
                </form>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Register;
