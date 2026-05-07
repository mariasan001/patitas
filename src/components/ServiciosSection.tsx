'use client';

import styles from '../styles/ServiciosSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPumpSoap,
  faScissors,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { motion, useReducedMotion } from 'framer-motion';
import { createMotionPresets, revealViewport } from '@/lib/motionPresets';

const services = [
  {
    title: 'Spa',
    description:
      'Baño, limpieza y cuidados esenciales para que tu mascota salga fresca, tranquila y feliz.',
    buttonText: 'Solicitar más detalles',
    icon: faPumpSoap,
    badge: 'Spa relajante',
    tone: 'rose',
    highlights: ['Baño relajante con romero', 'Spa de patitas', 'Limpieza de oídos'],
    whatsappMessage: 'Hola, me gustaría saber más sobre el servicio de baño.',
  },
  {
    title: 'Grooming',
    description:
      'Arreglo, corte y cepillado con atención paciente para cuidar su estilo y comodidad.',
    buttonText: 'Solicitar más detalles',
    icon: faScissors,
    badge: 'Grooming',
    tone: 'gold',
    highlights: ['Corte personalizado', 'Cepillado', 'Deslanado'],
    whatsappMessage: 'Hola, me gustaría saber más sobre el servicio de corte.',
  },
  {
    title: 'Servicios extras',
    description:
      'Complementos puntuales para reforzar higiene, pelaje y bienestar cuando más lo necesita.',
    buttonText: 'Solicitar más detalles',
    icon: faWandSparkles,
    badge: 'Toque extra',
    tone: 'brown',
    highlights: ['Hidratación', 'Cepillado extra', 'Cuidado puntual'],
    whatsappMessage: 'Hola, me gustaría saber más sobre los servicios extras.',
  },
] as const;

const WHATSAPP_PHONE = '525625642593';

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export default function ServiciosSection() {
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <motion.div
          className={styles.headingBlock}
          variants={motionPresets.sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <span className={styles.kicker}>Experiencias para tu peludito</span>
          <h2 className={styles.title}>
            Nuestros <span>Servicios</span>
          </h2>
          <p className={styles.subtitle}>
            Te orientamos con el servicio ideal según el tamaño, pelaje y
            personalidad de tu mascota. También ofrecemos corte de uñas, limpieza
            bucal, depilación de oídos, rasurado higiénico y más.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className={`${styles.card} ${styles[`card${service.tone.charAt(0).toUpperCase() + service.tone.slice(1)}`]}`}
              variants={motionPresets.cardReveal}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.badge}>{service.badge}</span>

                <div className={styles.iconWrap}>
                  <FontAwesomeIcon icon={service.icon} className={styles.icon} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>

                <div className={styles.cardMeta}>
                  {service.highlights.map((highlight) => (
                    <span key={highlight} className={styles.metaPill}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
                aria-label={`Solicitar más detalles de ${service.title} por WhatsApp`}
              >
                <span className={styles.ctaText}>{service.buttonText}</span>
                <span className={styles.ctaIconWrap}>
                  <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
                </span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
