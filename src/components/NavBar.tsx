'use client';

import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAgendaModal } from './FloatingAgendaButton';
import { createMotionPresets } from '@/lib/motionPresets';

config.autoAddCss = false;

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Nuestra promesa', href: '#promesa', id: 'promesa' },
  { label: 'Conócenos', href: '#conocenos', id: 'conocenos' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const [scrolled, setScrolled] = useState(false);
  const { openAgenda } = useAgendaModal();
  const shouldReduceMotion = useReducedMotion();
  const motionPresets = createMotionPresets(shouldReduceMotion);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    let ticking = false;

    const getActivationOffset = () => {
      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 56;
      const visualOffset = window.innerWidth <= 920 ? 72 : 96;

      return navHeight + visualOffset;
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const sections = sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean) as HTMLElement[];

        const activationLine = window.scrollY + getActivationOffset();
        const pageBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 8;
        let currentSection = sections[0];

        for (const section of sections) {
          if (section.offsetTop <= activationLine) {
            currentSection = section;
          }
        }

        if (pageBottom && sections.length) {
          setActiveSection(`#${sections[sections.length - 1].id}`);
        } else if (currentSection) {
          setActiveSection(`#${currentSection.id}`);
        }

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavigate = (href: string) => {
    const target = document.querySelector<HTMLElement>(href);

    if (target) {
      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 56;
      const clickOffset = navHeight + (window.innerWidth <= 920 ? 20 : 28);
      const targetTop = target.getBoundingClientRect().top + window.scrollY - clickOffset;

      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
      setActiveSection(href);
    }

    setOpen(false);
  };

  const handleAgenda = () => {
    openAgenda();
    setOpen(false);
  };

  return (
    <>
      <motion.header
        className={styles.navbarMotion}
        variants={motionPresets.navReveal}
        initial="hidden"
        animate="visible"
      >
        <nav
          className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
          aria-label="Navegación principal"
        >
          <div className={styles.leftSide}>
            <button
              type="button"
              className={styles.logoWrapper}
              onClick={() => handleNavigate('#inicio')}
              aria-label="Ir al inicio"
            >
              <div className={styles.logo}>
                <Image
                  src="/img/logo_patitas.webp"
                  alt="Patitas Spa Condesa"
                  width={92}
                  height={62}
                  preload
                />
              </div>
            </button>
          </div>

          <div className={styles.centerSide}>
            <ul className={styles.menuDesktop}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href} className={styles.menuItem}>
                    <button
                      type="button"
                      className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ''}`}
                      onClick={() => handleNavigate(item.href)}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="desktop-active-pill"
                          className={styles.activePill}
                          transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className={styles.menuLinkLabel}>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.rightSide}>
            <button
              type="button"
              className={styles.ctaBtn}
              onClick={handleAgenda}
            >
              <span className={styles.ctaText}>Agendar cita</span>
              <span className={styles.ctaIconWrap}>
                <FontAwesomeIcon icon={faPaw} />
              </span>
            </button>

            <button
              type="button"
              className={styles.menuIcon}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className={styles.overlay}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            />

            <motion.aside
              className={styles.menuMobile}
              initial={shouldReduceMotion ? { opacity: 0 } : { x: 'calc(100% + 24px)' }}
              animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: 'calc(100% + 24px)' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
            >
              <div className={styles.mobileTop}>
                <div className={styles.mobileBrand}>
                  <div className={styles.mobileLogo}>
                    <Image
                      src="/img/logo.webp"
                      alt="Patitas Spa Condesa"
                      width={30}
                      height={30}
                      loading="eager"
                    />
                  </div>
                  <span className={styles.mobileBrandText}>Patitas</span>
                </div>

                <button
                  type="button"
                  className={styles.mobileCloseBtn}
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <ul className={styles.mobileList}>
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                        onClick={() => handleNavigate(item.href)}
                      >
                        <span className={styles.mobileLinkIcon} aria-hidden="true">
                          <FontAwesomeIcon icon={faPaw} />
                        </span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                className={styles.ctaBtnMobile}
                onClick={handleAgenda}
              >
                <span className={styles.ctaText}>Agendar cita</span>
                <span className={styles.ctaIconWrap}>
                  <FontAwesomeIcon icon={faPaw} />
                </span>
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
