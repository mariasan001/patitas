'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PromesaAgendaSection.module.css';

const WHATSAPP_URL =
  'https://wa.me/521234567890?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20mi%20mascota';

export default function PromesaAgendaSection() {
  return (
<section className={styles.section} id="promesa">
  <div id="agenda" className={styles.anchor} />

  <div className={styles.container}>
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.visualSide}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
      >
        <div className={styles.imageCard}>
          <Image
            src="/img/img_1.png"
            alt="Mascota recibiendo cuidados en Patitas"
            fill
            className={styles.image}
            sizes="(max-width: 980px) 100vw, 42vw"
            priority={false}
          />
        </div>
      </motion.div>

      <div className={styles.copySide}>
        <span className={styles.kicker}>Nuestra promesa</span>

        <h2 className={styles.title}>
          Cuidado con cariño,
          <span> calma y confianza</span>
        </h2>

        <p className={styles.description}>
          Cada visita está pensada para que tu mascota se sienta segura,
          acompañada y tranquila. Nuestro compromiso es ofrecer una
          experiencia amorosa, profesional y llena de bienestar.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
        >
          <span className={styles.ctaText}>Agendar cita</span>
          <span className={styles.ctaIconWrap}>
            <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
          </span>
        </a>
      </div>
    </motion.div>
  </div>
</section>
  );
}