'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Hero.module.css";
import { useAgendaModal } from './FloatingAgendaButton';

export default function Hero() {
  const { openAgenda } = useAgendaModal();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroTextBlock}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Bienvenidos a <span>Patitas</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Spa y bienestar para tu mascota.
            <br />
            Para consentir a quienes más amas. Aquí cada peludito vive una experiencia
            de tranquilidad, cariño y bienestar total.
          </motion.p>

          <motion.p
            className={styles.heroAccent}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Relax, amor y cuidado premium
          </motion.p>

          <motion.button
            type="button"
            className={styles.ctaBtn}
            onClick={openAgenda}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.985 }}
          >
            <span className={styles.ctaText}>Agenda tu cita</span>

            <span className={styles.ctaIconWrap}>
              <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
