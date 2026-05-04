'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faPaw,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/EspacioConocenosSection.module.css';

export default function EspacioConocenosSection() {
  const goToLlegar = () => {
    const target = document.getElementById('llegar');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

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
              Un espacio creado para
              <span> su bienestar y tu tranquilidad</span>
            </h2>

            <p className={styles.description}>
              En Patitas cuidamos cada detalle para que tu mascota viva una
              experiencia tranquila, segura y amorosa. Queremos que desde el
              momento en que llegan, ambos sientan confianza, calma y mucho
              cariño.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faHeart} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Atención cercana</h3>
                  <p>Tratamos a cada peludito con paciencia, ternura y respeto.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faHeart} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Espacios limpios y cuidados</h3>
                  <p>Un entorno pensado para transmitir comodidad y confianza.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIconWrap}>
                  <FontAwesomeIcon icon={faPaw} className={styles.featureIcon} />
                </span>
                <div>
                  <h3>Ambiente tranquilo</h3>
                  <p>Diseñado para que cada visita se sienta más amable y relajada.</p>
                </div>
              </div>
            </div>

            <button type="button" className={styles.ctaBtn} onClick={goToLlegar}>
              <span className={styles.ctaText}>Ver ubicación</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
              </span>
            </button>
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
