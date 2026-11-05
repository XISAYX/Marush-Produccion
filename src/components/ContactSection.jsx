import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-24 px-4 sm:px-6 md:px-10 lg:px-16 z-10 bg-transparent flex flex-col items-center justify-center min-h-screen scroll-mt-28"
    >
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-black block mb-2"
          style={{ color: "#ff1a2e" }}
        >
          Canal Directo
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Contacto
        </h2>
        <p className="text-xs sm:text-sm text-black font-semibold mt-2 leading-relaxed max-w-xl text-center">
          Ponte en contacto con nuestro equipo de brigadistas comunitarios y
          gestores de la reserva para resolver tus dudas o planear tu próxima
          expedición.
        </p>
      </div>

      {/* CONTENEDOR PRINCIPAL DE DOS COLUMNAS */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y DATOS INSTITUCIONALES */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 rounded-[32px] p-6 sm:p-8 backdrop-blur-md flex flex-col gap-6 shadow-2xl h-full justify-between"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="text-[10px] font-black uppercase tracking-[0.3em] block mb-1"
                style={{ color: "#ff1a2e" }}
              >
                Atención Ciudadana y Visitantes
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Gracias por tu interés en nuestra página
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
              Puedes ponerte en contacto con nosotros a través del formulario o
              mediante los canales de comunicación directa de nuestra brigada
              comunitaria en la Reserva de la Biosfera Barranca de Metztitlán.
            </p>

            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
              Si necesitas información referente a los recorridos
              interpretativos, investigación científico-legal o nuestra línea
              textil biocultural <strong className="text-white">Marush</strong>,
              escríbenos y te atenderemos con gusto.
            </p>
          </div>

          {/* BLOQUE DE DATOS DE CONTACTO */}
          <div className="mt-6 pt-6 border-t border-white/25 flex flex-col gap-4 text-xs">
            <div className="flex flex-col gap-1">
              <span className="font-extrabold text-[#ff1a2e] uppercase tracking-wider text-[10px]">
                Correo Electrónico:
              </span>
              <span className="font-bold text-white text-sm">
                marush846@gmail.com
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-extrabold text-[#ff1a2e] uppercase tracking-wider text-[10px]">
                Ubicación Operativa:
              </span>
              <span className="font-semibold text-black">
                Reserva de la Biosfera Barranca de Metztitlán, Hidalgo, México.
              </span>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: FORMULARIO DE MENSAJE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 rounded-[32px] p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Envíanos un Mensaje
            </h3>
            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
              Si tienes alguna duda, comentario o deseas agendar una experiencia
              en la reserva, llena este formulario y te responderemos a la
              brevedad posible. ¡Gracias!
            </p>
          </div>

          {enviado && (
            <div className="bg-green-500/20 border border-green-500/40 p-4 rounded-2xl text-white text-xs sm:text-sm font-bold text-center">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
              pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                name="nombre"
                required
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-black placeholder-black/60 font-semibold focus:outline-none focus:border-[#ff1a2e] backdrop-blur-md shadow-inner transition-all"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-black placeholder-black/60 font-semibold focus:outline-none focus:border-[#ff1a2e] backdrop-blur-md shadow-inner transition-all"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="asunto"
                required
                placeholder="Asunto / Motivo de contacto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-black placeholder-black/60 font-semibold focus:outline-none focus:border-[#ff1a2e] backdrop-blur-md shadow-inner transition-all"
              />
            </div>

            <div className="relative">
              <textarea
                name="mensaje"
                required
                rows="4"
                placeholder="Escribe aquí tu mensaje..."
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-black placeholder-black/60 font-semibold focus:outline-none focus:border-[#ff1a2e] backdrop-blur-md shadow-inner transition-all resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ff1a2e] hover:bg-[#e01527] text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-xl cursor-pointer border border-white/30 backdrop-blur-md"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
