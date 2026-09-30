import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AvesModal from "./AvesModal";

const brandColors = {
  title: "#000000",
  bodyText: "#1C1917",
  accentBlue: "#0056b3",
  accentRed: "#dc3545",
  border: "rgba(255, 255, 255, 0.25)",
};

export default function Navbar() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isAvesModalOpen, setIsAvesModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mapScale, setMapScale] = useState(1);
  const mapContainerRef = useRef(null);

  const [birdToggle, setBirdToggle] = useState(0);
  const locationBirds = ["/Martín.webp", "/Pelícano.webp"];

  useEffect(() => {
    const birdInterval = setInterval(() => {
      setBirdToggle((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(birdInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleOpenModal = () => {
    setIsLocationModalOpen(true);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: true } }),
    );
  };

  const handleCloseModal = () => {
    setIsLocationModalOpen(false);
    document.body.style.overflow = "auto";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: false } }),
    );
  };

  const handleOpenAvesModal = () => {
    setIsAvesModalOpen(true);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: true } }),
    );
  };

  const handleCloseAvesModal = () => {
    setIsAvesModalOpen(false);
    document.body.style.overflow = "auto";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: false } }),
    );
  };

  const googleMapsUrl =
    "https://maps.google.com/?q=Barranca+de+Metztitlan+Hidalgo";

  const handleZoomIn = () => setMapScale((prev) => Math.min(prev + 0.4, 3));
  const handleZoomOut = () => setMapScale((prev) => Math.max(prev - 0.4, 1));
  const handleResetZoom = () => setMapScale(1);

  return (
    <>
      <AnimatePresence>
        {!isLocationModalOpen && !isAvesModalOpen && !isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : -20,
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="fixed top-0 w-full z-50 px-4 sm:px-8 md:px-16 py-4 flex justify-between items-center bg-transparent transform-gpu will-change-transform"
          >
            {/* BOTÓN HAMBURGUESA MÓVIL */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(true);
                document.body.style.overflow = "hidden";
                window.dispatchEvent(
                  new CustomEvent("locationModalState", {
                    detail: { isOpen: true },
                  }),
                );
              }}
              className="md:hidden bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.05)] text-black p-2.5 rounded-full border border-white/25 shadow-lg flex items-center justify-center cursor-pointer transform-gpu"
              aria-label="Abrir menú"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* BARRA UNIFICADA DE NAVEGACIÓN CRISTALINA Y TRANSPARENTE */}
            <div
              className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full shadow-lg transform-gpu"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              <a
                href="#home"
                className="px-3.5 py-1.5 rounded-full font-bold text-xs transition-all hover:bg-white/5 no-underline"
                style={{ color: "#000000" }}
              >
                Inicio
              </a>
              <a
                href="#quienes-somos"
                className="px-3.5 py-1.5 rounded-full font-bold text-xs transition-all hover:bg-white/5 no-underline"
                style={{ color: "#000000" }}
              >
                ¿Quiénes somos?
              </a>
              <a
                href="#productos"
                className="px-3.5 py-1.5 rounded-full font-bold text-xs transition-all hover:bg-white/5 no-underline"
                style={{ color: "#000000" }}
              >
                Productos
              </a>
              <a
                href="#contacto"
                className="px-3.5 py-1.5 rounded-full font-bold text-xs transition-all hover:bg-white/5 no-underline"
                style={{ color: "#000000" }}
              >
                Contacto
              </a>
              <button
                onClick={handleOpenAvesModal}
                className="px-3.5 py-1.5 rounded-full font-bold text-xs transition-all hover:bg-white/5 cursor-pointer bg-transparent border-none"
                style={{ color: "#000000" }}
              >
                Aves Residentes
              </button>
            </div>

            {/* BOTÓN DE UBICACIÓN CRISTALINO Y TRANSPARENTE */}
            <button
              onClick={handleOpenModal}
              className="font-bold rounded-full px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest shadow-lg flex items-center gap-2.5 transition-all cursor-pointer transform-gpu"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#000000",
              }}
            >
              <div className="w-6 h-6 relative flex items-center justify-center flex-shrink-0 overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={birdToggle}
                    src={locationBirds[birdToggle]}
                    alt="Ave de ubicación"
                    width="24"
                    height="24"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-contain transform-gpu"
                    onError={(e) => {
                      e.target.src = "/logo-marush.png";
                    }}
                  />
                </AnimatePresence>
              </div>
              <span className="truncate">Hidalgo, México</span>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-transparent flex justify-center items-center p-4 md:hidden transform-gpu">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border rounded-3xl max-w-sm w-full p-6 sm:p-8 text-black shadow-2xl backdrop-blur-2xl relative flex flex-col items-center gap-5 text-center transform-gpu will-change-transform overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: brandColors.border,
              }}
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = "auto";
                  window.dispatchEvent(
                    new CustomEvent("locationModalState", {
                      detail: { isOpen: false },
                    }),
                  );
                }}
                className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-black/20 text-black cursor-pointer transition-all"
              >
                ✕
              </button>

              <div className="mt-1">
                <span
                  style={{ color: brandColors.accentRed }}
                  className="text-[10px] uppercase tracking-[0.4em] font-black block"
                >
                  Navegación
                </span>
                <h3
                  style={{ color: brandColors.title }}
                  className="font-sans text-2xl font-black tracking-tight mt-1"
                >
                  Menú Principal
                </h3>
              </div>

              <div className="flex flex-col gap-2.5 text-sm font-bold text-black w-full">
                <a
                  href="#home"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "auto";
                    window.dispatchEvent(
                      new CustomEvent("locationModalState", {
                        detail: { isOpen: false },
                      }),
                    );
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/25 hover:bg-white/[0.1] transition-colors shadow-sm text-black no-underline"
                >
                  Inicio
                </a>
                <a
                  href="#quienes-somos"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "auto";
                    window.dispatchEvent(
                      new CustomEvent("locationModalState", {
                        detail: { isOpen: false },
                      }),
                    );
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/25 hover:bg-white/[0.1] transition-colors shadow-sm text-black no-underline"
                >
                  ¿Quiénes somos?
                </a>
                <a
                  href="#productos"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "auto";
                    window.dispatchEvent(
                      new CustomEvent("locationModalState", {
                        detail: { isOpen: false },
                      }),
                    );
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/25 hover:bg-white/[0.1] transition-colors shadow-sm text-black no-underline"
                >
                  Productos
                </a>
                <a
                  href="#contacto"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "auto";
                    window.dispatchEvent(
                      new CustomEvent("locationModalState", {
                        detail: { isOpen: false },
                      }),
                    );
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/25 hover:bg-white/[0.1] transition-colors shadow-sm text-black no-underline"
                >
                  Contacto
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleOpenAvesModal();
                  }}
                  style={{ color: "#000000" }}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/25 font-black hover:bg-white/[0.1] transition-colors cursor-pointer w-full text-center shadow-sm"
                >
                  Aves Residentes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL DE UBICACIÓN */}
      <AnimatePresence>
        {isLocationModalOpen && (
          <div className="fixed inset-0 z-50 bg-transparent flex justify-center items-center p-4 overflow-hidden transform-gpu">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border rounded-3xl max-w-md w-full p-6 text-black shadow-2xl backdrop-blur-2xl relative transform-gpu will-change-transform overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: brandColors.border,
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span
                    style={{ color: brandColors.accentRed }}
                    className="text-[10px] uppercase tracking-[0.4em] font-black block"
                  >
                    Ubicación Geográfica
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1 tracking-tight font-sans text-black">
                    Barranca de Metztitlán
                  </h3>
                </motion.div>

                <button
                  onClick={handleCloseModal}
                  className="bg-black/10 hover:bg-black/20 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border border-black/20 cursor-pointer transition-all shadow-sm text-black"
                >
                  ✕
                </button>
              </div>

              <p
                style={{ color: brandColors.bodyText }}
                className="text-xs sm:text-sm leading-relaxed mb-4 font-semibold"
              >
                Situada en el estado de Hidalgo, México. Esta Reserva de la
                Biosfera destaca por su impresionante cañón, su biodiversidad
                única y los ecosistemas protegidos que resguarda.
              </p>

              <div
                ref={mapContainerRef}
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto relative mb-5 flex items-center justify-center overflow-hidden rounded-[24px] shadow-lg border border-white/30 bg-white/5 cursor-grab active:cursor-grabbing"
              >
                <motion.img
                  src="/mapameztitlan.webp"
                  alt="Mapa de la Reserva de la Biosfera Barranca de Metztitlán"
                  width="224"
                  height="224"
                  loading="lazy"
                  drag
                  dragConstraints={mapContainerRef}
                  dragElastic={0.2}
                  animate={{ scale: mapScale }}
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                  className="w-full h-full object-cover transform-gpu"
                  onError={(e) => {
                    e.target.src = "/logo-marush.png";
                  }}
                />

                <div className="absolute top-2 right-2 flex flex-col gap-1 bg-white/80 backdrop-blur-md p-1 rounded-xl border border-black/20 z-10 shadow-md">
                  <button
                    onClick={handleZoomIn}
                    title="Acercar mapa"
                    className="w-6 h-6 bg-black/10 hover:bg-black/20 text-black rounded-lg flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                  <button
                    onClick={handleZoomOut}
                    title="Alejar mapa"
                    className="w-6 h-6 bg-black/10 hover:bg-black/20 text-black rounded-lg flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  {mapScale !== 1 && (
                    <button
                      onClick={handleResetZoom}
                      title="Restablecer vista"
                      className="text-[8px] text-black hover:text-[#dc3545] px-0.5 py-0.5 rounded uppercase tracking-wider font-extrabold"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              <div className="text-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: brandColors.accentBlue }}
                  className="hover:opacity-90 text-white px-7 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-xl no-underline inline-flex items-center justify-center gap-2 border border-white/25 backdrop-blur-md cursor-pointer"
                >
                  <span>Ver en Google Maps</span>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAvesModalOpen && <AvesModal onClose={handleCloseAvesModal} />}
      </AnimatePresence>
    </>
  );
}
