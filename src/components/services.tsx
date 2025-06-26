import React from "react";

const services = [
    {
        title: "Desarrollo Web",
        description: "Sitios web modernos, rápidos y responsivos adaptados a tus necesidades.",
        icon: (
            <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                <path d="M16 3v4H8V3" />
            </svg>
        ),
    },
    {
        title: "UI/UX Design",
        description: "Interfaces limpias y experiencias de usuario intuitivas para tus productos.",
        icon: (
            <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
            </svg>
        ),
    },
    {
        title: "Consultoría Tech",
        description: "Te ayudo a tomar las mejores decisiones tecnológicas para tu negocio.",
        icon: (
            <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m4-4h.01" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
    },
];

const gradientBg =
    "bg-gradient-to-br from-indigo-100 via-white to-indigo-200";

const ServicesSection: React.FC = () => (
    <section id="servicios" className={`py-16 mb-8 md:mb-16 ${gradientBg} relative overflow-hidden`}>
        {/* Decorative blurred shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center tracking-tight drop-shadow-lg">
                Servicios
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                Soluciones digitales a medida para potenciar tu presencia online y optimizar tus procesos.
            </p>
            <div className="grid gap-12 md:grid-cols-3">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="group bg-white/90 border border-indigo-100 rounded-3xl p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:border-indigo-400 relative overflow-hidden"
                    >
                        {/* Animated background accent */}
                        <span className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-70 transition duration-700 blur-2xl"></span>
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-gradient-to-tr from-indigo-100 to-indigo-300 rounded-2xl p-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 drop-shadow">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed">{service.description}</p>
                        {/* Decorative line */}
                        <div className="mt-8 h-1 w-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesSection;