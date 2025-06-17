import {
    carechain,
    coincep,
    ajoku,
    swytfyn,
    web,
    Github2,
    Figma,
    bird,
    Css,
    django,
    firebase,
    Html,
    Javascript,
    Reactjs,
    nextjs,
    tailwind,
  } from "../assets/img";
  
  const skills = [
          { img: Javascript, name: "Javascript" },
          { img: Reactjs, name: "React.js" },
          { img: nextjs, name: "Next.js" },
          { img: tailwind, name: "Tailwind CSS" },
          { img: Html, name: "HTML" },
          { img: Css, name: "CSS" },
          { img: django, name: "Django" },
          { img: firebase, name: "Firebase" },
          { img: Figma, name: "Figma" },
          { img: Github2, name: "GitHub" }
      ];
  
  const projects = [
    {
      name: "Ajoku",
      description:
        "Ajoku is a fast-growing service marketplace platform that connects people with trusted professionals for essential services like cleaning, laundry, home repairs, errands, etc.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn",
          color: "pink-text-gradient",
        },
        {
          name: "Hygraph",
          color: "pink-text-gradient",
        },
      ],
      image: ajoku,
      source_code_link: "https://www.ajoku.ng/",
    },
    {
      name: "SwtFyn",
      description:
        "SwtFyn is a finance app that helps users track income and expenses, set budgets, and achieve financial goals, and also has AI-powered scanner feature.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: swytfyn,
      source_code_link: "https://swtfyn.vercel.app/",
    },
    {
      name: "Carechain",
      description:
        "Carechain is a revolutionary crypto (Web3) medical product that leverages the power of biometric data and AI to provide accurate diagnosis of health condition.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactbootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: carechain,
      source_code_link: "https://carechain.vercel.app/",
    },
    {
      name: "CareerhelpAI",
      description:
        "CareerhelpAI is a platform that connects job seekers with AI-powered career assistance, providing personalized CV creation and interview preparation.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn",
          color: "pink-text-gradient",
        },        
        {
          name: "Neon",
          color: "pink-text-gradient",
        }
      ],
      image: web,
      source_code_link: "https://careerhelpai.vercel.app/",
    },
    
    {
      name: "Coincept",
      description:
        "A cryptocurrency tracker application that keeps track of coin prices in real time, users can add their favorite coins to watchlist.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        
      ],
      image: coincep,
      source_code_link: "https://coincept.netlify.app/",
    },
    {
      name: "Bird",
      description:
        "Designed and built the UI of a birdwatching app that helps users identify and learn about different bird species.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn",
          color: "pink-text-gradient",
        },
        {
          name: "Supabase",
          color: "pink-text-gradient",
        },
      ],
      image: bird,
      source_code_link: "https://plumaai.vercel.app/",
    },
  ];
  
  
  export { skills, projects };