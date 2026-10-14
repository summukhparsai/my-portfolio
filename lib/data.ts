// All personal content lives here. Edit this file to update the site.
export const profile = {
  name: "Sumukh Parsai",
  title: "Software Developer | AI Enthusiast",
  intro:
    "B.Tech Computer Science Engineering student focused on software development, artificial intelligence and emerging technologies.",
  location: "Indore, India",
  email: "summukhparsai@gmail.com",
  github: "https://github.com/summukhparsai",
  linkedin: "https://www.linkedin.com/in/summukh-parsai-41460226b",
  resume: "/Sumukh_Parsai_Resume.pdf",
  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Sumukh Parsai",
  about: [
    "I am a B.Tech Computer Science Engineering student at IPS Academy, Indore, graduating in 2027.",
    "I have built React.js interfaces during a 5-month front-end internship and developed full-stack applications with React.js and MySQL. I apply data structures, OOP, DBMS and operating systems fundamentals to build, debug and maintain web applications.",
  ],
};

export const stats = [
  { value: "3", label: "Projects" },
  { value: "5 months", label: "Front-end internship" },
  { value: "2027", label: "Graduation year" },
  { value: "8.06", label: "CGPA (out of 10)" },
];

export const skills = [
  { group: "Programming languages", items: ["C++", "Python", "JavaScript"] },
  { group: "Web technologies", items: ["HTML5", "CSS3", "React.js"] },
  { group: "Databases", items: ["MySQL", "SQL"] },
  { group: "Tools and platforms", items: ["Git", "GitHub", "VS Code"] },
  { group: "Core concepts", items: ["Data Structures & Algorithms", "OOP", "SDLC"] },
  { group: "Computer science fundamentals", items: ["DBMS", "Operating Systems"] },
];

export const projects = [
  {
    name: "Placemate.ai",
    description: "An AI-powered web app for interview preparation.",
    repo: "https://github.com/summukhparsai/placemate.ai",
    image: "/images/projects/placemate.jpg",
    imageAlt: "Placemate.ai homepage: Interviews With AI Voice Assistance",
    position: "50% 0%",
  },
  {
    name: "Med-Red",
    description: "A medicine inventory and reminder web application.",
    repo: "https://github.com/summukhparsai/medRemind",
    image: "/images/projects/medred.jpg",
    imageAlt: "Med-Red medicines screen with search, filter and an Add New Medicine button",
    position: "50% 8%",
  },
  {
    name: "Leisure",
    description: "A multi-cuisine restaurant website.",
    repo: "https://github.com/summukhparsai/leisure-multi-cuisine-restaurant-fullstack-website-with-supabase",
    image: "/images/projects/leisure.jpg",
    imageAlt: "Leisure restaurant website hero: Welcome to Leisure",
    position: "50% 22%",
  },
];

export const experience = [
  {
    role: "Front-End Developer Intern",
    company: "Iluam Tech Pvt. Ltd., Nagpur",
    period: "May 2025 – Sept 2025",
    points: [
      "Developed responsive user interfaces for the AssessmentShala platform using React.js, JavaScript, HTML and CSS.",
      "Built front-end modules enabling users to create, conduct and manage online assessments.",
      "Implemented result visualization components to display assessment outcomes within the platform.",
      "Tested and adjusted layouts across multiple devices and browsers for consistent, responsive rendering.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science Engineering",
  school: "IPS Academy, Indore",
  period: "Expected graduation: 2027",
  detail: "CGPA: 8.06 / 10",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
