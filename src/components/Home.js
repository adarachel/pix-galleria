import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Welcome to Our Image Gallery</h2>
            <p>Explore and enjoy our collection of images.</p>

            <div>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
