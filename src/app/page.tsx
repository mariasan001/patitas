import styles from "../styles/Home.module.css";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiciosSection from '../components/ServiciosSection';
import PromesaAgendaSection from '../components/PromesaAgendaSection';
import EspacioConocenosSection from '../components/EspacioConocenosSection';
import Footer from '../components/Footer';
import { AgendaProvider } from '../components/FloatingAgendaButton';
import { absoluteUrl, siteConfig } from '@/lib/siteConfig';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  image: absoluteUrl(siteConfig.image),
  url: absoluteUrl(),
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressCountry: siteConfig.address.addressCountry,
  },
  openingHours: ['Mo-Sa 09:00-17:00', 'Su 09:00-16:00'],
  sameAs: siteConfig.socialLinks,
};

export default function Home() {
  return (
    <AgendaProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <NavBar />
      <Hero />

      <main className={styles.main}>
        <ServiciosSection />
        <PromesaAgendaSection />
        <EspacioConocenosSection />
      </main>

      <Footer />

    </AgendaProvider>
  );
}
