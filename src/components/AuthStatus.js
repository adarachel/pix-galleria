import React, { useEffect, useState } from 'react';
import { firebaseAuth } from '../firebase';

function AuthStatus() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen for changes in the authentication state
        const unsubscribe = firebaseAuth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is signed in
                setUser(authUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? (
                <p>Welcome, {user.email}! You are logged in.</p>
            ) : null /* Display nothing when user is not logged in */}
        </div>
    );
}

export default AuthStatus;
