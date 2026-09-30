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
      className="relative w-full py-20 px-4 sm:px-8 md:px-16 lg:px-20 z-10 bg-transparent transform-gpu flex flex-col items-center justify-center"
    >
      {/* ENCABEZADO CENTRADO CON DESCRIPCIÓN EN COLOR NEGRO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 transform-gpu will-change-transform flex flex-col items-center"
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-black block mb-2"
          style={{ color: "#ff1a2e" }}
        >
          Colección Oficial
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Nuestros Productos
        </h2>
        {/* DESCRIPCIÓN EN COLOR NEGRO */}
        <p className="text-xs sm:text-sm text-black font-semibold mt-2 leading-relaxed max-w-xl text-center">
          Indumentaria textil diseñada para conectar con la naturaleza, honrando
          la biodiversidad de la Sierra y la Barranca.
        </p>
      </motion.div>

      {/* CUADRÍCULA DE PRODUCTOS CENTRADA, ALINEADA Y RESPONSIVA */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-items-center">
        {productosList.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transform-gpu will-change-transform transition-all backdrop-blur-md w-full max-w-xl shadow-2xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
            }}
          >
            {/* Contenedor interno del mockup */}
            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/15">
              <img
                src={producto.imagen}
                alt={producto.titulo}
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl shadow-md transform-gpu transition-transform duration-700 hover:scale-105 will-change-transform"
                onError={(e) => {
                  e.target.src = "/logo-marush.png";
                }}
              />
              <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 z-10">
                {producto.categoria}
              </span>
            </div>

            {/* Información del producto con textos limpios y negros */}
            <div className="text-left flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {producto.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
                {producto.descripcion}
              </p>
            </div>

            {/* Pie de tarjeta con botón interactivo */}
            <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center flex-wrap gap-3">
              <span
                className="text-[11px] font-extrabold uppercase tracking-widest"
                style={{ color: "#ff1a2e" }}
              >
                Edición Limitada
              </span>
              <button
                onClick={() =>
                  alert(`Consultar disponibilidad de: ${producto.titulo}`)
                }
                className="bg-white/10 hover:bg-white/25 text-black font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all border border-white/40 cursor-pointer backdrop-blur-md shadow-sm"
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
