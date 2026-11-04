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

const recorridosData = {
  "Ruta 1": {
    titulo: "Laguna de Metztitlán",
    lema: "ESPEJO DE MIGRACIÓN: NUESTRAS AVES",
    locacion: "Localidad de San Cristóbal, Metztitlán, Hidalgo",
    duracion: "2-5 HRS",
    participantes: "1 a 6 personas por grupo",
    descripcion:
      "Prepara tu cámara para disfrutar de un recorrido en lancha en la Laguna de Metztitlán, observando el imponente cañón de la barranca para contemplar visual o científicamente las aves residentes y migratorias que aquí anidan, encontrarás especies como el cuervo marino (cormorán), patos, garzas, águilas (águila pescadora), aguilillas, mártines pescador y el costero ibis blanco (Eudocimus albus), también si lo deseas desembarcarás para conocer vestigios del 'tajo', construcción y túneles de desfogue de la laguna.",
    horario: "Por la mañana, salidas a acordar entre 6 y 9 am",
    requisitos:
      "Ropa cómoda, el equipo de seguridad y de observación ¡nosotros te lo prestamos!",
    alimentos:
      "A contratar el servicio de preparación de pescado frito al fin del recorrido (costo extra) (sujeto a disponibilidad)",
    prohibido:
      "Capturar, cazar, alimentar, retener o apropiarse de especies y derivados, así como flora y fauna silvestre y cualquier actividad que arriesgue o altere la integridad de los usuarios, la barranca y sus elementos. Prohibido portar y consumir alcohol y enervantes durante el recorrido.",
    ilustracionImg: "/mockup-martin-pescador.webp",
    imagen: "/mockup-pelicano.webp",
  },
  "Ruta 2": {
    titulo: "Entre Cañones y Manantiales",
    lema: "RELÁJATE, CHAPOTEA Y DISFRUTA!",
    locacion:
      "Localidades de San Pablo Tetlapayac, San Pedro Ayotlaxtola, San Juan Tlatepexi, Metztitlán, Hidalgo",
    duracion: "4-36 HRS",
    participantes: "Desde 1 persona hasta 15 por grupo",
    descripcion:
      "Camina por entornos naturales, explora en compañía de aguas cristalinas y termales para relajarte y disfrutar de los bellos paisajes que brinda la reserva en su zona norte, escarpada por cañones, manantiales y ríos en los que podrás planear todo un día de actividades de tu interés y de naturaleza de bajo impacto, escenarios dignos de retratar en la memoria; esta región guarda condiciones únicas que permitieron la evolución de especies únicas en la reserva, mismas que podrás visitar con un guía acreditado quién te brindará información del porqué la fauna y flora que habita.",
    horario: "De 6am a 6pm ó dos días de actividades y renta de cabañas",
    requisitos:
      "Mudas de ropa cómoda y acuática, el equipo de observación nosotros te lo prestamos! El equipo de seguridad se renta en instalaciones de sitios",
    alimentos:
      "A contratar previamente según las actividades a elegir con el guía acreditado",
    prohibido:
      "Capturar, cazar, alimentar, retener o apropiarse de especies silvestres, derivados, elementos naturales y cualquier actividad que arriesgue o altere la integridad de los usuarios, los ecosistemas y sus flujos dendroenergéticos.",
    ilustracionImg: "/twoi.png",
    imagen: "/mockup-pelicano.webp",
  },
  "Ruta 3": {
    titulo: "Museo Vivo de Cactáceas",
    lema: "BIENVENIDO A LA RESERVA",
    locacion: "Municipio de Metztitlán, Hidalgo",
    duracion: "40min-3 HRS",
    participantes: "Desde 1 persona hasta 30 por grupo",
    descripcion:
      "Bienvenido a la reserva de la biosfera barranca de Metztitlán, programa tu visita y conoce a la mayoría de las especies más emblemáticas de la reserva como los viejitos y la biznaga gigante; en campaña de nuestros guías especializados, en esta porción de matorral xerófilo podrás realizar tus prácticas académicas y exponer tu interés por la conservación.",
    horario: "De 9am a 5pm y horarios especiales en fines de semana",
    requisitos:
      "Ropa cómoda, el equipo de observación nosotros te lo prestamos!",
    alimentos:
      "Te encuentras en la cabecera del municipio de Metztitlán, recuerda traer hidratación si eliges un recorrido.",
    prohibido:
      "Manipular, alimentar, retener o apropiarse de especies silvestres, derivados, elementos naturales y cualquier actividad que arriesgue o altere la integridad de los usuarios.",
    ilustracionImg: "/logo-marush.png",
    imagen: "/mockup-pelicano.webp",
  },
};

export default function ItemSection() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (data) => {
    setModalContent(data);
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
      className="relative w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 z-10 bg-transparent flex flex-col items-center justify-center min-h-screen"
    >
      {/* ENCABEZADO CENTRADO */}
      <div
        className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 flex flex-col items-center transition-all duration-300 ${
          modalContent
            ? "opacity-0 pointer-events-none select-none h-0 overflow-hidden mb-0"
            : "opacity-100"
        }`}
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-black block mb-2"
          style={{ color: "#ff1a2e" }}
        >
          Colección Oficial
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Nuestros Productos
        </h2>
        <p className="text-xs sm:text-sm text-black font-semibold mt-2 leading-relaxed max-w-xl text-center px-2">
          Indumentaria textil diseñada para conectar con la naturaleza, honrando
          la biodiversidad de la Sierra y la Barranca.
        </p>
      </div>

      {/* CUADRÍCULA CON 3 TARJETAS EXACTAMENTE ALINEADAS Y SIMÉTRICAS */}
      <div
        className={`max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-items-center transition-all duration-300 ${
          modalContent
            ? "opacity-0 pointer-events-none select-none h-0 overflow-hidden"
            : "opacity-100"
        }`}
      >
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
            className="rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 flex flex-col justify-between backdrop-blur-md w-full shadow-2xl h-full"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
            }}
          >
            {/* CONTENEDOR SUPERIOR (IMAGEN Y TEXTO) */}
            <div className="flex flex-col flex-grow">
              <div className="w-full h-60 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/15 shrink-0">
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
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/50 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 z-10 max-w-[80%] truncate shadow-md">
                  {producto.categoria}
                </span>
              </div>

              <div className="text-left flex flex-col gap-2 my-2 flex-grow">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  {producto.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
                  {producto.descripcion}
                </p>
              </div>
            </div>

            {/* PIE DE TARJETA ORGANIZADO EN 2 PISOS */}
            <div className="mt-5 pt-4 border-t border-white/20 flex flex-col gap-3 shrink-0">
              <span
                className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest block text-left truncate"
                style={{ color: "#ff1a2e" }}
              >
                {producto.tipo === "tres-botones"
                  ? "Explorar Senderos"
                  : producto.tipo === "sin-boton"
                    ? "Gestión Autorizada"
                    : "Colección Textil"}
              </span>

              {producto.tipo === "boton-simple" && (
                <button
                  onClick={() =>
                    handleOpenModal({
                      categoria: producto.categoria,
                      titulo: producto.titulo,
                      lema: "COLECCIÓN OFICIAL",
                      locacion: "Reserva de la Biosfera Barranca de Metztitlán",
                      duracion: "Permanente",
                      participantes: "Todo público",
                      descripcion: producto.descripcion,
                      horario: "Disponible 24/7",
                      requisitos: "Ninguno",
                      alimentos: "N/A",
                      prohibido: "N/A",
                      ilustracionImg: producto.imagen,
                      imagen: producto.imagen,
                    })
                  }
                  className="bg-white/10 hover:bg-white/25 text-black font-extrabold w-full py-2 rounded-full text-xs uppercase tracking-wider transition-all border border-white/40 cursor-pointer backdrop-blur-md shadow-sm text-center"
                >
                  {producto.textoBoton}
                </button>
              )}

              {producto.tipo === "tres-botones" && (
                <div className="grid grid-cols-3 gap-1.5 w-full">
                  {producto.botones.map((rutaNombre, i) => {
                    const datosRuta = recorridosData[rutaNombre];
                    return (
                      <button
                        key={i}
                        onClick={() =>
                          handleOpenModal({
                            categoria: `RECORRIDO ${i + 1}`,
                            titulo: datosRuta.titulo,
                            lema: datosRuta.lema,
                            locacion: datosRuta.locacion,
                            duracion: datosRuta.duracion,
                            participantes: datosRuta.participantes,
                            descripcion: datosRuta.descripcion,
                            horario: datosRuta.horario,
                            requisitos: datosRuta.requisitos,
                            alimentos: datosRuta.alimentos,
                            prohibido: datosRuta.prohibido,
                            ilustracionImg: datosRuta.ilustracionImg,
                            imagen: datosRuta.imagen,
                          })
                        }
                        className="bg-white/10 hover:bg-white/25 text-black font-extrabold py-2 px-1 rounded-full text-[9px] uppercase tracking-wider transition-all border border-white/40 cursor-pointer backdrop-blur-md shadow-sm text-center truncate"
                      >
                        {rutaNombre}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* VENTANA MODAL RESPONSIVA Y CENTRADA */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[99999] bg-transparent flex justify-center items-center p-3 sm:p-6 pointer-events-auto overflow-y-auto"
          >
            <div
              className="border rounded-[28px] sm:rounded-[36px] w-full max-w-3xl max-h-[90vh] p-4 sm:p-8 text-black shadow-2xl backdrop-blur-2xl relative transform-gpu will-change-transform flex flex-col gap-5 overflow-y-auto my-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                borderColor: "rgba(255, 255, 255, 0.35)",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* ENCABEZADO DENTRO DE SU CAJA */}
              <div className="flex justify-between items-start bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/25 relative gap-2">
                <div className="overflow-hidden">
                  <span
                    style={{ color: "#dc3545" }}
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-black block mb-1 truncate"
                  >
                    {modalContent.categoria} — {modalContent.lema}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black tracking-tight text-black drop-shadow-sm font-sans">
                    {modalContent.titulo}
                  </h3>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="bg-black/10 hover:bg-black/20 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-bold border border-black/20 cursor-pointer transition-all shadow-sm text-black shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* ESPACIO MULTIMEDIA PRINCIPAL */}
              <div className="w-full h-56 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-black/10 relative group">
                <img
                  src={modalContent.imagen}
                  alt={modalContent.titulo}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] uppercase tracking-widest text-white font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                    Multimedia / Vista Previa
                  </span>
                </div>
              </div>

              {/* CAJAS ORIGINALES PARA DATOS TÉCNICOS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/25 text-xs font-semibold text-[#1C1917]">
                <div>
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-0.5">
                    Locación:
                  </span>
                  <p className="font-semibold text-xs sm:text-sm text-black">
                    {modalContent.locacion}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-0.5">
                    Duración Aprox:
                  </span>
                  <p className="font-semibold text-xs sm:text-sm text-black">
                    {modalContent.duracion}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-0.5">
                    Participantes:
                  </span>
                  <p className="font-semibold text-xs sm:text-sm text-black">
                    {modalContent.participantes}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-0.5">
                    Horario Sugerido:
                  </span>
                  <p className="font-semibold text-xs sm:text-sm text-black">
                    {modalContent.horario}
                  </p>
                </div>
              </div>

              {/* DESCRIPCIÓN */}
              <div>
                <h4 className="font-black text-xs uppercase tracking-wider text-black mb-1.5">
                  Descripción:
                </h4>
                <p className="text-xs sm:text-base leading-relaxed font-semibold text-[#1C1917]">
                  {modalContent.descripcion}
                </p>
              </div>

              {/* CAJAS ORIGINALES PARA REQUISITOS Y ALIMENTOS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/25">
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-1">
                    Requisitos:
                  </span>
                  <p className="font-semibold text-black text-xs sm:text-sm">
                    {modalContent.requisitos}
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/25">
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-1">
                    Alimentos:
                  </span>
                  <p className="font-semibold text-black text-xs sm:text-sm">
                    {modalContent.alimentos}
                  </p>
                </div>
              </div>

              {/* CAJA ROJA EXCLUSIVA PARA PROHIBIDO */}
              {modalContent.prohibido !== "N/A" && (
                <div className="bg-red-500/15 p-4 rounded-2xl border border-red-500/30 text-xs">
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px] mb-1">
                    Prohibido:
                  </span>
                  <p className="font-semibold text-black text-xs sm:text-sm leading-relaxed">
                    {modalContent.prohibido}
                  </p>
                </div>
              )}

              {/* SECCIÓN DE ILUSTRACIÓN (FOTO) HASTA ABAJO */}
              {modalContent.ilustracionImg && (
                <div className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/25 flex flex-col gap-3">
                  <span className="font-bold text-[#dc3545] uppercase tracking-wider block text-[10px]">
                    Ilustración del Recorrido:
                  </span>
                  <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/20 bg-black/10">
                    <img
                      src={modalContent.ilustracionImg}
                      alt="Ilustración del recorrido"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
