'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { createMotionPresets, revealViewport } from '@/lib/motionPresets';
import styles from '../styles/Home.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  return (
    <motion.footer
      className={styles.footer}
      variants={motionPresets.footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div className={styles.footerInner} variants={motionPresets.staggerContainer}>
        <motion.div className={styles.footerTop} variants={motionPresets.fadeUp}>
          <motion.div className={styles.footerLogoWrap} variants={motionPresets.scaleSoft}>
            <Image
              src="/img/logo_patitas.webp"
              alt="Patitas Spa Condesa"
              width={148}
              height={75}
              className={styles.footerKickerLogo}
            />
          </motion.div>

          <motion.h2 className={styles.footerTitle} variants={motionPresets.fadeUp}>
            Tu mascota merece una experiencia
            <span> llena de cuidado y cariño</span>
          </motion.h2>

          <motion.p className={styles.footerText} variants={motionPresets.fadeUp}>
            Gracias por confiar en nosotros para acompañar el bienestar de tu
            peludito. Seguimos creando momentos especiales para ellos y para ti.
          </motion.p>
        </motion.div>

        <motion.div className={styles.footerBottom} variants={motionPresets.fadeUp}>
          <p className={styles.footerCopy}>© {currentYear} Patitas. Todos los derechos reservados.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
