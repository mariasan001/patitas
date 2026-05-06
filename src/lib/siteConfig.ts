export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://patitas-spa-condesa.vercel.app';

export const siteConfig = {
  name: 'Patitas Spa Condesa',
  url: siteUrl,
  title: 'Patitas Spa Condesa | Baño, grooming y cuidado para mascotas en CDMX',
  description:
    'Agenda baño, grooming, corte de uñas y spa para tu mascota en Hipódromo Condesa. Atención con cariño, productos especializados y cuidado responsable.',
  keywords: [
    'spa para mascotas CDMX',
    'grooming condesa',
    'baño perros condesa',
    'estética canina CDMX',
    'grooming hipódromo condesa',
    'spa para perros hipódromo condesa',
  ],
  phone: '+525625642593',
  address: {
    streetAddress: 'Av. Nuevo León 217',
    addressLocality: 'Hipódromo Condesa',
    addressCountry: 'MX',
  },
  image: '/img/patitas-og.jpg',
  socialLinks: [
    'https://www.instagram.com/patitas_spa_condesa/',
    'https://www.facebook.com/profile.php?id=61583550540949',
    'https://www.tiktok.com/@patitas.spa.conde',
  ],
} as const;

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();
