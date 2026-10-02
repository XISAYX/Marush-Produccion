import React from "react";
import { motion } from "framer-motion";

const productosList = [
  {
    id: 1,
    titulo: "Martín Pescador Norteño",
    categoria: "Edición Especial Biocultural",
    descripcion:
      "Ilustración conmemorativa en alta definición sobre tejido sostenible de alta calidad, honrando la fauna acuática.",
    imagen: "/mockup-martin-pescador.webp",
  },
  {
    id: 2,
    titulo: "Parque Nacional Los Mármoles",
    categoria: "Colección Cumbres",
    descripcion:
      "Inspirado en la majestuosidad de los cañones y relieves hidalguenses, diseñado para máxima comodidad y estilo.",
    imagen: "/mockup-parque-marmoles.webp",
  },
  {
    id: 3,
    titulo: "Pelícano Canadiense",
    categoria: "Línea Migratoria",
    descripcion:
      "Detalles visuales únicos que representan la presencia de aves migratorias en los espejos de agua de la región.",
    imagen: "/mockup-pelicano.webp",
  },
  {
    id: 4,
    titulo: "Reserva de la Biosfera Metztitlán",
    categoria: "Colección Esencial",
    descripcion:
      "Tonalidades tierra y diseño orgánico que rinden tributo directo a los horizontes protegidos de la biosfera.",
    imagen: "/mockup-reserva-metztitlan.webp",
  },
];

export default function ItemSection() {
  return (
    <section
      id="productos"
      className="relative w-full py-16 px-4 sm:px-8 md:px-16 lg:px-20 z-10 bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ENCABEZADO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} // Evita parpadeo
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 flex flex-col items-center px-2"
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-black block mb-2"
          style={{ color: "#ff1a2e" }}
        >
          Colección Oficial
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Nuestros Productos
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-3 leading-relaxed max-w-xl text-center px-2">
          Indumentaria textil diseñada para conectar con la naturaleza, honrando
          la biodiversidad de la Sierra y la Barranca.
        </p>
      </motion.div>

      {/* CUADRÍCULA DE PRODUCTOS CENTRADA Y RESPONSIVA */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center overflow-hidden">
        {productosList.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} // Evita parpadeo
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            // Ajustado para que NO se desborde (w-full overflow-hidden) y limpio de clases GPU conflictivas
            className="rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-between transition-all backdrop-blur-md w-full max-w-full sm:max-w-xl shadow-2xl border border-white/20 bg-white/[0.06] overflow-hidden"
          >
            {/* Contenedor interno del mockup */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-1 sm:p-2 border border-white/15">
              <img
                src={producto.imagen}
                alt={producto.titulo}
                width="600"
                height="400"
                loading="lazy"
                // Removidas clases GPU conflictivas, mantenemos hover estético normal
                className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src = "/logo-marush.png";
                }}
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 z-10">
                {producto.categoria}
              </span>
            </div>

            {/* Información del producto */}
            <div className="text-left flex flex-col gap-2 w-full">
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
                {producto.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                {producto.descripcion}
              </p>
            </div>

            {/* Pie de tarjeta con botón interactivo */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/15 flex justify-between items-center flex-wrap gap-3 w-full">
              <span
                className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest"
                style={{ color: "#ff1a2e" }}
              >
                Edición Limitada
              </span>
              <button
                onClick={() =>
                  alert(`Consultar disponibilidad de: ${producto.titulo}`)
                }
                className="bg-white/15 hover:bg-white/25 text-white font-extrabold px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-wider transition-all border border-white/30 cursor-pointer backdrop-blur-md shadow-sm active:scale-95"
              >
                Ver Detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
