import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Custom Web Development",
    icon: web,
  },
  {
    title: "Resume/Portfolio Building",
    icon: mobile,
  },
  {
    title: "AI/ML Solutions & Integrations",
    icon: backend,
  },
  {
    title: "Technical Mentorship",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ML modules",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: gsap,
  },
  {
    name: "Java",
    icon: framer,
  },
  {
    name: "Latex",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Vs code",
    icon: redux,
  },
  {
    name: "Django",
    icon: tailwind,
  },
  {
    name: "PowerBI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tableau",
    icon: express,
  },
  {
    name: "Azure",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Oracle",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];
const experiences = [
  {
    title: "Custom Website Development",
    company_name: "SpydX Web Solutions",
    icon: tekisky,
    iconBg: "#383E56",
    date: "SpydX",
    points: [
      "Delivered 10+ responsive, client-focused websites using HTML, CSS, JavaScript, and WordPress.",
      "Worked with sectors like hospitals, personal portfolios, and small businesses.",
      "Integrated advanced UI/UX designs, animations, and secured hosting setups."
    ],
  },
  {
    title: "ATS-Friendly Résumé Services",
    company_name: "SpydX Resume Studio",
    icon: tekisky,
    iconBg: "#383E56",
    date: "SpydX",
    points: [
      "Created 100+ customized résumés for students, professionals, and freelancers.",
      "Ensured full ATS compatibility, optimized keyword density, and clean formatting.",
      "Provided consulting on LinkedIn profiles, cover letters, and portfolio setup."
    ],
  },
  {
    title: "Tech Mentorship & Freelance Projects",
    company_name: "SpydX Consulting",
    icon: tekisky,
    iconBg: "#383E56",
    date: "SpydX",
    points: [
      "Guided 15+ learners on Python, AI, and Data Science via workshops and sessions.",
      "Offered freelance services including data dashboards, AI bot integrations, and hosting setup.",
      "Helped early-stage startups plan architecture, cloud setup, and MVP tech strategies."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Santhosh proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Santhosh does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Santhosh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Medico – AI-Powered Smart Healthcare Platform",
    description:
      "Medico is an AI-powered healthcare platform designed to provide personalized medication guidance, dosage recommendations, and emergency support.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
      {
        name: "Express",
        color: "purple-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/santhoshgoverthanan/medico",
  },
  {
    name: "Healthcare Analytics Dashboard",
    description:
      "A Power BI and SQL-driven dashboard providing detailed healthcare data analytics, empowering decision-makers with actionable insights.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/santhoshgoverthanan/healthcare-dashboard",
  },
  {
    name: "E-Commerce Analytics Tool",
    description:
      "A data-driven tool built using Python, SpaCy, and Scikit-learn to provide actionable insights for e-commerce businesses.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "red-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/santhoshgoverthanan/ecommerce-analytics",
  },
];

export { services, technologies, experiences, testimonials, projects };
