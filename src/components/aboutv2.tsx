import React from "react";

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

const AboutV2: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <section
            id="sobre-nosotros"
            style={{
                background: "linear-gradient(120deg, #f5f8ff 0%, #eaf0fb 100%)",
                padding: isMobile ? "0" : "0",
                maxWidth: 980,
                margin: isMobile ? "32px 8px" : "64px auto",
                borderRadius: "32px",
                boxShadow: "0 4px 32px rgba(17,29,81,0.10)",
                overflow: "hidden",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "stretch",
                minHeight: isMobile ? 0 : 420,
                width: "100%",
            }}
        >
            <div
                style={{
                    flex: 2,
                    minWidth: isMobile ? "unset" : 320,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: isMobile ? "32px 16px" : "56px 48px 56px 56px",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(2px)",
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
                    Acerca de Nosotros
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <p
                        style={{
                            color: "#1a2a5c",
                            lineHeight: 1.8,
                            fontFamily: "'Open Sans', Arial, sans-serif",
                            fontSize: isMobile ? "1rem" : "1.08rem",
                            margin: 0,
                            opacity: 0.96,
                        }}
                    >
                        Somos una empresa innovadora dedicada a revolucionar la automatización de software mediante inteligencia artificial y agentes inteligentes. Nuestra misión es crear, implementar y mantener agentes inteligentes utilizando herramientas de automatización de vanguardia, empoderando a negocios de todos los tamaños para optimizar sus procesos y alcanzar su máximo potencial.
                    </p>
                    <p
                        style={{
                            color: "#1a2a5c",
                            lineHeight: 1.8,
                            fontFamily: "'Open Sans', Arial, sans-serif",
                            fontSize: isMobile ? "1rem" : "1.08rem",
                            margin: 0,
                            opacity: 0.96,
                        }}
                    >
                        Nuestra visión es ser la empresa líder en democratizar el acceso a la inteligencia artificial, convirtiéndonos en el aliado estratégico que impulsa la transformación digital a través de soluciones confiables, fáciles de usar y escalables.
                    </p>
                    <p
                        style={{
                            color: "#1a2a5c",
                            lineHeight: 1.8,
                            fontFamily: "'Open Sans', Arial, sans-serif",
                            fontSize: isMobile ? "1rem" : "1.08rem",
                            margin: 0,
                            opacity: 0.96,
                        }}
                    >
                        Ofrecemos servicios de automatización de software basados en IA, diseñados para adaptarse a las necesidades únicas de nuestros clientes. Nos distinguimos por nuestro compromiso con la innovación, la accesibilidad y la calidad, asegurando que cada solución sea flexible, adaptable y éticamente responsable.
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "32px",
                        flexWrap: isMobile ? "wrap" : "nowrap",
                    }}
                >
                    {["Empatía", "IA Ética", "Transparencia", "Flexibilidad", "Adaptabilidad"].map((txt) => (
                        <span
                            key={txt}
                            style={{
                                background: "#4f8cff22",
                                color: "#4f8cff",
                                borderRadius: "16px",
                                padding: isMobile ? "6px 12px" : "6px 18px",
                                fontWeight: 600,
                                fontSize: "0.98rem",
                                letterSpacing: "0.5px",
                                fontFamily: "'Montserrat', Arial, sans-serif",
                                marginBottom: isMobile ? "6px" : 0,
                            }}
                        >
                            {txt}
                        </span>
                    ))}
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    minWidth: isMobile ? "unset" : 260,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isMobile
                        ? "linear-gradient(120deg, #eaf0fb 60%, #f5f8ff 100%)"
                        : "linear-gradient(120deg, #eaf0fb 60%, #f5f8ff 100%)",
                    position: "relative",
                    minHeight: isMobile ? 180 : "unset",
                    padding: isMobile ? "24px 0" : 0,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "10%",
                        width: "80%",
                        height: "80%",
                        zIndex: 0,
                        background: "radial-gradient(circle at 60% 40%, #4f8cff22 0%, transparent 80%)",
                        borderRadius: "24px",
                        filter: "blur(2px)",
                    }}
                />
                <img
                    src="src/assets/tecnotec.png"
                    alt="Inteligencia Artificial y Automatización"
                    style={{
                        maxWidth: isMobile ? "70%" : "88%",
                        height: "auto",
                        borderRadius: "24px",
                        boxShadow: "0 4px 24px rgba(17,29,81,0.13)",
                        zIndex: 1,
                        position: "relative",
                        border: "3px solid #fff",
                        background: "#f5f8ff",
                    }}
                />
            </div>
        </section>
    );
};

export default AboutV2;
