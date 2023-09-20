import React, { useEffect } from 'react';
import '../Reorder.css';

const ReorderFeedback = ({ show, onClose }) => {
    useEffect(() => {
        let timeout;
        if (show) {
            // Show the message for a few seconds and then hide it
            timeout = setTimeout(() => {
                onClose();
            }, 3000); // Adjust the duration as needed
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [show, onClose]);

    return (
        <div className={`reorder-feedback ${show ? 'show' : ''}`}>
            Image successfully reordered!
        </div>
    );
};

export default ReorderFeedback;
