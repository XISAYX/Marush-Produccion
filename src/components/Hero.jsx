import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  useEffect(() => {
    const handleLocationState = (e) => {
      setIsLocationOpen(e.detail.isOpen);
    };

    window.addEventListener("locationModalState", handleLocationState);
    return () => {
      window.removeEventListener("locationModalState", handleLocationState);
    };
  }, []);

  const scrollToSection = (e) => {
    e.preventDefault();
    const section = document.getElementById("quienes-somos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* FONDO PRINCIPAL CON IMAGEN OPTIMIZADA Y CAPA DE OSCURECIMIENTO */}
      <div
        className="fixed inset-0 w-full h-screen overflow-hidden -z-10 pointer-events-none transform-gpu bg-cover bg-center"
        style={{ backgroundImage: `url('/mapameztitlan.webp')` }}
      >
        {/* Capa oscura semitransparente para dar el tono elegante y hacer destacar el texto */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none transform-gpu" />
      </div>

      <section
        id="home"
        className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden text-white px-4 transform-gpu"
      >
        <AnimatePresence mode="wait">
          {!isLocationOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto w-full my-auto space-y-6 sm:space-y-8 pt-12 transform-gpu will-change-transform"
            >
              {/* ETIQUETA SUPERIOR */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                }}
                className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 transform-gpu will-change-transform mx-auto transition-all cursor-pointer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                }}
              >
                <span className="text-white font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">
                  Reserva de la Biosfera Barranca de Metztitlán
                </span>
              </motion.div>

              {/* LOGOTIPO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex justify-center items-center transform-gpu will-change-transform my-2 group cursor-default"
              >
                <img
                  src="/logo-marush.webp"
                  alt="Marush Logo Principal"
                  width="384"
                  height="150"
                  className="w-56 sm:w-72 md:w-96 object-contain filter invert transform-gpu transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  onError={(e) => {
                    e.target.src = "/logo-marush.png";
                  }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base sm:text-lg md:text-xl font-light text-stone-100 italic max-w-2xl px-4 mx-auto transform-gpu will-change-transform"
              >
                Una Luz en la Penumbra Conservar para vivir.
              </motion.p>

              {/* BOTÓN COMENZAR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="transform-gpu will-change-transform pt-2"
              >
                <motion.a
                  href="#quienes-somos"
                  onClick={scrollToSection}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(12px)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="font-medium rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-widest cursor-pointer inline-block text-center no-underline transition-all transform-gpu will-change-transform text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  Comenzar
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
