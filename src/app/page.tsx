'use client';

import Image from 'next/image';
import styles from "../styles/Home.module.css";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiciosSection from '../components/ServiciosSection';
import PromesaAgendaSection from '../components/PromesaAgendaSection';
import EspacioConocenosSection from '../components/EspacioConocenosSection';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <NavBar />
      <Hero />

      <main className={styles.main}>
        <ServiciosSection />
        <PromesaAgendaSection />
        <EspacioConocenosSection />

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerTop}>
              <div className={styles.footerLogoWrap}>
                <Image
                  src="/img/logo_patitas.png"
                  alt="Patitas"
                  width={110}
                  height={56}
                  className={styles.footerKickerLogo}
                />
              </div>

              <h2 className={styles.footerTitle}>
                Tu mascota merece una experiencia
                <span> llena de cuidado y cariño</span>
              </h2>

              <p className={styles.footerText}>
                Gracias por confiar en nosotros para acompañar el bienestar de tu
                peludito. Seguimos creando momentos especiales para ellos y para ti.
              </p>
            </div>

            <div className={styles.footerBottom}>
              <p className={styles.footerCopy}>
                © {currentYear} Patitas. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
