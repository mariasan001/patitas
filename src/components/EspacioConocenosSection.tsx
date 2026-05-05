'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faClock,
  faLocationDot,
  faShareNodes,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/EspacioConocenosSection.module.css';
import { createMotionPresets, revealViewport } from '@/lib/motionPresets';

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

const galleryImages = [
  {
    src: '/img/sitio_1.webp',
    alt: 'Spa para mascotas en Hipódromo Condesa',
    variant: 'main',
    sizes: '(max-width: 768px) 62vw, 40vw',
  },
  {
    src: '/img/sitio_2.webp',
    alt: 'Zona de baño y grooming para mascotas en Condesa',
    variant: 'small',
    sizes: '(max-width: 768px) 34vw, 20vw',
  },
  {
    src: '/img/sitio_3.webp',
    alt: 'Espacio de cuidado para perros y gatos en Patitas Spa',
    variant: 'small',
    sizes: '(max-width: 768px) 34vw, 20vw',
  },
] as const;

export default function EspacioConocenosSection() {
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  return (
    <section className={styles.section} id="conocenos">
      <div className={styles.container}>
        <motion.div
          className={styles.layout}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div className={styles.copySide} variants={motionPresets.fadeUp}>
            <span className={styles.kicker}>Conócenos</span>

            <h2 className={styles.title}>
              Visítanos en
              <span> Hipódromo Condesa</span>
            </h2>

            <p className={styles.description}>
              Un espacio cálido para cuidar a tu mascota con calma, higiene y
              atención cercana. Aquí encuentras lo esencial para planear tu visita.
            </p>

            <motion.div className={styles.featureList} variants={motionPresets.staggerContainer}>
              <motion.div className={styles.featureItem} variants={motionPresets.cardReveal}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faClock} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Horarios</h3>
                  <p>Lunes a sábado: 9:00 am - 5:00 pm</p>
                  <p>Domingo: 9:00 am - 4:00 pm</p>
                </div>
              </motion.div>

              <motion.div className={styles.featureItem} variants={motionPresets.cardReveal}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faLocationDot} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Ubicación</h3>
                  <p>Av Nuevo León 217, Hipódromo Condesa</p>
                </div>
              </motion.div>

              <motion.div className={styles.featureItem} variants={motionPresets.cardReveal}>
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
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              variants={motionPresets.scaleSoft}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            >
              <span className={styles.ctaText}>Cómo llegar</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.ctaIcon} />
              </span>
            </motion.a>
          </motion.div>

          <motion.div className={styles.visualSide} variants={motionPresets.cardReveal}>
            <motion.div className={styles.photoGrid} variants={motionPresets.staggerContainer}>
              {galleryImages.map((image) => (
                <motion.button
                  key={image.src}
                  type="button"
                  className={`${styles.photoCard} ${image.variant === 'main' ? styles.photoMain : styles.photoSmall}`}
                  onClick={() => setActiveImage(image)}
                  aria-label={`Ver imagen ampliada: ${image.alt}`}
                  variants={motionPresets.cardReveal}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.photo}
                    sizes={image.sizes}
                  />
                </motion.button>
              ))}

              <div className={styles.floatingCard}>
                <span className={styles.floatingBadge}>Patitas</span>
                <p>Ambiente cálido · atención con cariño</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {activeImage && (
        <button
          type="button"
          className={styles.lightbox}
          onClick={() => setActiveImage(null)}
          aria-label="Cerrar imagen ampliada"
        >
          <span className={styles.lightboxClose} aria-hidden="true">
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <span className={styles.lightboxImageWrap}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className={styles.lightboxImage}
              sizes="100vw"
            />
          </span>
        </button>
      )}
    </section>
  );
}
