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
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 z-10 bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ENCABEZADO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center px-4"
      >
        <span
          className="text-[11px] uppercase tracking-[0.3em] font-bold block mb-2"
          style={{ color: "#ff1a2e" }}
        >
          Colección Oficial
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Nuestros Productos
        </h2>
        <p className="text-sm sm:text-base text-gray-200 font-normal mt-3 leading-relaxed max-w-lg">
          Indumentaria textil diseñada para conectar con la naturaleza, honrando
          la biodiversidad de la Sierra y la Barranca.
        </p>
      </motion.div>

      {/* CUADRÍCULA DE PRODUCTOS */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {productosList.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-3xl p-5 sm:p-7 flex flex-col justify-between w-full max-w-md shadow-2xl backdrop-blur-md border border-white/20 bg-black/60"
          >
            {/* Imagen del mockup */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-black/40 relative flex items-center justify-center border border-white/10">
              <img
                src={producto.imagen}
                alt={producto.titulo}
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.target.src = "/logo-marush.png";
                }}
              />
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                {producto.categoria}
              </span>
            </div>

            {/* Información del producto (Textos en blanco/gris claro garantizados) */}
            <div className="text-left flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {producto.titulo}
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-relaxed">
                {producto.descripcion}
              </p>
            </div>

            {/* Pie de tarjeta */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center gap-3">
              <span
                className="text-[11px] font-bold uppercase tracking-wider"
                style={{ color: "#ff1a2e" }}
              >
                Edición Limitada
              </span>
              <button
                onClick={() =>
                  alert(`Consultar disponibilidad de: ${producto.titulo}`)
                }
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all border border-white/30 cursor-pointer"
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
