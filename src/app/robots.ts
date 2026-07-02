import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // Nasconde l'area admin del CMS ai motori di ricerca
    },
    sitemap: 'https://cineteatrorivoli.it/sitemap.xml',
  };
}
