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

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(
        window.innerWidth <= 700
    );
    React.useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return isMobile;
};

const ServicesSection: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <section
            id="servicios"
            style={{
                background: "linear-gradient(120deg, #f5f8ff 0%, #eaf0fb 100%)",
                padding: isMobile ? "0" : "0",
                maxWidth: 980,
                margin: isMobile ? "32px 8px" : "64px auto",
                borderRadius: "32px",
                boxShadow: "0 4px 32px rgba(17,29,81,0.10)",
                overflow: "hidden",
                minHeight: isMobile ? 0 : 420,
                width: "100%",
            }}
        >
            {/* Decorative blurred shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div
                style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(2px)",
                    borderRadius: "32px",
                    padding: isMobile ? "32px 16px" : "56px 48px 56px 56px",
                }}
            >
                <h2
                    style={{
                        color: "#0b1336",
                        marginBottom: "28px",
                        fontSize: isMobile ? "1.5rem" : "2.4rem",
                        fontWeight: 800,
                        fontFamily: "'Montserrat', Arial, sans-serif",
                        lineHeight: 1.1,
                        letterSpacing: "1.2px",
                        background: "linear-gradient(90deg, #4f8cff 10%, #0b1336 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        borderLeft: "4px solid #4f8cff",
                        paddingLeft: "16px",
                    }}
                >
                    Servicios
                </h2>
                <p
                    style={{
                        color: "#1a2a5c",
                        lineHeight: 1.8,
                        fontFamily: "'Open Sans', Arial, sans-serif",
                        fontSize: isMobile ? "1rem" : "1.08rem",
                        margin: 0,
                        opacity: 0.96,
                        marginBottom: "32px",
                        textAlign: "left",
                        maxWidth: 700,
                    }}
                >
                    Soluciones digitales a medida para potenciar tu presencia online y optimizar tus procesos.
                </p>
                <div
                    className="grid"
                    style={{
                        gap: isMobile ? 24 : 32,
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        marginTop: isMobile ? 16 : 32,
                    }}
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: "#fff",
                                border: "1px solid #e0e7ff",
                                borderRadius: "24px",
                                padding: isMobile ? "24px" : "32px",
                                boxShadow: "0 2px 16px rgba(80,100,200,0.07)",
                                transition: "box-shadow 0.3s, border 0.3s, transform 0.3s",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            className="group hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-400"
                        >
                            {/* Animated background accent */}
                            <span className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-70 transition duration-700 blur-2xl"></span>
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-gradient-to-tr from-indigo-100 to-indigo-300 rounded-2xl p-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.35rem",
                                    fontWeight: 700,
                                    color: "#0b1336",
                                    marginBottom: "12px",
                                    fontFamily: "'Montserrat', Arial, sans-serif",
                                    transition: "color 0.3s",
                                }}
                                className="group-hover:text-indigo-600 drop-shadow"
                            >
                                {service.title}
                            </h3>
                            <p
                                style={{
                                    color: "#4b5563",
                                    fontSize: "1rem",
                                    lineHeight: 1.7,
                                    marginBottom: 0,
                                }}
                            >
                                {service.description}
                            </p>
                            {/* Decorative line */}
                            <div className="mt-8 h-1 w-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;