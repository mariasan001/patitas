'use client';

import styles from '../styles/ServiciosSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPumpSoap,
  faStethoscope,
  faBone,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Spa relajante',
    description:
      'Baños, limpieza y cuidados pensados para que tu peludito viva un momento de calma, frescura y apapacho total.',
    buttonText: 'Reserva este servicio',
    icon: faPumpSoap,
    badge: 'Bienestar',
    tone: 'rose',
  },
  {
    title: 'Veterinaria',
    description:
      'Atención profesional y cercana para acompañar la salud de tu mascota con confianza, cariño y revisión experta.',
    buttonText: 'Reserva este servicio',
    icon: faStethoscope,
    badge: 'Salud',
    tone: 'gold',
  },
  {
    title: 'Productos',
    description:
      'Seleccionamos productos especiales para consentir, cuidar y hacer más feliz la rutina diaria de tu compañero.',
    buttonText: 'Explorar tienda',
    icon: faBone,
    badge: 'Favoritos',
    tone: 'brown',
  },
] as const;

export default function ServiciosSection() {
  const goToAgenda = () => {
    const agenda = document.getElementById('agenda');
    if (agenda) agenda.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <motion.div
          className={styles.headingBlock}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.kicker}>Experiencias para tu peludito</span>
          <h2 className={styles.title}>
            Nuestros <span>Servicios</span>
          </h2>
          <p className={styles.subtitle}>
            Cuidado, bienestar y productos pensados para acompañar cada momento
            importante de tu mascota con cariño y estilo.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className={`${styles.card} ${styles[`card${service.tone.charAt(0).toUpperCase() + service.tone.slice(1)}`]}`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.badge}>
                  {service.badge}
                </span>

                <div className={styles.iconWrap}>
                  <FontAwesomeIcon icon={service.icon} className={styles.icon} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>

              <button
                type="button"
                className={styles.ctaBtn}
                onClick={goToAgenda}
              >
                <span className={styles.ctaText}>{service.buttonText}</span>
                <span className={styles.ctaIconWrap}>
                  <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
                </span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
