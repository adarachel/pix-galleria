import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LoggedInPage from './components/LoggedInPage';
import GalleryPage from './components/GalleryPage';
import Home from './components/Home';
import Gallery from './components/Gallery';
import galleryData from './components/data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loggedin" element={<LoggedInPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery data={galleryData} />} />
      </Routes>
    </Router>
  );
}

// Wrap your App component with DndProvider
const WrappedApp = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
};

export default WrappedApp; // Export only WrappedApp as the default export
