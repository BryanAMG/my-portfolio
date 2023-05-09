import { kingsLeague, youtube, todo, shopping, quiz, password } from "@assets/projects/index";

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
  typescript
} = technologiesData

export const projects = [
  {
    name: "Kings League Clone",
    description: "Aplicación web full stack en donde se presenta los equipos, clasificatoria y estadísticas de una liga de futbol.",
    languages: [
      astro,
      tailwindcss,
      node,
      postman
    ],
    image: kingsLeague,
    source_code_link: "https://github.com/bryan220420/astro-kings-league-tailwind",
    webpage_link: "https://kings-league-clone.netlify.app/"
  },
  {
    name: "Youtube Clone",
    description: "Esta aplicación consume la API de Youtube para buscar y mostrar una lista de videos populares.",
    languages: [
      react,
      material,
      thunder,
    ],
    image: youtube,
    source_code_link: "https://github.com/bryan220420/youtube-clone",
    webpage_link: "https://youtube-clone-react-material.netlify.app/"
  },
  {
    name: "Todo App",
    description: "App para listar tareas por filtros e  implementación de dark mode y drang and drop.",
    languages: [
      react,
      tailwindcss,
    ],
    image: todo,
    source_code_link: "https://github.com/bryan220420/todoApp-react-tailwind",
    webpage_link: "https://todoapp-react-tailwind.netlify.app/"
  },
  {
    name: "Shopping Cart",
    description: "Aplicación que simula un e-commerce , listando por categoria y precio y colocando los productos en un carro de compras.",
    languages: [
      react,
      tailwindcss,
    ],
    image: shopping,
    source_code_link: "https://github.com/bryan220420/shopping-cart",
    webpage_link: "https://react-tailwind-shopping-cart.netlify.app/"
  },
  {
    name: "Quiz Javascript",
    description: "Aplicación web que presenta al usuario una serie de preguntas con 4 alternativas sobre el lenguaje de programación JavaScript.",
    languages: [
      react,
      typescript,
      material,
    ],
    image: quiz,
    source_code_link: "https://github.com/bryan220420/quiz-javascript",
    webpage_link: "https://javascript-quiz-zustand.netlify.app/"
  },
  {
    name: "Passowrd Generator",
    description: "Permite crear contraseñas seguras y aleatorias seleccionando la longitud y tipos de caracteres que el usuario incluya.",
    languages: [
      html,
      css,
      javascript
    ],
    image: password,
    source_code_link: "https://github.com/bryan220420/password-generator",
    webpage_link: "https://passoword-generator.surge.sh/"
  },

];

