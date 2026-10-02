import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const paisesIlustraciones = [
  {
    id: 1,
    titulo: "Parque Nacional Los Mármoles",
    tag: "Paisaje Protegido",
    imagenIlustrada: "/parque-marmoles.webp",
    imagenOriginal: "/original2.webp",
  },
  {
    id: 2,
    titulo: "Reserva de la Biosfera Metztitlán",
    tag: "Cañón y Ecosistema",
    imagenIlustrada: "/metztitlan-landscape.webp",
    imagenOriginal: "/organos2.webp",
  },
  {
    id: 3,
    titulo: "Valle de Órganos y Matorrales",
    tag: "Flora Endémica",
    imagenIlustrada: "/metztitlan-organos.webp",
    imagenOriginal: "/original2.webp",
  },
];

const textosInformativos = [
  {
    id: 0,
    subtitulo: "¿Quiénes Somos?",
    titulo: "Compromiso con el Legado Natural",
    descripcion:
      "Impulsamos iniciativas y diseños textiles sostenibles que transmiten la importancia histórica, ecológica y cultural de nuestra región, protegiendo activamente el hábitat natural.",
  },
  {
    id: 1,
    subtitulo: "Visión",
    titulo: "Una Luz en la Penumbra",
    descripcion:
      "Nos consolidamos como un referente de identidad y orgullo hidalguense, concientizando a través del arte visual y el diseño responsable sobre la protección de los ecosistemas.",
  },
  {
    id: 2,
    subtitulo: "Nuestra Esencia",
    titulo: "Identidad y Propósito",
    descripcion:
      "Marush nace del compromiso profundo con la conservación de la biodiversidad y los paisajes inigualables de la Reserva de la Biosfera Barranca de Metztitlán.",
  },
];

export default function SearchSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tipoVista, setTipoVista] = useState("ilustrada");

  useEffect(() => {
    if (isPaused) return;
    const landscapeInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paisesIlustraciones.length);
    }, 3000);
    return () => clearInterval(landscapeInterval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textosInformativos.length);
    }, 6000);
    return () => clearInterval(textInterval);
  }, [isPaused]);

  const itemActual = paisesIlustraciones[currentIndex];
  const imagenActual =
    tipoVista === "ilustrada"
      ? itemActual.imagenIlustrada
      : itemActual.imagenOriginal;

  // Lógica para el deslizamiento táctil (Swipe)
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % paisesIlustraciones.length);
    } else if (info.offset.x > 50) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + paisesIlustraciones.length) % paisesIlustraciones.length,
      );
    }
  };

  return (
    <section
      id="quienes-somos"
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20 z-10 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6 my-auto">
        {/* ENCABEZADO ROTATIVO CENTRADO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={textosInformativos[textIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center px-2"
            >
              <span
                className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black block mb-2"
                style={{ color: "#ff1a2e" }}
              >
                {textosInformativos[textIndex].subtitulo}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-center">
                {textosInformativos[textIndex].titulo}
              </h2>
              <p className="text-xs sm:text-sm text-black font-semibold mt-2 leading-relaxed text-center max-w-xl">
                {textosInformativos[textIndex].descripcion}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-2 mt-4">
            {textosInformativos.map((t) => (
              <button
                key={t.id}
                onClick={() => setTextIndex(t.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  textIndex === t.id
                    ? "w-8 bg-[#ff1a2e]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ver información ${t.id + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* TARJETA CENTRAL RESPONSIVA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] p-5 sm:p-8 backdrop-blur-md flex flex-col items-center text-center gap-5 transition-all w-full shadow-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          {/* CONTENEDOR DE IMAGEN (El onClick global se eliminó para evitar conflictos) */}
          <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/10">
            {/* LA MAGIA ESTÁ AQUÍ: La imagen maneja los toques y deslizamientos de forma inteligente */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${itemActual.id}-${tipoVista}`}
                src={imagenActual}
                alt={itemActual.titulo}
                width="800"
                height="500"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md touch-pan-y cursor-pointer z-0"
                onError={(e) => {
                  e.target.src = "/logo-marush.png";
                }}
                drag={isPaused ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                // onTap detecta toques directos pero ignora si arrastraste el dedo
                onTap={() => setIsPaused(!isPaused)}
              />
            </AnimatePresence>

            {/* BARRA SUPERIOR MINIMALISTA */}
            <div className="absolute top-0 left-0 w-full p-2.5 sm:p-3 flex justify-between items-start z-20 pointer-events-none">
              <span
                className={`pointer-events-auto backdrop-blur-md text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 ${
                  isPaused
                    ? "bg-black/70 border-white/40"
                    : "bg-black/40 border-white/20"
                }`}
              >
                {isPaused ? "PAUSADO" : itemActual.tag}
              </span>

              {/* BOTONES AISLADOS: Al hacerles clic no afectarán la pausa */}
              <div className="pointer-events-auto flex items-center bg-black/40 backdrop-blur-md p-0.5 rounded-full border border-white/20 shadow-sm">
                <button
                  onClick={() => setTipoVista("ilustrada")}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    tipoVista === "ilustrada"
                      ? "bg-[#ff1a2e] text-white shadow-md"
                      : "text-white/70 hover:text-white bg-transparent"
                  }`}
                >
                  Ilustradas
                </button>
                <button
                  onClick={() => setTipoVista("original")}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    tipoVista === "original"
                      ? "bg-[#ff1a2e] text-white shadow-md"
                      : "text-white/70 hover:text-white bg-transparent"
                  }`}
                >
                  Originales
                </button>
              </div>
            </div>

            {/* INDICADORES DE PAGINACIÓN AISLADOS */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-auto">
              {paisesIlustraciones.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#ff1a2e]"
                      : "w-1.5 bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Ver ilustración ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TEXTO INFERIOR */}
          <div className="flex flex-col items-center text-center gap-2 w-full mt-1 px-2 pb-2">
            <span
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold"
              style={{ color: "#ff1a2e" }}
            >
              Paisajes de la Biosfera
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {itemActual.titulo}
            </h3>
            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed max-w-xl">
              Explora los horizontes protegidos que resguarda la región, donde
              la flora endémica y los relieves montañosos crean un santuario
              natural único en el estado de Hidalgo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
