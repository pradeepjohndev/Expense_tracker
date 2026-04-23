import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full">
                <h1 className="text-8xl md:text-9xl font-extrabold text-purple-600 mb-4 animate-pulse">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Page Not Found</h2>

                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or got moved.
                    Don't worry, you can head back safely.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <button className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 hover:cursor-pointer">
                            Go Home
                        </button>
                    </Link>

                    <button onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 border border-amber-500 text-amber-600 font-medium rounded-lg hover:bg-amber-50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 hover:cursor-pointer">
                        Go Back
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NotFound;