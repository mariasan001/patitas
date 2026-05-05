'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Hero.module.css";
import { useAgendaModal } from './FloatingAgendaButton';
import { createMotionPresets } from '@/lib/motionPresets';

const heroTags = ['Relax', 'Amor', 'Cuidado', 'Premium'];

export default function Hero() {
  const { openAgenda } = useAgendaModal();
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  return (
    <motion.section
      className={styles.hero}
      id="inicio"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroTextBlock}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.heroEyebrow} variants={motionPresets.fadeUp}>
            Spa y bienestar para mascotas
          </motion.span>

          <motion.h1 className={styles.heroTitle} variants={motionPresets.fadeUp}>
            Bienvenidos a <span>Patitas</span>
          </motion.h1>

          <motion.p className={styles.heroSubtitle} variants={motionPresets.fadeUp}>
            Cuidado cálido, baño y grooming para consentir a quienes más amas
            con una experiencia tranquila, segura y llena de cariño.
          </motion.p>

          <motion.ul
            className={styles.heroTags}
            aria-label="Beneficios principales de Patitas"
            variants={motionPresets.staggerContainer}
          >
            {heroTags.map((tag) => (
              <motion.li key={tag} variants={motionPresets.scaleSoft}>
                {tag}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            type="button"
            className={styles.ctaBtn}
            onClick={openAgenda}
            variants={motionPresets.scaleSoft}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          >
            <span className={styles.ctaText}>Agenda tu cita</span>

            <span className={styles.ctaIconWrap}>
              <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
