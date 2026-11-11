import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productosList = [
  {
    id: 1,
    titulo: "Nuestros Productos",
    categoria: "Mercancia",
    descripcion:
      "Nuestros productos poseen una identidad que nace en nuestras barrancas y representan nuestras mejores experiencias laborales, principalmente el del monitoreo biológico; también cumplen con la funcionalidad experimentada en campo, por lo que siempre los querrás usar y te servirán en tus expediciones de naturaleza.",
    imagen: "/merch.webp",
    tipo: "boton-simple",
    textoBoton: "Ver Productos",
  },
  {
    id: 2,
    titulo: "Investigación Científico-Legal",
    categoria: "Gestión de Brigada",
    descripcion:
      "El turismo de observación incluye actividades científicas y trámites gubernamentales ante la CONANP. Orientamos tu trámite para cumplir con la normatividad y buenas prácticas de investigación.",
    imagen: "/twoi.webp",
    tipo: "sin-boton",
  },
  {
    id: 3,
    titulo: "Rutas Metztitlán",
    categoria: "Senderos y Expediciones",
    descripcion:
      "Explora los caminos y senderos interpretativos diseñados para conectar profundamente con los paisajes y la historia geológica de la reserva.",
    imagen: "/senderos-y-expediciones.webp",
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
    tipoMedia: "video",
    mediaSrc: "/Laguna_.webm",
    ilustracionImg: "/pv.webp",
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
    tipoMedia: "video",
    mediaSrc: "/manantiales.webm",
    ilustracionImg: "/twoi.webp",
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
    tipoMedia: "video",
    mediaSrc: "/cactus.webm",
    ilustracionImg: "/mockup-pelicano.webp",
  },
};

const catalogoProductos = [
  {
    id: 1,
    nombre: "Playera Conmemorativa 'Línea Biocultural'",
    categoria: "Indumentaria Textil",
    descripcion:
      "Algodón orgánico de alta resistencia con diseños representativos de la biodiversidad y paisajes de la Reserva de la Biosfera Barranca de Metztitlán.",
    colores: [
      { nombre: "Verde Oliva (Martín Pescador)", imagen: "/pv.webp" },
      {
        nombre: "Arena (Pelícano Canadiense)",
        imagen: "/mockup-pelicano.webp",
      },
      {
        nombre: "Arena (Parque Los Mármoles)",
        imagen: "/mockup-parque-marmoles.webp",
      },
      {
        nombre: "Café (Reserva de la Biosfera)",
        imagen: "/mockup-reserva-metztitlan.webp",
      },
    ],
  },
  {
    id: 2,
    nombre: "Termo Metálico Aislado 'Marush'",
    categoria: "Accesorios y Termos",
    descripcion:
      "Termo de alta calidad con aislamiento térmico, ideal para mantener tus bebidas a la temperatura perfecta durante tus expediciones de campo.",
    colores: [{ nombre: "Negro Mate / Acero", imagen: "/term.jpeg" }],
  },
];

export default function ItemSection() {
  const [modalContent, setModalContent] = useState(null);
  const [isProductCatalog, setIsProductCatalog] = useState(false);
  const [selectedColors, setSelectedColors] = useState({});
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef(null);

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
  };

  const handleOpenModal = (data, isCatalog = false) => {
    setIsProductCatalog(isCatalog);
    setModalContent(data);
    setIsMuted(true);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: true } }),
    );
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsProductCatalog(false);
    document.body.style.overflow = "auto";
    window.dispatchEvent(
      new CustomEvent("locationModalState", { detail: { isOpen: false } }),
    );
  };

  const toggleAudio = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

  return (
    <section
      id="productos"
      className={`relative w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-transparent flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
        modalContent ? "z-[99999]" : "z-10"
      }`}
    >
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
          Honrando la biodiversidad de la Sierra y la Barranca.
        </p>
      </div>

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
            <div className="flex flex-col flex-grow">
              <div className="w-full h-60 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center relative shadow-inner p-2 border border-white/15 shrink-0">
                <img
                  src={producto.imagen}
                  alt={producto.titulo}
                  width="600"
                  height="600"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 hover:scale-105"
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
                  onClick={() => handleOpenModal(producto, true)}
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
                        onClick={() => handleOpenModal(datosRuta, false)}
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

      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-transparent flex justify-center items-center p-3 sm:p-6 pointer-events-auto overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border rounded-[28px] sm:rounded-[36px] w-full max-w-3xl max-h-[85vh] p-4 sm:p-6 text-black shadow-2xl backdrop-blur-2xl relative transform-gpu will-change-transform flex flex-col gap-4 overflow-y-auto my-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                borderColor: "rgba(255, 255, 255, 0.35)",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* ENCABEZADO */}
              <div className="flex justify-between items-start relative gap-2">
                <div className="overflow-hidden">
                  <span
                    style={{ color: "#dc3545" }}
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-black block mb-1 truncate"
                  >
                    {isProductCatalog
                      ? "Catálogo Oficial — Marush"
                      : `${modalContent.categoria} — ${modalContent.lema || "Colección Oficial"}`}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-black drop-shadow-sm font-sans">
                    {isProductCatalog
                      ? "Indumentaria y Accesorios de Campo"
                      : modalContent.titulo}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="bg-black/10 hover:bg-black/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-black/25 cursor-pointer transition-all shadow-sm text-black shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* CONTENIDO PRODUCTOS */}
              {isProductCatalog ? (
                <div className="flex flex-col gap-5">
                  <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed text-center max-w-xl mx-auto">
                    Explora nuestra línea biocultural inspirada en la Reserva de
                    la Biosfera Barranca de Metztitlán. Selecciona una opción
                    para visualizar el modelo disponible.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catalogoProductos.map((prod) => {
                      const activeColorIndex = selectedColors[prod.id] || 0;
                      const activeColorObj = prod.colores[activeColorIndex];
                      const isTermo = prod.id === 2;

                      return (
                        <div
                          key={prod.id}
                          className="bg-white/10 border border-white/20 rounded-3xl p-4 flex flex-col justify-between shadow-xl backdrop-blur-md"
                        >
                          <div
                            className={`w-full h-56 sm:h-60 rounded-2xl overflow-hidden mb-3 relative shadow-inner flex items-center justify-center ${
                              isTermo
                                ? "bg-white border border-black/10"
                                : "bg-black/10"
                            }`}
                          >
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={activeColorObj.imagen}
                                src={activeColorObj.imagen}
                                alt={prod.nombre}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className={`w-full h-full ${
                                  isTermo
                                    ? "object-contain p-2"
                                    : "object-cover"
                                }`}
                              />
                            </AnimatePresence>
                            <span className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20 shadow-md z-10">
                              {prod.categoria}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#dc3545]">
                                Opción seleccionada: {activeColorObj.nombre}
                              </span>
                              <h4 className="text-sm sm:text-base font-black text-black tracking-tight">
                                {prod.nombre}
                              </h4>
                              <p className="text-[11px] font-semibold text-[#1C1917] leading-relaxed">
                                {prod.descripcion}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                              <span className="text-[9px] font-bold uppercase tracking-wider text-black">
                                {prod.colores.length > 1
                                  ? "Modelos:"
                                  : "Color:"}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {prod.colores.map((col, cIdx) => {
                                  const isSelected = activeColorIndex === cIdx;
                                  return (
                                    <button
                                      key={cIdx}
                                      onClick={() =>
                                        handleColorSelect(prod.id, cIdx)
                                      }
                                      className={`w-7 h-7 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shadow-sm ${
                                        isSelected
                                          ? "border-[#dc3545] scale-110 shadow-md ring-2 ring-[#dc3545]/50"
                                          : "border-white/30 opacity-70 hover:opacity-100"
                                      }`}
                                      title={col.nombre}
                                    >
                                      <img
                                        src={col.imagen}
                                        alt={col.nombre}
                                        className="w-full h-full object-cover"
                                      />
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* CONTENIDO ORIGINAL DE RUTAS */
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white/10 p-3 rounded-2xl border border-white/25 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider">
                        Locación:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.locacion}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider">
                        Duración Aprox:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.duracion}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider">
                        Participantes:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.participantes}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider">
                        Horario Sugerido:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.horario}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-[#dc3545] uppercase tracking-wider mb-1 block">
                      Descripción:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#1C1917] leading-relaxed">
                      {modalContent.descripcion}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="bg-white/10 p-3 rounded-2xl border border-white/25 flex flex-col shadow-sm">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider mb-0.5">
                        Requisitos:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.requisitos || "Ninguno"}
                      </span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl border border-white/25 flex flex-col shadow-sm">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider mb-0.5">
                        Alimentos:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.alimentos || "N/A"}
                      </span>
                    </div>
                  </div>

                  {modalContent.prohibido && (
                    <div className="bg-[#dc3545]/5 p-3 rounded-2xl border border-[#dc3545]/30 flex flex-col shadow-sm">
                      <span className="text-[9px] font-bold text-[#dc3545] uppercase tracking-wider mb-0.5">
                        Prohibido / Reglas:
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {modalContent.prohibido}
                      </span>
                    </div>
                  )}

                  {/* APARTADO DE ILUSTRACIÓN */}
                  <div className="flex flex-col mt-1">
                    <span className="text-[10px] font-black text-[#dc3545] uppercase tracking-wider mb-1.5 block">
                      Ilustración del recorrido:
                    </span>
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-white/30 relative flex items-center justify-center bg-transparent">
                      {modalContent.tipoMedia === "video" ? (
                        <>
                          <video
                            ref={modalVideoRef}
                            src={modalContent.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-h-[350px] object-cover rounded-2xl"
                          />
                          <button
                            onClick={toggleAudio}
                            className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full border border-white/30 shadow-lg flex items-center gap-1.5 transition-all cursor-pointer z-20"
                          >
                            {isMuted ? (
                              <span> Activar Sonido</span>
                            ) : (
                              <span> Silenciar</span>
                            )}
                          </button>
                        </>
                      ) : (
                        <img
                          src={
                            modalContent.ilustracionImg || modalContent.imagen
                          }
                          alt={modalContent.titulo}
                          className="w-full h-auto max-h-[350px] object-cover rounded-2xl"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
