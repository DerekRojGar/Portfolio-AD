import React from "react";
import { data } from "./data"; // Importa los datos desde el archivo data.ts

const Tabla2: React.FC = () => (
    <table className="border-collapse w-full">
        <thead>
            <nav className="bg-gray-200 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-gray-600 font-bold text-xl">Portfolio-AD</div>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-400 font-semibold">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-400 font-semibold">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-400 font-semibold">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 hover:text-blue-400 font-semibold">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </thead>
        <tbody>
            {data.map((row, idx) => (
                <tr
                    key={idx}
                    className="bg-white lg:hover:bg-gray-100 table-row"
                >
                    <td className="p-3 text-gray-800 border border-b table-cell">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase hidden">
                            Company name
                        </span>
                        {row.company}
                    </td>
                    <td className="p-3 text-gray-800 border border-b table-cell">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase hidden">
                            Country
                        </span>
                        {row.country}
                    </td>
                    <td className="p-3 text-gray-800 border border-b table-cell">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase hidden">
                            Status
                        </span>
                        <span className={`rounded ${row.status.color} py-1 px-3 text-xs font-bold`}>
                            {row.status.label}
                        </span>
                    </td>
                    <td className="p-3 text-gray-800 border border-b table-cell">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase hidden">
                            Actions
                        </span>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline">
                            Edit
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">
                            Remove
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Tabla2;