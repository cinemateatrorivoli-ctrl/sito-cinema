import { groq } from 'next-sanity';

// Query per ottenere le impostazioni del sito (prezzi, contatti)
export const getSettingsQuery = groq`
  *[_type == "settings"][0] {
    cinemaPrices,
    teatroPrices,
    arenaPrices,
    phoneNumber,
    email
  }
`;

// Query per ottenere tutti gli eventi, ordinati per data di creazione
export const getAllEventsQuery = groq`
  *[_type == "event"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "imageUrl": image.asset->url,
    description,
    showtimes,
    director,
    cast,
    duration,
    trailerUrl
  }
`;

// Query per ottenere eventi filtrati per categoria
export const getEventsByCategoryQuery = groq`
  *[_type == "event" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "imageUrl": image.asset->url,
    description,
    showtimes,
    director,
    cast,
    duration,
    trailerUrl
  }
`;

// Query per ottenere un singolo evento tramite il suo slug
export const getEventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    "imageUrl": image.asset->url,
    description,
    plot,
    showtimes,
    director,
    cast,
    duration,
    trailerUrl
  }
`;
