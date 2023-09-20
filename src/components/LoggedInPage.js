import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInPage() {

    return (
        <div>
            <h1>Welcome to Pix Galleria! <br /> You are logged in.</h1>
            <br />
            <ul>More About Pix Galleria:
                <li>It is a MEME gallery! </li>
                <li>A grid layout that showcases a collection of meme images.</li>
                <li>It has a loading state for when images are not ready for display. </li>
                <li>It has a search field that filters the image list based on the tags added to the images.</li>
                <li>Users can drag and drop images within the gallery.</li>
                <li>When an image is rearranged, feedback is provided.</li>
                <li>The gallery is responsive to desktops, tablets and mobile phones.</li>
            </ul>
            <Link to="/gallerypage">Click Here to Visit the Gallery</Link>
        </div>
    );
}


export default LoggedInPage;
