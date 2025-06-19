import React, { useState } from "react";
import { data } from "./data"; // Importa los datos desde el archivo data.ts

const Tabla2: React.FC = () => {
    const [toast, setToast] = useState<{ message: string; type: "edit" | "remove" | null }>({ message: "", type: null });

    const showToast = (message: string, type: "edit" | "remove") => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: "", type: null }), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-8 px-2">
            {/* Toast Notification */}
            {toast.type && (
                <div
                    className={`
                        fixed top-6 right-6 z-50
                        px-6 py-3 rounded-lg shadow-lg flex items-center
                        text-white font-semibold
                        transition-all duration-500
                        animate-slide-in
                        ${toast.type === "edit" ? "bg-blue-500" : "bg-red-500"}
                    `}
                    style={{ animation: "slide-in 0.5s, fade-out 0.5s 1.5s" }}
                >
                    {toast.message}
                </div>
            )}
            {/* Toast Animations */}
            <style>
                {`
                @keyframes slide-in {
                    0% { opacity: 0; transform: translateY(-30px) scale(0.95);}
                    100% { opacity: 1; transform: translateY(0) scale(1);}
                }
                @keyframes fade-out {
                    to { opacity: 0; }
                }
                .animate-slide-in {
                    animation: slide-in 0.5s, fade-out 0.5s 1.5s forwards;
                }
                `}
            </style>
            <nav className="bg-white shadow-md rounded-lg mb-8 p-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="text-blue-700 font-extrabold text-2xl tracking-wide">Portfolio-AD</div>
                    <ul className="flex flex-wrap space-x-4 mt-2 md:mt-0">
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-100 text-blue-800 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left font-bold">Company</th>
                            <th className="py-3 px-6 text-left font-bold">Country</th>
                            <th className="py-3 px-6 text-left font-bold">Status</th>
                            <th className="py-3 px-6 text-left font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-150"
                            >
                                <td className="py-3 px-6 text-gray-800">{row.company}</td>
                                <td className="py-3 px-6 text-gray-800">{row.country}</td>
                                <td className="py-3 px-6">
                                    <span className={`rounded-full ${row.status.color} py-1 px-4 text-xs font-bold`}>
                                        {row.status.label}
                                    </span>
                                </td>
                                <td className="py-3 px-6 flex space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 underline font-semibold transition-colors duration-200"
                                        onClick={() => showToast("Edit action triggered!", "edit")}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-600 underline font-semibold transition-colors duration-200"
                                        onClick={() => showToast("Remove action triggered!", "remove")}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tabla2;