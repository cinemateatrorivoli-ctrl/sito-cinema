import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cineteatrorivoli.it';

  // Rotte statiche principali
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/cinema`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teatro`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/arena`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contributi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  try {
    // Recupera tutti gli eventi dinamici da Sanity
    const eventsQuery = groq`*[_type == "event" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }`;

    const events: { slug: string; _updatedAt: string }[] = await client.fetch(eventsQuery);

    const dynamicRoutes: MetadataRoute.Sitemap = events.map((event) => ({
      url: `${baseUrl}/eventi/${event.slug}`,
      lastModified: new Date(event._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Errore durante la generazione della sitemap per gli eventi:", error);
    // Ritorna almeno le rotte statiche se la fetch fallisce
    return staticRoutes;
  }
}
