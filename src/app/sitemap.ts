import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [absoluteUrl(siteConfig.image)],
    },
  ];
}
