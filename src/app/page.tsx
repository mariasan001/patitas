'use client';

import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

// Asegúrate de agregar las imágenes en public/mascota-hero.jpg, espacio1.jpg, espacio2.jpg, espacio3.jpg

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <main className={styles.main}>
        {/* Servicios */}
        <section className={styles.servicios} id="servicios">
          <h2>Nuestros Servicios</h2>
          <div className={styles.serviciosGrid}>
            <div className={styles.servicioCard}>
              <h3>Spa relajante</h3>
              <p>Un baño de calma para tu amigo peludo</p>
              <button className={styles.servicioBtn}>Reserva este servicio</button>
            </div>
            <div className={styles.servicioCard}>
              <h3>Veterinaria</h3>
              <p>Salud en manos expertas</p>
              <button className={styles.servicioBtn}>Reserva este servicio</button>
            </div>
            <div className={styles.servicioCard}>
              <h3>Productos</h3>
              <p>Solo lo mejor para consentir a tu compañero</p>
              <button className={styles.servicioBtn}>Explorar tienda</button>
            </div>
          </div>
        </section>

        {/* Nuestra Promesa */}
        <section className={styles.promesa} id="promesa">
          <p>
            “Cada patita es única; nuestro compromiso es cuidarla como tú lo harías”
          </p>
        </section>

        {/* Agenda tu cita */}
        <section className={styles.agenda} id="agenda">
          <h2>Agenda tu cita</h2>
          <input type="date" className={styles.calendar} />
          <button className={styles.ctaBtn}>Agendar</button>
        </section>

        {/* Nuestro Espacio */}
        <section className={styles.espacio} id="espacio">
          <h2>Nuestro Espacio</h2>
          <div className={styles.espacioImgs}>
            <Image
              src="/espacio1.jpg"
              alt="Espacio 1"
              width={200}
              height={140}
            />
            <Image
              src="/espacio2.jpg"
              alt="Espacio 2"
              width={200}
              height={140}
            />
            <Image
              src="/espacio3.jpg"
              alt="Espacio 3"
              width={200}
              height={140}
            />
          </div>
          <button className={styles.ctaBtn}>Mira el tour</button>
        </section>

        {/* Conócenos */}
        <section className={styles.conocenos} id="conocenos">
          <h2>Conócenos</h2>
          <p>
            Somos amantes de los animales, aquí para sumar bienestar a su vida
          </p>
        </section>

        {/* Cómo llegar */}
        <section className={styles.llegar} id="llegar">
          <h2>Cómo llegar</h2>
          <iframe
            className={styles.mapa}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1680000000000!5m2!1ses!2smx"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.contactoBtns}>
            <a href="tel:+521234567890" className={styles.ctaBtn}>
              Llámanos
            </a>
            <a href="mailto:contacto@patitas.com" className={styles.ctaBtn}>
              Escríbenos
            </a>
          </div>
        </section>

        {/* Cierre */}
        <footer className={styles.cierre}>
          <p>Tu mascota merece lo mejor. ¡Reserva hoy!</p>
        </footer>
      </main>
    </>
  );
}
