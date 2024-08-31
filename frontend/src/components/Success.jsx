import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message || 'Operation successful!';

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-green-100 border border-green-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Success!</h2>
            <p className="text-lg mb-4">{message}</p>
            <div className='flex justify-between'>
                <Link to="/" className="text-blue-500 underline">Go to Home</Link>
                <button 
                    onClick={() => navigate('/total')} 
                    className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                    Go to Mainpage
            </button>
            </div>
        </div>
    );
};

export default Success;
