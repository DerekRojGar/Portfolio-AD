import React from "react";

const About: React.FC = () => (
    <div
        id="sobre-nosotros"
        style={{
            background: "transparent",
            padding: "32px 24px",
            maxWidth: 1000,
            margin: "40px auto",
            display: "flex",
            alignItems: "flex-start",
            gap: "40px",
        }}
    >
        <div style={{ flex: 2 }}>
            <h2
                style={{
                    color: "#0b1336",
                    textAlign: "center",
                    marginBottom: "28px",
                    letterSpacing: "1px",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    fontFamily: "'Montserrat', Arial, sans-serif",
                }}
            >
                Acerca de Nosotros
            </h2>
            <p
                style={{
                    color: "#17276d",
                    lineHeight: 1.9,
                    marginBottom: "22px",
                    fontFamily: "'Open Sans', Arial, sans-serif",
                    textAlign: "justify",
                    fontSize: "1.18rem",
                }}
            >
                Somos una empresa innovadora dedicada a revolucionar la automatización de software mediante inteligencia artificial y agentes inteligentes. Nuestra misión es crear, implementar y mantener agentes inteligentes utilizando herramientas de automatización de vanguardia, empoderando a negocios de todos los tamaños para optimizar sus procesos y alcanzar su máximo potencial.
            </p>
            <p
                style={{
                    color: "#17276d",
                    lineHeight: 1.9,
                    marginBottom: "22px",
                    fontFamily: "'Open Sans', Arial, sans-serif",
                    textAlign: "justify",
                    fontSize: "1.18rem",
                }}
            >
                Nuestra visión es ser la empresa líder en democratizar el acceso a la inteligencia artificial, convirtiéndonos en el aliado estratégico que impulsa la transformación digital a través de soluciones confiables, fáciles de usar y escalables. Queremos que la IA sea accesible para todo tipo de empresas, desde startups hasta grandes corporaciones, transformando la manera en que operan y crecen.
            </p>
            <p
                style={{
                    color: "#17276d",
                    lineHeight: 1.9,
                    fontFamily: "'Open Sans', Arial, sans-serif",
                    textAlign: "justify",
                    fontSize: "1.18rem",
                }}
            >
                Ofrecemos servicios de automatización de software basados en IA, diseñados para adaptarse a las necesidades únicas de nuestros clientes. Nos distinguimos por nuestro compromiso con la innovación, la accesibilidad y la calidad, asegurando que cada solución sea flexible, adaptable y éticamente responsable. Nuestros valores —empatía, IA ética, transparencia, flexibilidad y adaptabilidad— guían cada paso que damos, desde el diseño hasta la implementación, para construir relaciones de confianza con nuestros clientes.
            </p>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
                src="src/assets/tecnotec.png"
                alt="Inteligencia Artificial y Automatización"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "18px",
                    boxShadow: "0 4px 24px rgba(17,29,81,0.12)",
                }}
            />
        </div>
    </div>
);

export default About;
