'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PromesaAgendaSection.module.css';
import { useAgendaModal } from './FloatingAgendaButton';

const promisePoints = [
  {
    title: 'Trato paciente y respetuoso',
    text: 'Nos tomamos el tiempo para que cada mascota se sienta acompañada, sin prisas y con calma.',
    icon: faHeart,
  },
  {
    title: 'Cuidado pensado para su piel',
    text: 'Usamos productos suaves y adecuados para ayudar a mantener su pelaje limpio, hidratado y cómodo.',
    icon: faHeart,
  },
  {
    title: 'Atención con responsabilidad',
    text: 'Observamos su tamaño, pelaje y personalidad para darle una experiencia más segura y amable.',
    icon: faPaw,
  },
] as const;

export default function PromesaAgendaSection() {
  const { openAgenda } = useAgendaModal();

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
                src="/img/img_2.png"
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
              Cuidado responsable,
              <span> cariño real</span>
            </h2>

            <p className={styles.description}>
              Sabemos que tu mascota es parte de tu familia. Por eso cada
              servicio se realiza con calma, higiene y atención a lo que necesita.
            </p>

            <p className={styles.productNote}>
              Trabajamos con productos especializados como Uiixol para ofrecer un
              cuidado seguro, efectivo y adecuado para su piel y pelaje 🐾
            </p>

            <div className={styles.promiseList}>
              {promisePoints.map((point) => (
                <div key={point.title} className={styles.promiseItem}>
                  <span className={styles.promiseIconWrap} aria-hidden="true">
                    <FontAwesomeIcon icon={point.icon} className={styles.promiseIcon} />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.ctaBtn}
              onClick={openAgenda}
            >
              <span className={styles.ctaText}>Agendar cita</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
