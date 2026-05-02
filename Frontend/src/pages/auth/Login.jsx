import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../components/Input/Input'
import { MdAttachMoney } from "react-icons/md";
import axiosInstance from "../../utils/axiosinstance";
import { API_PATHS } from "../../utils/apipath";
import { UserContext } from "../../context/userContext";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { updateUser } = useContext(UserContext);

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Enter a valid Gmail address");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");

        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email,
                password,
            });
            const { token, user } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                updateUser(user)
                navigate('/home');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || "login failed. please try again later");
            }
            else {
                setError("something went wrong. please try again later");
            }
        }

    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200">
            <div className="w-11/12 max-w-5xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl flex overflow-hidden">
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back to Fintrack</h2>
                    <p className="text-gray-600 mb-6">Login to your account</p>

                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input type="email" placeholder="Email address" className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input type="password" placeholder="Password" className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={password} onChange={(e) => setPassword(e.target.value)} />

                        {error && (<p className="text-red-500 text-sm mb-3">{error}</p>)}

                        <button type="submit" className="bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold hover:cursor-pointer">
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link to="/Sign" className="text-purple-600 font-medium hover:cursor-pointer hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>

                <div className="hidden md:flex w-1/2 bg-linear-to-br from-purple-600 to-indigo-700 text-white items-center justify-center p-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Hello there!</h1>
                        <p className="text-lg opacity-90">
                            Happy to see you again here let's together save some <span className="text-purple-300"><MdAttachMoney className="inline-block align-middle" />bucks.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;