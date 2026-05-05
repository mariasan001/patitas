'use client';

import styles from '../styles/ServiciosSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPumpSoap,
  faScissors,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Spa',
    description:
      'Baño, limpieza y cuidados esenciales para que tu mascota salga fresca, tranquila y feliz.',
    buttonText: 'Solicitar más detalles',
    icon: faPumpSoap,
    badge: 'Cuidado suave',
    tone: 'rose',
    highlights: ['Baño relajante', 'Limpieza de oídos', 'Corte de uñas'],
    whatsappMessage: 'Hola, me gustaría saber más sobre el servicio de baño 🐾',
  },
  {
    title: 'Grooming',
    description:
      'Arreglo, corte y cepillado con atención paciente para cuidar su estilo y comodidad.',
    buttonText: 'Solicitar más detalles',
    icon: faScissors,
    badge: 'Look cuidado',
    tone: 'gold',
    highlights: ['Corte personalizado', 'Cepillado', 'Acabado limpio'],
    whatsappMessage: 'Hola, me gustaría saber más sobre el servicio de corte ✂️',
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
    whatsappMessage: 'Hola, me gustaría saber más sobre los servicios extras 🐶',
  },
] as const;

const WHATSAPP_PHONE = '527292324754';

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export default function ServiciosSection() {
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
            Te orientamos con el servicio ideal según el tamaño, pelaje y
            personalidad de tu mascota. También ofrecemos corte de uñas, limpieza
            bucal, depilación de oídos, rasurado higiénico y más.
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
                rel="noreferrer"
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
        </div>
      </div>
    </section>
  );
}
