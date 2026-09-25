import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

const UseAuthNavigation = () => {

    const navigate = useNavigate();
    const {isSignedIn} = useUser();
    const {openSignIn} = useClerk();

    const handleProtectedNavigation = (targetRoute = '/ai') => {
        if(isSignedIn) {
            navigate(targetRoute);
        }
        else {
            openSignIn();
        }
    }
    return (
        {
            isSignedIn,
            navigate,
            handleProtectedNavigation,
        }
    )
}

export default UseAuthNavigation;