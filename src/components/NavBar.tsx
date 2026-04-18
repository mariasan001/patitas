import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      {/* Logo siempre centrado y único */}
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" alt="Patitas Logo" width={32} height={32} style={{borderRadius: '50%'}} />
        </div>
      </div>
      {/* Menú escritorio */}
      <ul className={styles.menuDesktop}>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#promesa">Promesa</a></li>
        <li><a href="#espacio">Nuestro Espacio</a></li>
        <li><a href="#conocenos">Conócenos</a></li>
        <li><a href="#llegar">Cómo llegar</a></li>
      </ul>
      <div className={styles.ctaWrapperDesktop}>
        <a href="#agenda" className={styles.ctaBtn}>
          <FontAwesomeIcon icon={faPaw} style={{marginRight: '0.5rem'}} />
          Agendar
        </a>
      </div>
      {/* Menú hamburguesa móvil */}
      <button className={styles.menuIcon} onClick={() => setOpen(!open)} aria-label="Abrir menú">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {/* Menú lateral móvil */}
      <div className={`${styles.menuMobile} ${open ? styles.menuOpen : ''}`}>
        <ul>
          <li><a href="#hero" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setOpen(false)}>Servicios</a></li>
          <li><a href="#promesa" onClick={() => setOpen(false)}>Promesa</a></li>
          <li><a href="#espacio" onClick={() => setOpen(false)}>Nuestro Espacio</a></li>
          <li><a href="#conocenos" onClick={() => setOpen(false)}>Conócenos</a></li>
          <li><a href="#llegar" onClick={() => setOpen(false)}>Cómo llegar</a></li>
        </ul>
        <a href="#agenda" className={styles.ctaBtnMobile} onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faPaw} style={{marginRight: '0.5rem'}} />
          Agendar
        </a>
      </div>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </nav>
  );
}
