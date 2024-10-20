import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      
      <Link
        to="/"
        className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
