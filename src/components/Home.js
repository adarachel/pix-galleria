import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome to Pix Galleria!</h1>
            <h2> An image gallery that showcases a collection of images. It is equipped with user log in authentication and an image drag-and-drop feature.</h2>
            <h4>created by Ada Rachel Oyeoka</h4>
            <p>Explore and enjoy our collection of images.</p>

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
