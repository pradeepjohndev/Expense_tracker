import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { MdAttachMoney } from "react-icons/md";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Enter a valid Gmail address");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        console.log(email, password);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200">
            <div className="w-11/12 max-w-5xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl flex overflow-hidden">
                <div className="hidden md:flex w-1/2 bg-linear-to-br from-indigo-600 to-purple-700 text-white items-center justify-center p-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">New here?</h1>
                        <p className="text-lg opacity-90">
                            Create your account and save some <span className="text-purple-300"><MdAttachMoney className="inline-block align-middle" />bucks.</span>
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-600 mb-6">Sign up to get started</p>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input type="email" placeholder="Email address" className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />

                        {error && (<p className="text-red-500 text-sm mt-3">{error}</p>)}

                        <button type="submit" className="mt-5 bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold hover:cursor-pointer" >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}