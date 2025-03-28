import {
    carechain,
    coincep,
    swytfyn,
    web,
    Github2,
    Figma,
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
      name: "SwtFyn",
      description:
        "Carechain is a revolutionary crypto (Web3) medical product that leverages the power of biometric data and AI to provide accurate diagnosis of health condition.",
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
          name: "Supabase",
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
        "Carechain is a revolutionary crypto (Web3) medical product that leverages the power of biometric data and AI to provide accurate diagnosis of health condition.",
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
        "A cryptocurrency tracker web application that keeps track of coin prices in real time, users can create an account and add their favorite coinst to watchlist.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        
      ],
      image: coincep,
      source_code_link: "https://coincept.vercel.app/",
    },
  ];
  
  export { skills, projects };