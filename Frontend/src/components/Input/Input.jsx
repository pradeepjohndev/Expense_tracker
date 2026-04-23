import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Input({ type, value, onChange, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative mb-4">
            <input
                type={type === "password" ? (showPassword ? "text" : "password") : type} placeholder={placeholder}
                className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                value={value} onChange={onChange} />

            {type === "password" && (
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition">
                    {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
            )}
        </div>
    );
}