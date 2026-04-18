import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>
            Bienvenidos a <span>Patitas</span>
          </h1>
          <h2 className={styles.heroSubtitle}>
            Spa y bienestar para tu mascota<br />
            Para consentir a quienes más amas. Aquí cada peludito vive una experiencia de tranquilidad, cariño y bienestar total.<br />
            <span className={styles.heroAccent}>
              Relax, amor y cuidado premium
            </span>
          </h2>
          <button
            className={styles.ctaBtn}
            onClick={() => {
              const agenda = document.getElementById("agenda");
              if (agenda) agenda.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FontAwesomeIcon icon={faPaw} style={{marginRight: '0.7rem', fontSize: '1.2em'}} />
            Agenda tu cita
          </button>
        </div>
      </div>
    </section>
  );
}
