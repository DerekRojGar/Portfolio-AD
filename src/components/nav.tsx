import React from "react";

const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full z-30 bg-gradient-to-tr from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md text-gray-200 shadow-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
                    {/* Logo alineado a la izquierda, igual que en el footer */}
                    <div className="text-left w-full md:w-auto mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-purple-400 drop-shadow">Devasive</h2>
                    </div>
                    {/* Links de navegación */}
                    <div className="flex flex-col md:flex-row w-full md:w-auto items-center md:space-x-4 space-y-2 md:space-y-0 md:justify-end">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 rounded-full font-medium text-base transition-all duration-200
                                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white 
                                    bg-gray-800/40 hover:shadow-lg outline-none w-full md:w-auto text-center"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;