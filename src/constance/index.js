import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    ajoku,
    thefive,
    fdd,
    lance,
    carechaain,
    coincept,
    neh,
    threejs,
  } from "../assets";
  
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "NextJs Developer",
      icon: creator,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Django Developer",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "The5schools",
      icon: thefive,
      iconBg: "#383E56",
      date: "March 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Development",
      company_name: "Flora",
      icon: fdd,
      iconBg: "#E6DEDD",
      date: "July 2023 - Feb 2023",
      points: [
        "Developing and maintaining web applications using Django.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Ajoku DevSolutions",
      icon: ajoku,
      iconBg: "#E6DEDD",
      date: "February 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancing",
      icon: lance,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js or Nextjs and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Hopejr proved me wrong.",
      name: "Akachukwu Fred",
      designation: "Founder",
      company: "AK Electricals",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their client's success like Hopejr does.",
      name: "Neh Johnson",
      designation: "Founder",
      company: "The5schools",
      image: neh,
    },
    {
      testimonial:
        "After Hope optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Kyla Jons ",
      designation: "Manager",
      company: "Flora Co",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
  ];
  
  const projects = [
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
      image: carechaain,
      source_code_link: "https://github.com/Hopejrajoku/Carechain_frontend_design",
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
      image: coincept,
      source_code_link: "https://github.com/Hopejrajoku/Crypto-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };