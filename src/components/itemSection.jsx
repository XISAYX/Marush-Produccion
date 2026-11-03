import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productosList = [
  {
    id: 1,
    titulo: "Nuestros Productos",
    categoria: "Fotos Souvenirs",
    descripcion:
      "Nuestros productos poseen una identidad que nace en nuestras barrancas y representan nuestras mejores experiencias laborales, principalmente el del monitoreo biológico; también cumplen con la funcionalidad experimentada en campo, por lo que siempre los querrás usar y te servirán en tus expediciones de naturaleza.",
    imagen: "/mockup-martin-pescador.webp",
    tipo: "boton-simple",
    textoBoton: "Ver Productos",
  },
  {
    id: 2,
    titulo: "Investigación Científico-Legal",
    categoria: "Gestión de Brigada",
    descripcion:
      "El turismo de observación incluye actividades científicas y trámites gubernamentales ante la CONANP. Orientamos tu trámite para cumplir con la normatividad y buenas prácticas de investigación.",
    imagen: "/twoi.png",
    tipo: "sin-boton",
  },
  {
    id: 3,
    titulo: "Rutas Metztitlán",
    categoria: "Senderos y Expediciones",
    descripcion:
      "Explora los caminos y senderos interpretativos diseñados para conectar profundamente con los paisajes y la historia geológica de la reserva.",
    imagen: "/mockup-pelicano.webp",
    tipo: "tres-botones",
    botones: ["Ruta 1", "Ruta 2", "Ruta 3"],
  },
];

export default function ItemSection() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (titulo, descripcion, imagen) => {
    setModalContent({ titulo, descripcion, imagen });
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: true } }),
    );
  };

  const handleCloseModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: false } }),
    );
  };

  return (
    <section
      id="productos"
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 z-10 bg-transparent flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* ENCABEZADO CENTRADO (Se oculta al abrir el modal para dejar la pantalla limpia) */}
      {!modalContent && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 flex flex-col items-center"
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
          <p className="text-xs sm:text-sm text-black font-semibold mt-2 leading-relaxed max-w-xl text-center">
            Indumentaria textil diseñada para conectar con la naturaleza,
            honrando la biodiversidad de la Sierra y la Barranca.
          </p>
        </motion.div>
      )}

      {/* CUADRÍCULA DE 3 TARJETAS (Se oculta por completo cuando el modal está abierto) */}
      {!modalContent && (
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 lg:gap-8 items-stretch justify-items-center">
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
              className="rounded-[32px] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md w-full shadow-2xl h-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
              }}
            >
              <div>
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/15">
                  <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    width="600"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/logo-marush.png";
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 z-10">
                    {producto.categoria}
                  </span>
                </div>

                <div className="text-left flex flex-col gap-3 my-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {producto.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>
              </div>

              {/* PIE DE TARJETA CON BOTONES */}
              <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-widest"
                  style={{ color: "#ff1a2e" }}
                >
                  {producto.tipo === "tres-botones"
                    ? "Explorar Senderos"
                    : producto.tipo === "sin-boton"
                      ? "Gestión Autorizada"
                      : "Colección Textil"}
                </span>

                {/* Botón Ver Productos */}
                {producto.tipo === "boton-simple" && (
                  <button
                    onClick={() =>
                      handleOpenModal(
                        producto.titulo,
                        producto.descripcion,
                        producto.imagen,
                      )
                    }
                    className="bg-white/10 hover:bg-white/25 text-black font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all border border-white/40 cursor-pointer backdrop-blur-md shadow-sm"
                  >
                    {producto.textoBoton}
                  </button>
                )}

                {/* Botones Ruta 1, Ruta 2, Ruta 3 */}
                {producto.tipo === "tres-botones" && (
                  <div className="flex gap-1.5">
                    {producto.botones.map((ruta, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          handleOpenModal(
                            `Detalles de ${ruta}: ${producto.titulo}`,
                            `Información exclusiva, puntos de control y guías interpretativas correspondientes a la ${ruta} en la Reserva de la Biosfera Barranca de Metztitlán.`,
                            producto.imagen,
                          )
                        }
                        className="bg-white/10 hover:bg-white/25 text-black font-extrabold px-2.5 py-2 rounded-full text-[10px] uppercase tracking-wider transition-all border border-white/40 cursor-pointer backdrop-blur-md shadow-sm text-center min-w-[50px]"
                      >
                        {ruta}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* VENTANA MODAL FLOTANTE (Aparece sola y limpia en el centro) */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-transparent flex justify-center items-center p-4 overflow-y-auto transform-gpu"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border rounded-3xl max-w-md w-full p-6 text-black shadow-2xl backdrop-blur-2xl relative transform-gpu will-change-transform overflow-hidden my-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <span
                    style={{ color: "#dc3545" }}
                    className="text-[10px] uppercase tracking-[0.4em] font-black block"
                  >
                    Información Detallada
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1 tracking-tight font-sans text-black">
                    {modalContent.titulo}
                  </h3>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="bg-black/10 hover:bg-black/20 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border border-black/20 cursor-pointer transition-all shadow-sm text-black"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-4 font-semibold text-[#1C1917]">
                {modalContent.descripcion}
              </p>

              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto relative mb-5 flex items-center justify-center overflow-hidden rounded-[24px] shadow-lg border border-white/30 bg-white/5">
                <img
                  src={modalContent.imagen}
                  alt={modalContent.titulo}
                  width="224"
                  height="224"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleCloseModal}
                  style={{ backgroundColor: "#0056b3" }}
                  className="hover:opacity-90 text-white px-7 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-xl border border-white/25 backdrop-blur-md cursor-pointer"
                >
                  Cerrar Ventana
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
