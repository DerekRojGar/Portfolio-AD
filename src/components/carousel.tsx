import React, { useState } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        alt: "Paisaje de montaña",
        label: "First Slide"
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80",
        alt: "Bosque en la niebla"
    },
    {
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
        alt: "Ciudad de noche"
    }
];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);
    React.useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return isMobile;
};

const Carousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const isMobile = useIsMobile();

    const goToPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const goToNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const goToSlide = (idx: number) => setCurrent(idx);

    return (
        <section
            style={{
                width: "100vw",
                position: "relative",
                margin: isMobile ? "24px 0" : "48px 0",
                left: "50%",
                right: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
                borderRadius: 0,
                background: "#fff",
            }}
        >
            <div
                className="relative"
                style={{
                    width: "100vw",
                    height: isMobile ? "220px" : "420px",
                    minHeight: isMobile ? 180 : 320,
                }}
            >
                {images.map((img, idx) => (
                    <div
                        key={img.src}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            opacity: idx === current ? 1 : 0,
                            zIndex: idx === current ? 2 : 1,
                            pointerEvents: idx === current ? "auto" : "none",
                            transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
                            transform: idx === current ? "scale(1)" : "scale(0.98)",
                            willChange: "opacity, transform",
                        }}
                        aria-hidden={idx !== current}
                    >
                        {img.label && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontSize: isMobile ? "1.1rem" : "1.5rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                                    background: "rgba(0,0,0,0.18)",
                                    borderRadius: "12px",
                                    padding: "4px 18px",
                                    letterSpacing: "0.5px",
                                    opacity: 0.85,
                                }}
                            >
                                {img.label}
                            </span>
                        )}
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                width: "100vw",
                                height: isMobile ? "220px" : "420px",
                                objectFit: "cover",
                                borderRadius: 0,
                                boxShadow: "none",
                                display: "block",
                                margin: 0,
                                padding: 0,
                            }}
                        />
                    </div>
                ))}
                {/* Slider controls */}
                <button
                    type="button"
                    aria-label="Anterior"
                    className="absolute top-1/2 left-4 z-30 flex items-center justify-center"
                    onClick={goToPrev}
                    style={{
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.7)",
                        border: "none",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        boxShadow: "0 1px 6px rgba(80,100,200,0.07)",
                        transition: "background 0.2s",
                        outline: "none",
                        cursor: "pointer",
                        opacity: 0.85,
                    }}
                >
                    <svg width={18} height={18} viewBox="0 0 24 24" stroke="#4f8cff" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button
                    type="button"
                    aria-label="Siguiente"
                    className="absolute top-1/2 right-4 z-30 flex items-center justify-center"
                    onClick={goToNext}
                    style={{
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.7)",
                        border: "none",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        boxShadow: "0 1px 6px rgba(80,100,200,0.07)",
                        transition: "background 0.2s",
                        outline: "none",
                        cursor: "pointer",
                        opacity: 0.85,
                    }}
                >
                    <svg width={18} height={18} viewBox="0 0 24 24" stroke="#4f8cff" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
                {/* Slider indicators */}
                <div
                    className="flex absolute bottom-4 left-1/2 z-30"
                    style={{
                        transform: "translateX(-50%)",
                        gap: 8,
                    }}
                >
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            aria-label={`Slide ${idx + 1}`}
                            onClick={() => goToSlide(idx)}
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: current === idx ? "#4f8cff" : "#dbeafe",
                                border: "none",
                                transition: "background 0.2s",
                                outline: "none",
                                cursor: "pointer",
                                opacity: current === idx ? 1 : 0.7,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;