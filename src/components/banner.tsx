import React from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);
    React.useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return isMobile;
};

const Banner: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <section
            style={{
                width: "100%",
                minHeight: "100vh",
                height: "100dvh",
                background: "linear-gradient(120deg, #f5f8ff 0%, #eaf0fb 100%)",
                borderRadius: "0 0 32px 32px",
                boxShadow: "0 4px 32px rgba(17,29,81,0.08)",
                margin: 0,
                padding: isMobile ? "32px 12px 24px 12px" : "56px 0 40px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: 980,
                    gap: isMobile ? 18 : 36,
                }}
            >
                <img
                    src="src/assets/tecnotec.png"
                    alt="Logo Devasive"
                    style={{
                        width: isMobile ? 90 : 140,
                        height: "auto",
                        borderRadius: "24px",
                        boxShadow: "0 2px 16px rgba(80,100,200,0.10)",
                        background: "#fff",
                        marginBottom: isMobile ? 12 : 0,
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    <h1
                        style={{
                            fontSize: isMobile ? "2rem" : "2.8rem",
                            fontWeight: 800,
                            color: "#0b1336",
                            fontFamily: "'Montserrat', Arial, sans-serif",
                            lineHeight: 1.1,
                            marginBottom: 10,
                            background: "linear-gradient(90deg, #4f8cff 10%, #0b1336 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Devasive
                    </h1>
                    <p
                        style={{
                            color: "#1a2a5c",
                            fontSize: isMobile ? "1.08rem" : "1.18rem",
                            fontFamily: "'Open Sans', Arial, sans-serif",
                            opacity: 0.92,
                            margin: 0,
                        }}
                    >
                        Automatización y soluciones inteligentes para tu negocio. Impulsamos tu transformación digital con IA y tecnología de vanguardia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
