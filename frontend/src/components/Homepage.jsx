import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Success from './Success';

const Homepage = () => {
    const [currentView, setCurrentView] = useState('signup');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSuccess = (message) => {
        setSuccessMessage(message);
        setCurrentView('success');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                {successMessage && <Success message={successMessage} />}
                {currentView === 'signup' && !successMessage && (
                    <div>
                        <SignUp onSuccess={() => handleSuccess('Sign up successful!')} />
                        <p className="mt-4 text-center">
                            Already have an account?{' '}
                            <button
                                className="text-blue-500"
                                onClick={() => setCurrentView('signin')}
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                )}
                {currentView === 'signin' && !successMessage && (
                    <div>
                        <SignIn onSuccess={() => handleSuccess('Sign in successful!')} />
                        <p className="mt-4 text-center">
                            Don't have an account?{' '}
                            <button
                                className="text-blue-500"
                                onClick={() => setCurrentView('signup')}
                            >
                                Sign Up
                            </button>
                        </p> 
                    </div>
                )}
            </div>
        </div>
    );
};

export default Homepage;