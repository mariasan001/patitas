'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faHeart,
  faPlay,
  faWandSparkles,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/NuestrosClientesSection.module.css';
import { createMotionPresets, revealViewport } from '@/lib/motionPresets';

type ClientMoment = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  label: string;
  variant: 'feature' | 'storyTall' | 'portrait' | 'square' | 'story' | 'landscape';
  poster?: string;
};

const clientMoments: readonly ClientMoment[] = [
  {
    type: 'image',
    src: '/img/testimoniales/cliente-spa-feliz-01.webp',
    alt: 'Perrito después de su spa y grooming en Patitas Spa Condesa',
    label: 'Después del spa',
    variant: 'feature',
  },
  {
    type: 'video',
    src: '/img/testimoniales/cliente-video-spa-01.mp4',
    poster: '/img/testimoniales/cliente-video-spa-01-poster.webp',
    alt: 'Video de perrito durante su cita de baño y cuidado en Patitas Spa Condesa',
    label: 'Video real',
    variant: 'storyTall',
  },
  {
    type: 'image',
    src: '/img/testimoniales/cliente-cuidado-real-02.webp',
    alt: 'Cliente peludito después de recibir grooming en Hipódromo Condesa',
    label: 'Cliente feliz',
    variant: 'portrait',
  },
  {
    type: 'image',
    src: '/img/testimoniales/cliente-cuidado-real-03.webp',
    alt: 'Mascota tranquila después de su experiencia de cuidado en Patitas Spa Condesa',
    label: 'Mucho cariño',
    variant: 'square',
  },
  {
    type: 'video',
    src: '/img/testimoniales/cliente-video-cuidado-02.mp4',
    poster: '/img/testimoniales/cliente-video-cuidado-02-poster.webp',
    alt: 'Video vertical de mascota disfrutando su visita a Patitas Spa Condesa',
    label: 'Caritas reales',
    variant: 'story',
  },
  {
    type: 'image',
    src: '/img/testimoniales/cliente-grooming-feliz-04.webp',
    alt: 'Perrito listo después de su cita de grooming en Patitas Spa Condesa',
    label: 'Listo para abrazos',
    variant: 'landscape',
  },
  {
    type: 'image',
    src: '/img/testimoniales/cliente-grooming-feliz-05.webp',
    alt: 'Baño y cuidado para mascotas en Hipódromo Condesa',
    label: 'Cuidado con calma',
    variant: 'portrait',
  },
  {
    type: 'image',
    src: '/img/testimoniales/cliente-peludito-feliz-06.webp',
    alt: 'Perrito contento después de recibir atención y cariño en Patitas',
    label: 'Peludito consentido',
    variant: 'portrait',
  },
];

export default function NuestrosClientesSection() {
  const [activeMoment, setActiveMoment] = useState<ClientMoment | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!activeMoment) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMoment(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMoment]);

  useEffect(() => {
    const activeCard = cardRefs.current[selectedIndex];
    if (!activeCard) return;

    activeCard.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [selectedIndex, shouldReduceMotion]);

  return (
    <section className={styles.section} id="clientes">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div className={styles.headerCopy} variants={motionPresets.fadeUp}>
            <span className={styles.kicker}>Nuestros clientes</span>

            <h2 className={styles.title}>
              Peluditos felices
              <span> y momentos que sí se sienten</span>
            </h2>

            <p className={styles.subtitle}>
              Momentos llenos de cariño, cuidado y muchas patitas felices. Una muestra
              real de la confianza que nos regalan las familias que visitan Patitas.
            </p>
          </motion.div>

          <motion.div className={styles.headerMeta} variants={motionPresets.fadeUp}>
            <div className={styles.metaCard}>
              <span className={styles.metaIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWandSparkles} />
              </span>
              <div>
                <strong>Recuerdos reales</strong>
                <p>Una muestra viva del cariño con el que se vive Patitas.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.deckWrap}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <div className={styles.deckIntro}>
            <span className={styles.deckChip}>
              <FontAwesomeIcon icon={faHeart} />
              Peluditos felices
            </span>
          </div>

          <motion.div className={styles.cardRail} variants={motionPresets.staggerContainer}>
            {clientMoments.map((moment, index) => (
              <motion.button
                key={moment.src}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                type="button"
                className={`${styles.card} ${styles[`card${moment.variant.charAt(0).toUpperCase() + moment.variant.slice(1)}`]} ${index === 0 ? styles.cardFirst : ''} ${selectedIndex === index ? styles.cardSelected : styles.cardMuted}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setActiveMoment(moment);
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                onFocus={() => setSelectedIndex(index)}
                aria-label={`Abrir ${moment.type === 'video' ? 'video' : 'imagen'}: ${moment.alt}`}
                aria-pressed={selectedIndex === index}
                variants={motionPresets.cardReveal}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              >
                <div className={styles.mediaFrame}>
                  {moment.type === 'image' ? (
                    <Image
                      src={moment.src}
                      alt={moment.alt}
                      fill
                      className={styles.media}
                      sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 25vw"
                    />
                  ) : (
                    <video
                      className={styles.media}
                      muted
                      playsInline
                      preload="metadata"
                      poster={moment.poster}
                      aria-label={moment.alt}
                    >
                      <source src={moment.src} type="video/mp4" />
                    </video>
                  )}

                  <div className={styles.mediaOverlay}>
                    <div className={styles.overlayCopy}>
                      <span className={styles.tag}>{moment.label}</span>
                      {index === 0 && <p className={styles.overlayTitle}>{moment.alt}</p>}
                    </div>
                    <div className={styles.overlayAction}>
                      {moment.type === 'video' ? (
                        <span className={styles.playBadge} aria-hidden="true">
                          <FontAwesomeIcon icon={faPlay} />
                        </span>
                      ) : (
                        <span className={styles.viewBadge} aria-hidden="true">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeMoment && (
          <motion.div
            className={styles.lightbox}
            onClick={() => setActiveMoment(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setActiveMoment(null)}
              aria-label="Cerrar vista ampliada"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <motion.div
              className={styles.lightboxCard}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className={styles.lightboxMedia}>
                {activeMoment.type === 'image' ? (
                  <Image
                    src={activeMoment.src}
                    alt={activeMoment.alt}
                    fill
                    className={styles.lightboxAsset}
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <video
                    className={styles.lightboxAsset}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster={activeMoment.poster}
                  >
                    <source src={activeMoment.src} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className={styles.lightboxCopy}>
                <span className={styles.lightboxTag}>{activeMoment.label}</span>
                <p>{activeMoment.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
