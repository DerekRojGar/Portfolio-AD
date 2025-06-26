import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Nosotros", href: "#sobre-nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detecta si es escritorio y actualiza el estado
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setOpen(false); // Cierra el menú en escritorio
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll suave personalizado para "Nosotros" y "Servicios"
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        // Animación personalizada de desplazamiento con ease-out más suave y lenta
        const y = section.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const duration = 1200; // 1.2 segundos
        let start: number | null = null;
        function easeOutCubic(t: number) {
          return 1 - Math.pow(1 - t, 3);
        }
        function step(timestamp: number) {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = easeOutCubic(progress);
          window.scrollTo(0, startY + (y - startY) * eased);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        }
        window.requestAnimationFrame(step);
        setOpen(false);
      }
    };

    if (href === "#sobre-nosotros") {
      e.preventDefault();
      scrollToSection("sobre-nosotros");
    } else if (href === "#servicios") {
      e.preventDefault();
      scrollToSection("servicios");
    } else {
      setOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-30 bg-white backdrop-blur-md text-gray-800 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
          {/* Logo alineado a la izquierda */}
          <div className="text-left w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-400 drop-shadow">
              Devasive
            </h2>
          </div>
          {/* Dropdown para mobile */}
          {!isDesktop && (
            <div className="w-full flex justify-center mb-2">
              <button
                onClick={() => setOpen(!open)}
                className="
                  relative inline-block rounded-full p-[2px] transition-all duration-200
                  bg-gradient-to-r from-purple-500 to-blue-500
                  hover:from-purple-600 hover:to-blue-600
                "
                aria-label="Abrir menú"
              >
                <span
                  className="
                    flex items-center justify-center
                    px-5 py-2 rounded-full font-medium text-base
                    bg-white text-gray-800
                    transition-all duration-200
                    hover:text-purple-700
                  "
                  style={{
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-2xl">⋯</span>
                </span>
              </button>
            </div>
          )}
          {/* Links de navegación */}
          <div
            className={`
              flex-col w-full
              ${isDesktop ? "flex" : open ? "flex" : "hidden"}
              md:flex md:flex-row md:w-auto items-center md:space-x-4 space-y-2 md:space-y-0 md:justify-end
              transition-all duration-300
            `}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  relative inline-block rounded-full p-[2px] transition-all duration-200
                  bg-gradient-to-r from-purple-500 to-blue-500
                  hover:from-purple-600 hover:to-blue-600
                  w-full md:w-auto
                "
              >
                <span
                  className="
                    flex items-center justify-center
                    px-5 py-2 rounded-full font-medium text-base
                    bg-white text-gray-800
                    transition-all duration-200
                    hover:text-purple-700
                  "
                  style={{
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                  }}
                >
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
