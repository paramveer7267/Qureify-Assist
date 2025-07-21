const navLinks = [
  {
    name: "Home",
    link: "#hero",
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
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

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

export { words, steps, abilities, testimonials, socialImgs, navLinks };
