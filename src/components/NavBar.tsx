'use client';

import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useAgendaModal } from './FloatingAgendaButton';

config.autoAddCss = false;

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero', id: 'hero' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Promesa', href: '#promesa', id: 'promesa' },
  { label: 'Nuestro Espacio', href: '#espacio', id: 'espacio' },
  { label: 'Conócenos', href: '#conocenos', id: 'conocenos' },
  { label: 'Cómo llegar', href: '#llegar', id: 'llegar' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);
  const { openAgenda } = useAgendaModal();

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const current = visibleEntries[0];
        if (current?.target?.id) {
          setActiveSection(`#${current.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.18, 0.3, 0.45, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <motion.div
        className={styles.navbarMotion}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
          <div className={styles.leftSide}>
            <button
              type="button"
              className={styles.logoWrapper}
              onClick={() => handleNavigate('#hero')}
              aria-label="Ir al inicio"
            >
              <div className={styles.logo}>
                <Image
                  src="/img/logo_patitas.png"
                  alt="Patitas Logo"
                  width={92}
                  height={62}
                  priority
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
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
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
              <span className={styles.ctaText}>Agendar</span>
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
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className={styles.overlay}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              aria-label="Cerrar menú"
            />

            <motion.aside
              className={styles.menuMobile}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className={styles.mobileTop}>
                <div className={styles.mobileBrand}>
                  <div className={styles.mobileLogo}>
                    <Image
                      src="/img/logo.png"
                      alt="Patitas Logo"
                      width={30}
                      height={30}
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
                        {item.label}
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
                <span className={styles.ctaText}>Agendar</span>
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
