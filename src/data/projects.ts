export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  overview: string;
  techStack: string[];
  features: string[];
  featureDescriptions: string[];
  featureScreenshots: string[];
  screenshots: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  accentColor: string;
  category: string;
  architecture?: string;
  challenges?: string[];
  results?: string[];
}

export const projects: Project[] = [
  {
    id: "social-media",
    slug: "social-media-content-generator",
    title: "Social Media Content Generator",
    subtitle: "Optimus Automate",
    description:
      "AI-powered tool that generates platform-specific social media content using Google's Gemini API. Features a refinement loop for iterative content improvement.",
    heroDescription: "AI-powered content creation, reimagined.",
    overview:
      "A sophisticated AI content generation platform that leverages Google's Gemini API to produce tailored, platform-specific social media content. The system features an intelligent refinement loop that allows users to iteratively improve generated content through natural language instructions, producing publication-ready posts for LinkedIn, Instagram, and X (Twitter). Built with a modern dark glassmorphism UI and smooth animations for a premium user experience.",
    techStack: ["JavaScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Gemini API"],
    features: [
      "Platform-specific content for LinkedIn, Instagram & X",
      "7-day content calendar with structured JSON",
      "Iterative refinement loop with natural language",
      "Dark glassmorphism UI with smooth animations",
    ],
    featureDescriptions: [
      "Tailors post lengths, tone, hashtags, and layout rules dynamically to maximize organic reach and engagement on each platform.",
      "Generates comprehensive weekly schedules structured as clean, ready-to-publish plans for seamless campaign management.",
      "Allows direct conversation with the model to adjust tone, add details, or rewrite generated copy instantly without starting over.",
      "Features responsive, frosted glass components styled with Tailwind CSS, offering a premium and immersive visual environment."
    ],
    featureScreenshots: [
      "/projects/social-media-content-generator/07.png",
      "/projects/social-media-content-generator/08.png",
      "/projects/social-media-content-generator/09.png",
      "/projects/social-media-content-generator/10.png"
    ],
    screenshots: Array.from({ length: 15 }, (_, i) => `/projects/social-media-content-generator/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/Social_Media_Content_Generator_Optimus_Automate",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    accentColor: "#a855f7",
    category: "AI / Full Stack",
    architecture: "Client-server architecture with Vite frontend communicating via REST API to an Express.js backend that interfaces with Google's Gemini API for AI content generation.",
    challenges: [
      "Designing an effective refinement loop for iterative AI content improvement",
      "Structuring AI output into consistent, platform-specific formats",
      "Building a responsive glassmorphism UI with smooth state transitions",
    ],
    results: [
      "Generates content for 3 major platforms simultaneously",
      "7-day content calendars in structured JSON format",
      "Sub-second refinement iterations with natural language",
    ],
  },
  {
    id: "clinicflow",
    slug: "clinic-flo",
    title: "ClinicFlow AI",
    subtitle: "Healthcare Intelligence",
    description:
      "AI-driven clinical workflow management system with voice assistant, appointment scheduling, and intelligent patient triage powered by machine learning.",
    heroDescription: "Where AI meets healthcare excellence.",
    overview:
      "ClinicFlow AI is a comprehensive clinical workflow management system that harnesses artificial intelligence to revolutionize healthcare operations. The platform integrates a voice-controlled assistant for hands-free operation, intelligent patient triage powered by TensorFlow machine learning models, automated appointment scheduling, and real-time analytics dashboards. Built with a React frontend and FastAPI backend, it delivers a seamless experience for healthcare professionals.",
    techStack: ["Python", "React", "TensorFlow", "FastAPI", "PostgreSQL"],
    features: [
      "AI-powered patient triage & diagnosis support",
      "Voice assistant for hands-free operation",
      "Automated appointment scheduling",
      "Real-time healthcare analytics dashboard",
    ],
    featureDescriptions: [
      "Applies classification algorithms to patient symptoms, providing clinical staff with prioritized urgency levels and preliminary diagnosis ideas.",
      "Enables clinicians to dictate patient notes, retrieve records, and update charts hands-free using Web Speech API voice synthesis.",
      "Intelligently schedules patient bookings based on physician availability, triage status, and clinical priority to minimize wait times.",
      "Visualizes patient inflows, clinic wait times, and symptom distribution to optimize resource allocation and staff shifts."
    ],
    featureScreenshots: [
      "/projects/clinic-flo/07.png",
      "/projects/clinic-flo/08.png",
      "/projects/clinic-flo/09.png",
      "/projects/clinic-flo/10.png"
    ],
    screenshots: Array.from({ length: 22 }, (_, i) => `/projects/clinic-flo/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/ClinicFlow_AI",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#06b6d4",
    category: "AI / Healthcare",
    architecture: "Microservices architecture with React SPA frontend, FastAPI backend, TensorFlow ML pipeline for triage, PostgreSQL database, and WebSocket-based voice assistant integration.",
    challenges: [
      "Training accurate ML models for patient triage classification",
      "Implementing real-time voice recognition in a clinical environment",
      "Ensuring HIPAA-compliant data handling and security",
    ],
    results: [
      "AI-driven triage with intelligent diagnosis support",
      "Voice-controlled clinical workflows for hands-free operation",
      "Real-time analytics across all patient interactions",
    ],
  },
  {
    id: "california-fish-grill",
    slug: "california-fish-grill",
    title: "California Fish Grill",
    subtitle: "Restaurant Platform",
    description:
      "Full-stack restaurant ordering and management platform with menu browsing, cart management, checkout flow, and reservation system. Deployed on Vercel.",
    heroDescription: "Fresh seafood, digital experience.",
    overview:
      "A full-stack restaurant ordering and management platform built for California Fish Grill. Features an interactive menu with category filtering, real-time cart management, seamless checkout flow, and an online reservation system. The ocean-themed design creates an immersive brand experience while maintaining excellent performance. Deployed and production-ready on Vercel.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Vercel"],
    features: [
      "Interactive menu with category filtering",
      "Real-time cart and checkout flow",
      "Online reservation system",
      "Fully responsive ocean-themed design",
    ],
    featureDescriptions: [
      "Smoothly transitions between food categories with instant search and allergy filters to improve user ordering efficiency.",
      "Manages items dynamically with optimistic UI updates, persistent cart state, and a clean single-page checkout flow.",
      "Secures and logs dining table reservations in real time, checking availability dynamically to prevent overbooking.",
      "Utilizes fluid custom CSS gradients, ocean wave motion components, and a mobile-first responsive layout to captivate users."
    ],
    featureScreenshots: [
      "/projects/california-fish-grill/07.png",
      "/projects/california-fish-grill/08.png",
      "/projects/california-fish-grill/09.png",
      "/projects/california-fish-grill/10.png"
    ],
    screenshots: Array.from({ length: 20 }, (_, i) => `/projects/california-fish-grill/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/California_Fish_Grill",
    liveUrl: "https://california-fish-grill-3vb2.vercel.app/",
    gradient: "from-sky-500/20 to-teal-500/20",
    accentColor: "#0ea5e9",
    category: "Full Stack / E-Commerce",
    architecture: "Next.js full-stack application with server-side rendering, API routes for order processing, and Vercel edge deployment for optimal performance.",
    challenges: [
      "Implementing real-time cart state management with optimistic updates",
      "Designing an immersive ocean-themed UI that maintains usability",
      "Optimizing image-heavy menu pages for fast load times",
    ],
    results: [
      "Production-deployed restaurant platform on Vercel",
      "Complete ordering flow from menu to checkout",
      "Sub-second page transitions with Next.js SSR",
    ],
  },
  {
    id: "jarvis",
    slug: "jarvis",
    title: "Jarvis AI Assistant",
    subtitle: "Virtual Intelligence",
    description:
      "An AI-powered virtual assistant inspired by Iron Man's JARVIS. Features voice recognition, natural language processing, and a futuristic holographic HUD interface.",
    heroDescription: "Your personal AI, brought to life.",
    overview:
      "An AI-powered virtual assistant inspired by Iron Man's JARVIS, featuring advanced voice recognition, natural language processing, and a stunning futuristic holographic HUD interface. Built with Python and PyQt5, Jarvis can understand voice commands, execute system operations, provide intelligent responses powered by OpenAI, and present everything through a cinematic sci-fi inspired desktop interface.",
    techStack: ["Python", "Speech Recognition", "NLP", "PyQt5", "OpenAI"],
    features: [
      "Voice command recognition & response",
      "Natural language understanding",
      "System automation & task execution",
      "Futuristic HUD-style interface",
    ],
    featureDescriptions: [
      "Uses advanced Speech-to-Text APIs to listen for wakeup cues and commands, responding dynamically via synthetic audio voice feedback.",
      "Interfaces with OpenAI GPT APIs to parse intents, enabling natural conversational interactions and high-quality assistance.",
      "Automates desktop shortcuts, folder navigation, web searches, and application launches using local system scripting.",
      "Presents a sci-fi inspired dashboard crafted with PyQt5, displaying system resource monitors and audio frequency visualizers."
    ],
    featureScreenshots: [
      "/projects/jarvis/07.png",
      "/projects/jarvis/08.png",
      "/projects/jarvis/09.png",
      "/projects/jarvis/10.png"
    ],
    screenshots: Array.from({ length: 10 }, (_, i) => `/projects/jarvis/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/Jarvis",
    gradient: "from-amber-500/20 to-red-500/20",
    accentColor: "#f59e0b",
    category: "AI / Desktop",
    architecture: "Desktop application built with PyQt5 GUI framework, integrating Speech Recognition for voice input, OpenAI API for natural language understanding, and custom automation modules for system control.",
    challenges: [
      "Building a responsive holographic HUD interface with PyQt5",
      "Achieving low-latency voice recognition for real-time interaction",
      "Integrating multiple AI services into a cohesive assistant experience",
    ],
    results: [
      "Fully functional AI voice assistant with HUD interface",
      "Real-time voice command recognition and response",
      "System-level automation through natural language",
    ],
  },
  {
    id: "hospital-management",
    slug: "hms",
    title: "Hospital Management System",
    subtitle: "JavaFX Desktop App",
    description:
      "A comprehensive hospital management desktop application built with JavaFX and Maven. Features patient management, appointment scheduling, billing, and staff management.",
    heroDescription: "Enterprise healthcare, engineered.",
    overview:
      "A comprehensive hospital management desktop application engineered with JavaFX and Maven. The system provides a complete suite of healthcare administration tools including patient registration and record management, appointment scheduling, billing and invoice generation, and staff management. Built with a clean, professional UI and backed by MySQL for reliable data persistence.",
    techStack: ["Java", "JavaFX", "CSS", "Maven", "MySQL"],
    features: [
      "Patient registration & record management",
      "Appointment scheduling system",
      "Billing and invoice generation",
      "Staff management dashboard",
    ],
    featureDescriptions: [
      "Organizes patient profiles, medical histories, and active treatments securely in a MySQL database with robust search indexing.",
      "Facilitates seamless scheduling and assignment of doctors to patients, preventing calendar conflicts dynamically.",
      "Calculates service charges, tracks insurance details, and prints formatted invoices for quick and reliable billing.",
      "Enables administrators to manage doctor profiles, work shifts, department allocations, and access privileges."
    ],
    featureScreenshots: [
      "/projects/hms/07.png",
      "/projects/hms/08.png",
      "/projects/hms/09.png",
      "/projects/hms/10.png"
    ],
    screenshots: Array.from({ length: 23 }, (_, i) => `/projects/hms/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/Hospital_Management_System_Javafx",
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "#10b981",
    category: "Desktop / Enterprise",
    architecture: "MVC-based JavaFX desktop application with Maven build system, JDBC connectivity to MySQL database, and CSS-styled FXML views for the UI layer.",
    challenges: [
      "Designing a complex multi-panel dashboard layout in JavaFX",
      "Implementing efficient database queries for large patient datasets",
      "Building a robust billing system with invoice generation",
    ],
    results: [
      "Complete hospital management suite in a single desktop app",
      "Efficient patient record management with search and filtering",
      "Automated billing and invoice generation",
    ],
  },
  {
    id: "energy-analyzer",
    slug: "smart-energy-consumption-analyzer",
    title: "Smart Energy Consumption Analyzer",
    subtitle: "Sustainability Platform",
    description:
      "A web-based smart energy monitoring and analysis platform built with PHP and MySQL. Provides consumption tracking, analytics dashboards, and sustainability insights.",
    heroDescription: "Smarter energy, sustainable future.",
    overview:
      "A web-based smart energy monitoring and analysis platform that empowers users to track, analyze, and optimize their energy consumption. Built with PHP and MySQL, the platform provides real-time consumption tracking, interactive analytics dashboards with Chart.js visualizations, smart home device integration, and personalized sustainability scores with actionable recommendations.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Chart.js"],
    features: [
      "Real-time energy consumption tracking",
      "Analytics dashboard with visual charts",
      "Smart home device integration",
      "Sustainability score & recommendations",
    ],
    featureDescriptions: [
      "Monitors power usage levels from simulated smart sensors, recording granular consumption details for hourly analysis.",
      "Transforms complex historical data into elegant, easy-to-read charts showing usage trends over daily, weekly, or monthly intervals.",
      "Interfaces with simulated home appliances to allow remote control and scheduling of energy-intensive devices.",
      "Calculates a dynamic score based on green energy rules, giving custom tips on how to save electricity and lower carbon footprint."
    ],
    featureScreenshots: [
      "/projects/smart-energy-consumption-analyzer/07.png",
      "/projects/smart-energy-consumption-analyzer/08.png",
      "/projects/smart-energy-consumption-analyzer/09.png",
      "/projects/smart-energy-consumption-analyzer/10.png"
    ],
    screenshots: Array.from({ length: 26 }, (_, i) => `/projects/smart-energy-consumption-analyzer/${(i + 1).toString().padStart(2, "0")}.png`),
    githubUrl: "https://github.com/Usman22Siddiqui/Smart_Energy_Consumption_Analyzer",
    gradient: "from-lime-500/20 to-emerald-500/20",
    accentColor: "#84cc16",
    category: "Web App / IoT",
    architecture: "Traditional LAMP stack with PHP backend, MySQL database for energy data storage, vanilla JavaScript frontend with Chart.js for interactive data visualizations.",
    challenges: [
      "Designing efficient database schemas for time-series energy data",
      "Building interactive and responsive Chart.js visualizations",
      "Implementing a meaningful sustainability scoring algorithm",
    ],
    results: [
      "Comprehensive energy monitoring with real-time tracking",
      "Interactive analytics with multiple chart types",
      "Personalized sustainability scores and recommendations",
    ],
  },
];
