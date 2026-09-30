import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contacto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full py-10 px-4 sm:px-8 md:px-16 lg:px-20 bg-black/65 backdrop-blur-2xl border-t border-white/10 text-stone-300 transform-gpu will-change-transform z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
        {/* BLOQUE 1: LOGOTIPO Y DESCRIPCIÓN CON EFECTO HOVER SUAVE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto"
        >
          <img
            src="/logo-marush.webp"
            alt="Logotipo Marush"
            width="128"
            height="50"
            loading="lazy"
            className="w-28 sm:w-32 object-contain filter invert drop-shadow-md transform-gpu transition-transform duration-500 hover:scale-105 will-change-transform"
            onError={(e) => {
              e.target.src = "/logo-marush.png";
            }}
          />
          <p className="text-[11px] sm:text-xs text-stone-300 font-light max-w-xs leading-relaxed">
            Conservar la Barranca de Metztitlán es un acto de supervivencia y
            orgullo.
          </p>
        </motion.div>

        {/* BLOQUE 2: INFORMACIÓN DE CONTACTO PROFESIONAL INTERACTIVA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-center gap-1.5 w-full md:w-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-extrabold text-[#dc3545] drop-shadow-sm">
            Contacto Directo
          </span>
          <div className="flex flex-col sm:flex-row md:flex-col gap-1 sm:gap-4 md:gap-1 text-xs sm:text-sm font-medium text-stone-200">
            <a
              href="mailto:contacto@marush.com"
              className="hover:text-white transition-colors tracking-wide underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
            >
              contacto@marush.com
            </a>
            <a
              href="tel:+527710000000"
              className="text-stone-300 hover:text-white transition-colors text-xs tracking-wide"
            >
              +52 (771) 000-0000
            </a>
          </div>
        </motion.div>

        {/* BLOQUE 3: DERECHOS RESERVADOS Y UBICACIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-end justify-center text-[11px] text-stone-400 font-light space-y-1 w-full md:w-auto"
        >
          <p>© 2026 Marush. Todos los derechos reservados.</p>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            Barranca de Metztitlán, Hidalgo
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
