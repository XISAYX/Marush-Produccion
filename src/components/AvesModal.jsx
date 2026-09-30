import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const todasLasAves = [
  {
    id: 1,
    nombre: "Cardenal Rojo",
    cientifico: "Cardinalis cardinalis",
    desc: "Ave cantora muy característica por su brillante plumaje escarlata en los machos y su cresta prominente. Habita en zonas de matorrales xerófilos de la reserva.",
    imagen: "/ave1.webp",
  },
  {
    id: 2,
    nombre: "Carpintero Cheje",
    cientifico: "Melanerpes aurifrons",
    desc: "Especie de carpintero de tamaño mediano, reconocido por su corona rojiza y plumaje barrado, fundamental para la ecología de los árboles nativos.",
    imagen: "/ave2.webp",
  },
  {
    id: 3,
    nombre: "Correcaminos Norteño",
    cientifico: "Geococcyx californianus",
    desc: "Ave veloz adaptada a terrenos áridos, capaz de correr a gran velocidad por el suelo y con una cresta desordenada característica.",
    imagen: "/ave3.webp",
  },
  {
    id: 4,
    nombre: "Cenzontle Norteño",
    cientifico: "Mimus polyglottos",
    desc: "Reconocido magistralmente por su capacidad para imitar los cantos de otras aves y sonidos ambientales con una gran variedad melódica.",
    imagen: "/ave4.webp",
  },
  {
    id: 5,
    nombre: "Saltapared de la Barranca",
    cientifico: "Campylorhynchus gularis",
    desc: "Pequeña ave endémica y muy activa, con patrones moteados en el plumaje que le permiten camuflarse perfectamente entre las ramas y matorrales secos.",
    imagen: "/ave5.webp",
  },
  {
    id: 6,
    nombre: "Pato Carolino",
    cientifico: "Aix sponsa",
    desc: "Un hermoso pato perizador reconocido por su colorido plumaje ornamental en los machos y su preferencia por habitar zonas cercanas a cuerpos de agua.",
    imagen: "/ave6.webp",
  },
  {
    id: 7,
    nombre: "Martín Pescador",
    cientifico: "Megaceryle alcyon",
    desc: "Ave especializada en la pesca, con un penacho despeinado en la cabeza y un pico fuerte y alargado ideal para capturar peces en la superficie.",
    imagen: "/ave7.webp",
  },
  {
    id: 8,
    nombre: "Halcón Peregrino",
    cientifico: "Falco peregrinus",
    desc: "Impresionante ave rapaz de vuelo veloz y preciso, caracterizada por su antifaz oscuro y una aguda vista para la cacería.",
    imagen: "/ave8.webp",
  },
  {
    id: 9,
    nombre: "Pelícano Canadiense",
    cientifico: "Pelecanus erythrorhynchos",
    desc: "Ave acuática de gran tamaño, famosa por su enorme bolsa gular de color anaranjado utilizada para pescar en los espejos de agua.",
    imagen: "/ave9.webp",
  },
  {
    id: 10,
    nombre: "Águila Pescadora",
    cientifico: "Pandion haliaetus",
    desc: "Rapaz especializada en la captura de peces, con garras adaptadas para sostener presas resbaladizas y una vista privilegiada desde las alturas.",
    imagen: "/ave10.webp",
  },
];

export default function AvesModal({ onClose }) {
  const [paginaActual, setPaginaActual] = useState(0);
  const avesPorPagina = 5;

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: true } }),
    );
    document.body.style.overflow = "hidden";

    return () => {
      window.dispatchEvent(
        new CustomEvent("locationModalState", { detail: { isOpen: false } }),
      );
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: false } }),
    );
    document.body.style.overflow = "auto";
    if (onClose) onClose();
  };

  const indiceInicio = paginaActual * avesPorPagina;
  const avesVisibles = todasLasAves.slice(
    indiceInicio,
    indiceInicio + avesPorPagina,
  );

  const irSiguiente = () => {
    if ((paginaActual + 1) * avesPorPagina < todasLasAves.length) {
      setPaginaActual((prev) => prev + 1);
    }
  };

  const irAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-transparent flex justify-center items-center p-4 sm:p-6 overflow-hidden transform-gpu">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="border rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col p-6 sm:p-8 text-black shadow-2xl backdrop-blur-2xl relative transform-gpu will-change-transform my-auto overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.28)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="mb-3 border-b border-black/10 pb-3 flex-shrink-0 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="transform-gpu will-change-transform"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-black block text-[#fb061f] drop-shadow-sm">
              Fauna de la Reserva
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1 tracking-tight font-sans text-stone-900">
              Guía de Aves: Residentes y Migratorias
            </h2>
          </motion.div>
        </div>

        {/* Indicador de bloque y botones de paginación */}
        <div className="flex justify-between items-center mb-3 flex-shrink-0">
          <span className="text-xs font-bold text-[hsl(354,98%,50%)] tracking-wider uppercase">
            Especies ({indiceInicio + 1} al{" "}
            {Math.min(indiceInicio + avesPorPagina, todasLasAves.length)} de{" "}
            {todasLasAves.length})
          </span>

          <div className="flex gap-2">
            <button
              onClick={irAnterior}
              disabled={paginaActual === 0}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                paginaActual === 0
                  ? "opacity-40 cursor-not-allowed bg-white/10 border-black/10 text-stone-500"
                  : "bg-white/40 hover:bg-white/70 border-black/20 text-black cursor-pointer shadow-sm"
              }`}
            >
              ← Anterior
            </button>
            <button
              onClick={irSiguiente}
              disabled={
                (paginaActual + 1) * avesPorPagina >= todasLasAves.length
              }
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                (paginaActual + 1) * avesPorPagina >= todasLasAves.length
                  ? "opacity-40 cursor-not-allowed bg-white/10 border-black/10 text-stone-500"
                  : "bg-white/40 hover:bg-white/70 border-black/20 text-black cursor-pointer shadow-sm"
              }`}
            >
              Siguiente →
            </button>
          </div>
        </div>

        {/* Contenido scrolleable sin barras visibles */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={paginaActual}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 transform-gpu will-change-transform"
            >
              {avesVisibles.map((ave) => (
                <div
                  key={ave.id}
                  className="bg-white/18 border border-white/30 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center shadow-sm backdrop-blur-xl transition-all hover:bg-white/28 transform-gpu"
                >
                  <div className="w-full sm:w-36 h-32 rounded-xl overflow-hidden shadow-inner flex-shrink-0 bg-black/5">
                    <img
                      src={ave.imagen}
                      alt={ave.nombre}
                      width="144"
                      height="128"
                      loading="lazy"
                      className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/logo-marush.png";
                      }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans text-lg font-bold text-stone-900">
                      {ave.id}. {ave.nombre}
                    </h3>
                    <span className="text-xs italic text-[#dc3545] font-semibold block mb-1">
                      ({ave.cientifico})
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                      {ave.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón de cierre inferior */}
        <div className="mt-4 text-center flex-shrink-0 border-t border-black/10 pt-3 flex justify-between items-center">
          <span className="text-[11px] text-stone-700 font-semibold">
            Página {paginaActual + 1} de{" "}
            {Math.ceil(todasLasAves.length / avesPorPagina)}
          </span>
          <button
            onClick={handleClose}
            className="bg-[#0056b3] hover:opacity-90 text-white font-bold px-7 py-2 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer border border-white/20"
          >
            Cerrar Guía
          </button>
        </div>
      </motion.div>
    </div>
  );
}
