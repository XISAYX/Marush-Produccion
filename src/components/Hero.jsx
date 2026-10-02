import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLocationState = (e) => {
      setIsLocationOpen(e.detail.isOpen);
    };

    window.addEventListener("locationModalState", handleLocationState);

    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay restringido por iOS:", err);
        });
      }
    };

    attemptPlay();

    const handleTouchOrClick = () => {
      attemptPlay();
      window.removeEventListener("touchstart", handleTouchOrClick);
      window.removeEventListener("click", handleTouchOrClick);
    };

    window.addEventListener("touchstart", handleTouchOrClick, { once: true });
    window.addEventListener("click", handleTouchOrClick, { once: true });

    return () => {
      window.removeEventListener("locationModalState", handleLocationState);
      window.removeEventListener("touchstart", handleTouchOrClick);
      window.removeEventListener("click", handleTouchOrClick);
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
      <div
        className="fixed inset-0 w-full h-[100dvh] overflow-hidden -z-10 pointer-events-none bg-black"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={true}
          playsInline={true}
          webkit-playsinline="true"
          preload="auto"
          onCanPlay={(e) => {
            e.target.play().catch((err) => console.log("Play error:", err));
          }}
          className="absolute inset-0 w-full h-full object-cover brightness-[1.15] saturate-[1.8] contrast-[1.2] scale-105"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <source
            src="https://res.cloudinary.com/s9lrwmoh/video/upload/f_auto,q_auto,vc_auto/v1790807993/fondo-video.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      <section
        id="home"
        className="relative h-[100dvh] w-full flex flex-col justify-center items-center text-center overflow-hidden text-white px-4"
        style={{ transform: "translateZ(0)" }}
      >
        <AnimatePresence mode="wait">
          {!isLocationOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto w-full my-auto space-y-6 sm:space-y-8 pt-12"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              {/* ETIQUETA SUPERIOR */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }} // Cambiado a true para evitar parpadeos
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                }}
                className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 mx-auto transition-all cursor-pointer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  backfaceVisibility: "hidden",
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
                viewport={{ once: true, amount: 0.15 }} // Cambiado a true para evitar parpadeos
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex justify-center items-center my-2 group cursor-default"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="/logo-marush.webp"
                  alt="Marush Logo Principal"
                  width="384"
                  height="150"
                  className="w-56 sm:w-72 md:w-96 object-contain filter invert transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/logo-marush.png";
                  }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }} // Cambiado a true para evitar parpadeos
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base sm:text-lg md:text-xl font-light text-stone-100 italic max-w-2xl px-4 mx-auto"
                style={{ backfaceVisibility: "hidden" }}
              >
                Una Luz en la Penumbra Conservar para vivir.
              </motion.p>

              {/* BOTÓN COMENZAR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }} // Cambiado a true para evitar parpadeos
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pt-2"
                style={{ backfaceVisibility: "hidden" }}
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
                  className="font-medium rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-widest cursor-pointer inline-block text-center no-underline transition-all text-white"
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
