import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Search from './Search';
import '../GalleryPage.css';

function GalleryPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Gallery searchQuery={searchQuery} />
            <Link to="/">
                <button className="home-button">Go Back to the Homepage</button>
            </Link>
            <Link to="/loggedin">
                <button className="loggedin-button">Go back to Logged In Page</button>
            </Link>
        </div>
    );
}


export default GalleryPage;