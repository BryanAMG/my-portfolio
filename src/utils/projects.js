import { technologiesData } from './constans'
const {
  astro,
  css,
  html,
  javascript,
  material,
  node,
  postman,
  react,
  tailwindcss,
  thunder,
  typescript,
  next
} = technologiesData

export const projects = [
  {
    name: "Kings League Clone",
    description: "Clasificaciones de un evento de football de 12 equipos de creadores de contenido",
    languages: [
      astro,
      tailwindcss,
      node,
      postman
    ],
    source_code_link: "https://github.com/BryanAMG/astro-kings-league-tailwind",
    webpage_link: "https://kings-league-clone.netlify.app/"
  },
  {
    name: "Youtube Clone",
    description: "Explora y mira tus videos favoritos. Un mundo de entretenimiento te espera aquí",
    languages: [
      react,
      material,
      thunder,
    ],
    source_code_link: "https://github.com/BryanAMG/youtube-clone",
    webpage_link: "https://youtube-clone-react-material.netlify.app/"
  },
  {
    name: "Book Store",
    description: "Descubre tu próximo libro favorito: una aventura literaria te espera",
    languages: [
      next,
      react,
      tailwindcss,
    ],
    source_code_link: "https://github.com/BryanAMG/book-store",
    webpage_link: "https://bryan-book-store.vercel.app/"
  },
  {
    name: "Esland Page",
    description: "Landing page informativa sobre una premiación anual del mundo de los streamers",
    languages: [
      astro,
      react,
      tailwindcss,
    ],
    source_code_link: "https://github.com/BryanAMG/esland_clone",
    webpage_link: "https://esland-clone-eight.vercel.app/"
  },
  {
    name: "Quiz Javascript",
    description: "Pon a prueba tus conocimientos: desafíate con nuestro quiz de JavaScript.",
    languages: [
      react,
      typescript,
      material,
    ],
    source_code_link: "https://github.com/BryanAMG/quiz-javascript",
    webpage_link: "https://javascript-quiz-zustand.netlify.app/"
  },
  {
    name: "Typing Game",
    description: "Mejora tu velocidad y precisión en la mecanografia con este reto",
    languages: [
      html,
      css,
      javascript
    ],
    source_code_link: "https://github.com/BryanAMG/my-typing-page",
    webpage_link: "https://my-typing-page.vercel.app/"
  },
];





