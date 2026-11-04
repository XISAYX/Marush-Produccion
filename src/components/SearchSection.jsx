import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const paisesIlustraciones = [
  {
    id: 1,
    titulo: "Parque Nacional Los Mármoles",
    tag: "Paisaje Protegido",
    descripcion:
      "Área natural protegida que destaca por sus profundos cañones, escarpados relieves y una rica biodiversidad adaptada a los microclimas de la sierra hidalguense.",
    imagenIlustrada: "/parque-marmoles.webp",
    imagenOriginal: "/original2.webp",
  },
  {
    id: 2,
    titulo: "Reserva de la Biosfera Metztitlán",
    tag: "Cañón y Ecosistema",
    descripcion:
      "Reserva caracterizada por su impresionante vega, formaciones geológicas únicas y cuerpos de agua que albergan aves migratorias y especies endémicas.",
    imagenIlustrada: "/metztitlan-landscape.webp",
    imagenOriginal: "/organos2.webp",
  },
  {
    id: 3,
    titulo: "Valle de Órganos y Matorrales",
    tag: "Flora Endémica",
    descripcion:
      "Paisaje semidesértico dominado por imponentes cactus candelabro y cactáceas columnares que forman un santuario natural de gran valor ecológico.",
    imagenIlustrada: "/metztitlan-organos.webp",
    imagenOriginal: "/original2.webp",
  },
];

const textosInformativos = [
  {
    id: 0,
    subtitulo: "¿QUIÉNES SOMOS?",
    titulo: "COMPROMISO CON EL LEGADO NATURAL",
    descripcion:
      "SOMOS UN GRUPO DE BRIGADISTAS COMUNITARIOS COMPROMETIDOS CON LA CONSERVACIÓN DEL MEDIO AMBIENTE Y SU APROVECHAMIENTO RESPONSABLE, ENTRE NUESTRAS RESPONSABILIDADES ATENDEMOS EL TURISMO QUE VISITA LA REGIÓN, BRINDANDO ATENCIÓN PERSONALIZADA Y ORGANIZANDO SALIDAS QUE SE CONVIERTEN EN EXPERIENCIAS ÚNICAS EN LA RESERVA.",
  },
  {
    id: 1,
    subtitulo: "OBJETIVO",
    titulo: "UNA LUZ EN LA ADVERSIDAD",
    descripcion:
      "CREAR EXPERIENCIAS DE TURISMO RESPONSABLE APROVECHANDO EL ENTORNO NATURAL, CONSOLIDANDO UNA NUEVA IDENTIDAD DE VALORIZACIÓN A LOS RECURSOS.",
  },
  {
    id: 2,
    subtitulo: "NUESTRA ESENCIA",
    titulo: "IDENTIDAD Y PROPÓSITO",
    descripcion:
      "NOS CONSOLIDAMOS COMO UN REFERENTE DE IDENTIDAD Y ORGULLO HIDALGUENSE EN ÁREAS NATURALES PROTEGIDAS, IMPULSANDO INICIATIVAS Y ACTIVIDADES TURÍSTICAMENTE SOSTENIBLES QUE PROTEGEN ACTIVAMENTE EL HÁBITAT Y TRANSMITEN LA IMPORTANCIA HISTÓRICA, ECOLÓGICA Y CULTURAL DE NUESTRA RESERVA DE LA BIOSFERA BARRANCA DE METZTITLÁN.",
  },
];

export default function SearchSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tipoVista, setTipoVista] = useState("ilustrada");

  // Intervalo estable para el carrusel de imágenes
  useEffect(() => {
    if (isPaused) return;
    const landscapeInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paisesIlustraciones.length);
    }, 3000);
    return () => clearInterval(landscapeInterval);
  }, [isPaused]);

  // Intervalo estable para el carrusel de textos
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

  return (
    <section
      id="quienes-somos"
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20 z-10 flex flex-col justify-center items-center transform-gpu overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6 my-auto">
        {/* ENCABEZADO ROTATIVO CENTRADO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto cursor-pointer transform-gpu will-change-transform flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={textosInformativos[textIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="transform-gpu will-change-transform flex flex-col items-center"
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

        {/* TARJETA CENTRAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="rounded-[28px] p-5 sm:p-8 backdrop-blur-md flex flex-col items-center text-center gap-4 transform-gpu will-change-transform w-full shadow-2xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          <div className="w-full h-52 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/10 group">
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
                className="w-full h-full object-cover rounded-xl shadow-md transform-gpu will-change-transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/logo-marush.png";
                }}
              />
            </AnimatePresence>

            <span
              className={`absolute top-4 left-4 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border z-10 transition-all duration-300 ${
                isPaused
                  ? "bg-[#ff1a2e]/80 border-white/40 shadow-lg"
                  : "bg-black/50 border-white/20"
              }`}
            >
              {isPaused ? "Pausado" : itemActual.tag}
            </span>

            {/* BOTONES ILUSTRADAS / ORIGINALES */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/25 z-20 shadow-lg">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTipoVista("ilustrada");
                }}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  tipoVista === "ilustrada"
                    ? "bg-[#ff1a2e] text-white shadow-md"
                    : "text-white/80 hover:text-white bg-transparent"
                }`}
              >
                Ilustradas
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTipoVista("original");
                }}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  tipoVista === "original"
                    ? "bg-[#ff1a2e] text-white shadow-md"
                    : "text-white/80 hover:text-white bg-transparent"
                }`}
              >
                Originales
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
              {paisesIlustraciones.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
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

          <div className="flex flex-col items-center text-center gap-1.5 w-full">
            <span
              className="text-[11px] uppercase tracking-[0.3em] font-extrabold"
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
