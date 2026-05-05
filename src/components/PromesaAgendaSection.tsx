'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PromesaAgendaSection.module.css';
import { useAgendaModal } from './FloatingAgendaButton';
import { createMotionPresets, revealViewport } from '@/lib/motionPresets';

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
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  return (
    <section className={styles.section} id="promesa">
      <div id="agenda" className={styles.anchor} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={motionPresets.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div className={styles.visualSide} variants={motionPresets.cardReveal}>
            <div className={styles.imageCard}>
              <Image
                src="/img/img_2.webp"
                alt="Spa para mascotas en Hipódromo Condesa"
                fill
                className={styles.image}
                sizes="(max-width: 980px) 100vw, 42vw"
              />
            </div>
          </motion.div>

          <motion.div className={styles.copySide} variants={motionPresets.fadeUp}>
            <motion.span className={styles.kicker} variants={motionPresets.fadeUp}>
              Nuestra promesa
            </motion.span>

            <motion.h2 className={styles.title} variants={motionPresets.fadeUp}>
              Cuidado responsable,
              <span> cariño real</span>
            </motion.h2>

            <motion.p className={styles.description} variants={motionPresets.fadeUp}>
              Sabemos que tu mascota es parte de tu familia. Por eso cada
              servicio se realiza con calma, higiene y atención a lo que necesita.
            </motion.p>

            <motion.p className={styles.productNote} variants={motionPresets.fadeUp}>
              Trabajamos con productos especializados como Uiixol para ofrecer un
              cuidado seguro, efectivo y adecuado para su piel y pelaje 🐾
            </motion.p>

            <motion.div className={styles.promiseList} variants={motionPresets.staggerContainer}>
              {promisePoints.map((point) => (
                <motion.div
                  key={point.title}
                  className={styles.promiseItem}
                  variants={motionPresets.cardReveal}
                >
                  <span className={styles.promiseIconWrap} aria-hidden="true">
                    <FontAwesomeIcon icon={point.icon} className={styles.promiseIcon} />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              type="button"
              className={styles.ctaBtn}
              onClick={openAgenda}
              variants={motionPresets.scaleSoft}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            >
              <span className={styles.ctaText}>Agendar cita</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
