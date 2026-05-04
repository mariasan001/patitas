'use client';

import { useState } from 'react';
import styles from '../styles/ServiciosSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faPumpSoap,
  faScissors,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Spa',
    description:
      'Bano, limpieza y cuidados esenciales para que tu peludito disfrute una experiencia relajante y completa.',
    buttonText: 'Ver detalles',
    icon: faPumpSoap,
    badge: 'Bienestar',
    tone: 'rose',
    detailId: 'servicio-spa',
    priceHint: 'Desde $255',
    extraHint: 'Tallas S a XL y gato',
  },
  {
    title: 'Grooming',
    description:
      'Bano con corte personalizado, cepillado y atencion especial para mantener su estilo y comodidad.',
    buttonText: 'Ver detalles',
    icon: faScissors,
    badge: 'Estilo',
    tone: 'gold',
    detailId: 'servicio-grooming',
    priceHint: 'Desde $305',
    extraHint: 'Incluye corte y opciones para gato',
  },
  {
    title: 'Servicios extras',
    description:
      'Complementos de cuidado como hidratacion, cepillado extra, unas, oido y soluciones para manto.',
    buttonText: 'Ver detalles',
    icon: faWandSparkles,
    badge: 'Extras',
    tone: 'brown',
    detailId: 'servicio-extras',
    priceHint: 'Desde $45',
    extraHint: 'Opciones por talla y servicio puntual',
  },
] as const;

const serviceDetails = [
  {
    id: 'servicio-spa',
    title: 'Spa',
    intro:
      'Servicios de limpieza y bienestar para dejar a tu mascota fresca, relajada y comoda.',
    tone: 'rose',
    groups: [
      {
        title: 'Bano',
        prices: [
          ['S', '$255'],
          ['M', '$305'],
          ['L', '$355'],
          ['XL', '$405'],
          ['Gato', '$405'],
        ],
        items: [
          'Shampoo hipoalergenico o shampoo hipoalergenico UIIXOL',
          'Secado',
          'Limpieza de oidos',
          '15 min de cepillado',
          'Corte de unas',
          'Drenado de glandulas',
          'Fragancia',
        ],
      },
    ],
  },
  {
    id: 'servicio-grooming',
    title: 'Grooming',
    intro:
      'Una experiencia mas completa para quienes buscan bano, arreglo y una apariencia personalizada.',
    tone: 'gold',
    groups: [
      {
        title: 'Grooming',
        prices: [
          ['S', '$305'],
          ['M', '$355'],
          ['L', '$405'],
          ['XL', '$505'],
          ['Gato', '$455'],
        ],
        items: [
          'Bano',
          'Shampoo hipoalergenico o shampoo hipoalergenico UIIXOL',
          'Secado',
          'Limpieza de oidos',
          '15 min de cepillado',
          'Corte de unas',
          'Drenado de glandulas',
          'Corte personalizado',
          'Fragancia',
        ],
      },
      {
        title: 'Corte de rescate',
        prices: [
          ['S', '$65'],
          ['M', '$80'],
          ['L', '$100'],
          ['XL', '$120'],
        ],
        items: ['Corte higienico', 'Nudos en orejas, axilas, hocico o cola'],
      },
      {
        title: 'Recuperacion de manto',
        prices: [
          ['S', '$65'],
          ['M', '$80'],
          ['L', '$100'],
          ['XL', '$120'],
        ],
        items: [
          'Hidratacion',
          'Cepillado',
          'Acondicionador de brillo y suavidad',
          'Dermoprotector',
        ],
      },
    ],
  },
  {
    id: 'servicio-extras',
    title: 'Servicios extras',
    intro:
      'Complementos pensados para reforzar el cuidado, la higiene y el confort de tu mascota.',
    tone: 'brown',
    groups: [
      {
        title: 'Spa',
        prices: [['General', '$45']],
        items: ['Humectacion de cojinetes', 'Despeje de huellitas'],
      },
      {
        title: 'Cuidado bucal',
        prices: [['General', '$55']],
        items: ['Cepillado', 'Gel antiplaca', 'Spray refrescante'],
      },
      {
        title: 'Bano hidratante y antipulgas',
        prices: [
          ['S', '$55'],
          ['M', '$65'],
          ['L', '$75'],
          ['XL', '$85'],
        ],
        items: [
          'Bano premium Uiixol',
          'Jabon artesanal de origen vegetal',
          'Ideal para pieles sensibles',
        ],
      },
      {
        title: 'Deslanado',
        prices: [
          ['S', '$55'],
          ['M', '$75'],
          ['L', '$100'],
          ['XL', '$120'],
        ],
        items: ['Retiro de pelo suelto', 'Apoyo para manto abundante'],
      },
      {
        title: 'Cepillado extra',
        prices: [
          ['S', '$45'],
          ['M', '$65'],
          ['L', '$90'],
          ['XL', '$110'],
        ],
        items: ['Refuerzo de cepillado para mantener el pelaje en mejor estado'],
      },
      {
        title: 'Rasurado higienico',
        prices: [['General', '$55']],
        items: ['Apoyo puntual para higiene'],
      },
      {
        title: 'Corte de unas',
        prices: [['General', '$55']],
        items: ['Corte seguro y rapido'],
      },
      {
        title: 'Limado de unas',
        prices: [['General', '$65']],
        items: ['Acabado mas suave y comodo'],
      },
      {
        title: 'Depilacion de oido',
        prices: [['General', '$45']],
        items: ['Retiro puntual para apoyar higiene del oido'],
      },
    ],
  },
] as const;

type DetailId = (typeof serviceDetails)[number]['id'];

export default function ServiciosSection() {
  const [activeDetailId, setActiveDetailId] = useState<DetailId>(serviceDetails[0].id);

  const goToAgenda = () => {
    const agenda = document.getElementById('agenda');
    if (agenda) agenda.scrollIntoView({ behavior: 'smooth' });
  };

  const goToDetail = (id: DetailId) => {
    setActiveDetailId(id);
    const detail = document.getElementById(id);
    if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeDetail =
    serviceDetails.find((detail) => detail.id === activeDetailId) ?? serviceDetails[0];

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
            Cuidado, bienestar y productos pensados para acompanar cada momento
            importante de tu mascota con carino y estilo.
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
                  <span className={styles.priceHint}>{service.priceHint}</span>
                  <span className={styles.extraHint}>{service.extraHint}</span>
                </div>
              </div>

              <button
                type="button"
                className={styles.ctaBtn}
                onClick={() => goToDetail(service.detailId)}
              >
                <span className={styles.ctaText}>{service.buttonText}</span>
                <span className={styles.ctaIconWrap}>
                  <FontAwesomeIcon icon={faPaw} className={styles.ctaIcon} />
                </span>
              </button>
            </motion.article>
          ))}
        </div>

        <motion.section
          id="servicios-detalle"
          className={styles.detailHub}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className={styles.detailHubHeader}>
            <div>
              <span className={styles.detailHubEyebrow}>Tarifario</span>
              <h3 className={styles.detailHubTitle}>Consulta el detalle por servicio</h3>
            </div>
            <button type="button" className={styles.detailCta} onClick={goToAgenda}>
              Agendar
            </button>
          </div>

          <div className={styles.detailTabs} role="tablist" aria-label="Tipos de servicio">
            {serviceDetails.map((detail) => {
              const isActive = detail.id === activeDetail.id;
              return (
                <button
                  key={detail.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.detailTab} ${isActive ? styles.detailTabActive : ''}`}
                  onClick={() => setActiveDetailId(detail.id)}
                >
                  {detail.title}
                </button>
              );
            })}
          </div>

          <article
            id={activeDetail.id}
            className={`${styles.detailCard} ${activeDetail.groups.length === 1 ? styles.detailCardCompact : ''} ${styles[`detail${activeDetail.tone.charAt(0).toUpperCase() + activeDetail.tone.slice(1)}`]}`}
          >
            <div className={styles.detailHeader}>
              <div>
                <span className={styles.detailEyebrow}>Informacion real</span>
                <h3 className={styles.detailTitle}>{activeDetail.title}</h3>
              </div>
            </div>

            <p className={styles.detailIntro}>{activeDetail.intro}</p>

            <div
              className={`${styles.detailGroups} ${activeDetail.groups.length === 1 ? styles.detailGroupsSingle : ''}`}
            >
              {activeDetail.groups.map((group) => (
                <section key={group.title} className={styles.groupCard}>
                  <div className={styles.groupTop}>
                    <h4 className={styles.groupTitle}>{group.title}</h4>

                    <div className={styles.priceList}>
                      {group.prices.map(([label, price]) => (
                        <div key={`${group.title}-${label}`} className={styles.priceRow}>
                          <span className={styles.priceLabel}>{label}</span>
                          <span className={styles.priceValue}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className={styles.groupItems}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        </motion.section>
      </div>
    </section>
  );
}
