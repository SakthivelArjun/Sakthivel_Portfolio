export const PERSONAL_INFO = {
  name: "Sakthivel T",
  brandingName: "Sakthivel T",
  title: "Frontend Developer | React & UI Specialist",
  tagline: "Building clean and fast web applications",
  description: "I am a frontend developer who loves building websites using React. I specialize in creating dashboards, easy-to-use forms, and solid website structures. I focus on writing clear code and professional designs.",
  experience: "1.7 years",
  location: "Coimbatore, India",
  email: "sakthiarjun1318@gmail.com",
  phone: "+91-6374689430",
  linkedin: "https://www.linkedin.com/in/sakthivel-t-6613a3227/",
  github: "https://github.com/SakthivelArjun",
  resume: "https://drive.google.com/file/d/1jeP-w0r6GawXDST1VBsgIpfxzh9wsD1x/view?usp=sharing",
  company: "Coherent Pixels Systems Private Limited",
  profileImage: "/backgroundImage.jpg",
};

export const ABOUT_ME = {
  bio: "I am a dedicated Frontend Developer with 1.7 years of experience engineering scalable web applications. I specialize in the React ecosystem, transforming complex logic into high-performance, intuitive user interfaces. My primary focus lies in building clean architectures, optimizing rendering speeds, and delivering pixel-perfect SaaS aesthetics.",
  stats: [
    { label: "Experience", value: "1.7 Years" },
    { label: "Projects Built", value: "12+" },
    { label: "Commitment", value: "100%" },
  ],
  strengths: [
    "Clean and reusable code",
    "Fast debugging",
    "Making websites faster",
    "Detailed UI design",
    "Solid frontend structure",
  ],
};

export const SKILLS = [
  {
    category: "Core Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Material UI", "Framer Motion", "Shadcn UI"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
  },
  {
    category: "Forms & Architecture",
    items: ["React Router v7", "Formik", "React Hook Form", "Yup"],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "Firebase", "REST APIs", "GraphQL"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "Vite", "Postman", "Figma", "Jest"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "SyntaxSpace IDE",
    description: "A modern, cloud-synced web development IDE playground.",
    problem: "Developers needed an instant, browser-based environment to quickly prototype and test HTML, CSS, and JS without the boilerplate of local servers.",
    solution: "I built a powerful IDE integrating Monaco Editor for a true VS Code-like coding experience, complete with live responsive viewports, embedded console debugging, and secure Supabase workspace synchronization.",
    techStack: ["React 18", "Tailwind CSS v4", "Monaco Editor", "Supabase"],
    features: ["Split-Pane Workspace", "Device Simulation", "Cloud Sync", "Dynamic Theming"],
    liveLink: "https://your-syntaxspace-link.com",
    github: "https://github.com/SakthivelArjun/SyntaxSpace.git",
    image: "/syntaxspace.png",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Interactive Data Visualizer",
    description: "An enterprise-grade client-side analytics platform.",
    problem: "Companies needed sophisticated, high-density charts with generative insights without relying on heavy backend processing or sending proprietary data over the internet.",
    solution: "I developed a highly scalable dashboard utilizing Web Workers and Recharts to natively process and visualize 10,000+ rows instantly within the browser, adding an NLP engine that allows typing requests in plain English.",
    techStack: ["React 19", "Material UI", "Recharts", "Web Workers"],
    features: ["NLP Search Engine", "Intelligent Insights Panel", "Performance Native", "Absolute Privacy"],
    liveLink: "https://your-dataviz-link.com",
    github: "https://github.com/SakthivelArjun",
    image: "/datavisualizer.png",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Allianta Vendor Portal",
    description: "A highly secure registration and data portal for enterprise vendors.",
    problem: "The onboarding process lacked structured state management and had weak form validations.",
    solution: "I implemented a deep state architecture and global validation toasts with a full-screen loading overlay approach for complex data submissions.",
    techStack: ["React", "Tailwind", "REST APIs"],
    features: ["Wizard Forms", "State Security", "Loading Mechanics"],
    liveLink: "https://your-live-link.com",
    github: "https://github.com/SakthivelArjun",
    image: null,
    isFeatured: false,
  },
];

export const EXPERIENCE = [
  {
    company: "Coherent Pixels Systems Private Limited",
    role: "Frontend Developer",
    duration: "1.7 Years (Intern → Junior Software Developer)",
    responsibilities: [
      "Took ownership of production-level features and comprehensive internal tools.",
      "Built data-heavy admin dashboards, managing complex data flows.",
      "Developed dynamic, highly-validated forms for reliable business workflows.",
      "Optimized React components and API calls to significantly reduce load times.",
      "Collaborated with design and backend teams to refactor legacy code for better scalability."
    ]
  },
];

export const ACHIEVEMENTS = [
  "Scalable Architecture",
  "Performance Optimization",
  "Complex State Management",
  "API Integration",
  "Data Flow Handling",
];
