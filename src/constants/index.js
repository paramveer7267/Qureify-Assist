const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "How it Works",
    link: "#how-it-works",
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const steps = [
  {
    title: "1. Patient Check-in",
    desc: "Patients enter basic details and symptoms via a digital kiosk or web form, right at the clinic entrance.",
    icon: "/images/step1.png", // e.g. a clipboard, login icon, etc.
  },
  {
    title: "2. Smart AI Triage",
    desc: "Qureify Assist analyzes the symptoms in real-time and categorizes the case by urgency level using AI.",
    icon: "/images/step2.png", // brain, AI, or robot icon
  },
  {
    title: "3. Doctor-ready Summary",
    desc: "A clean summary is generated for the doctor, including suggested priorities and red flags.",
    icon: "/images/step3.png", // checklist, stethoscope, or report icon
  },
];
const abilities = [
  {
    imgPath: "/images/ai-assist.png",
    title: "AI-Powered Efficiency",
    desc: "Smart automation and intelligent suggestions enhance user interaction and decision-making across the site.",
  },
  {
    imgPath: "/images/responsive.png",
    title: "Responsive Design",
    desc: "Fully optimized for mobile, tablet, and desktop — ensuring a smooth experience on all devices.",
  },
  {
    imgPath: "/images/performance.png",
    title: "Lightning-Fast Performance",
    desc: "Optimized code and modern frameworks deliver blazing fast load times and seamless navigation.",
  },
  {
    imgPath: "/images/security.png",
    title: "Secure & Reliable",
    desc: "Built with best practices in mind — safeguarding user data and providing a trustworthy browsing environment.",
  },
  {
    imgPath: "/images/user-first.png",
    title: "User-Centered Experience",
    desc: "Designed with the user in mind, making every interaction intuitive and meaningful.",
  },
  {
    imgPath: "/images/integrations.png",
    title: "Smart Integrations",
    desc: "Easily connects with APIs, analytics, forms, and 3rd-party tools to support your workflow and business needs.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dr. Esther Howard",
    mentions: "@dr.estherhoward",
    review:
      "Qureify Assist has transformed how we handle patient triage. It's like having a super-efficient assistant that never tires. It understands urgency levels, helps prioritize cases, and saves us a tremendous amount of time every day.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Dr. Wade Warren",
    mentions: "@drwadewarren",
    review:
      "Implementing Qureify Assist in our clinic was one of the best decisions we've made. The AI handles preliminary assessments with surprising accuracy, and patients feel they’re being taken care of from the moment they walk in.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Dr. Guy Hawkins",
    mentions: "@drguyhawkins",
    review:
      "As a physician, I was initially skeptical of AI in triage — but Qureify Assist completely won me over. It’s professional, precise, and streamlines my workflow. I now spend more time treating and less time managing queues.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Dr. Marvin McKinney",
    mentions: "@drmarvinmckinney",
    review:
      "Qureify Assist does exactly what it promises — automates triage smartly and accurately. It’s reduced patient wait times significantly and integrates seamlessly with our existing systems. A must-have for modern clinics.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Dr. Floyd Miles",
    mentions: "@drfloydmiles",
    review:
      "This AI assistant is truly revolutionary. Qureify Assist handles intake questions efficiently, flags critical cases, and gives my team more time to focus on patient care. It’s like having an extra set of expert hands at the front desk.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Dr. Albert Flores",
    mentions: "@dralbertflores",
    review:
      "We’ve tried other solutions before, but nothing compares to Qureify Assist. It’s reliable, intelligent, and has improved our triage flow drastically. My staff loves how intuitive it is, and patients are being seen faster than ever.",
    imgPath: "/images/client6.png",
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  steps,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
