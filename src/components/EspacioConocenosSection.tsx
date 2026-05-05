'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faClock,
  faLocationDot,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/EspacioConocenosSection.module.css';

const MAPS_URL = 'https://maps.app.goo.gl/oPir31UghixCmMiy7';

const socialLinks = [
  {
    label: 'TikTok',
    icon: faTiktok,
    href: 'https://www.tiktok.com/@patitas.spa.conde',
  },
  {
    label: 'Instagram',
    icon: faInstagram,
    href: 'https://www.instagram.com/patitas_spa_condesa/',
  },
  {
    label: 'Facebook',
    icon: faFacebookF,
    href: 'https://www.facebook.com/profile.php?id=61583550540949',
  },
] as const;

export default function EspacioConocenosSection() {
  return (
    <section className={styles.section} id="espacio">
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.copySide}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={styles.kicker}>Conócenos</span>

            <h2 className={styles.title}>
              Visítanos en
              <span> Hipódromo Condesa</span>
            </h2>

            <p className={styles.description}>
              Un espacio cálido para cuidar a tu mascota con calma, higiene y
              atención cercana. Aquí encuentras lo esencial para planear tu visita.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faClock} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Horarios</h3>
                  <p>Lunes a sábado: 9:00 am - 5:00 pm</p>
                  <p>Domingo: 9:00 am - 4:00 pm</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faLocationDot} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Ubicación</h3>
                  <p>Av Nuevo León 217, Hipódromo Condesa</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faShareNodes} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Síguenos</h3>
                  <div className={styles.socialLinks} aria-label="Redes sociales de Patitas">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                        aria-label={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href={MAPS_URL} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              <span className={styles.ctaText}>Ver en Google Maps</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.ctaIcon} />
              </span>
            </a>
          </motion.div>

          <motion.div
            className={styles.visualSide}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
          >
            <div className={styles.photoGrid}>
              <div className={`${styles.photoCard} ${styles.photoMain}`}>
                <Image
                  src="/img/sitio_1.png"
                  alt="Interior de Patitas"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className={`${styles.photoCard} ${styles.photoSmall}`}>
                <Image
                  src="/img/sitio_2.png"
                  alt="Zona de atención en Patitas"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              <div className={`${styles.photoCard} ${styles.photoSmall}`}>
                <Image
                  src="/img/sitio_3.png"
                  alt="Espacio de cuidado en Patitas"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingBadge}>Patitas</span>
                <p>Ambiente cálido · atención con cariño</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
