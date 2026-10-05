import revFitImage from "@/assets/projects/RevFit.jpg";
import clearMeImage from "@/assets/projects/ClearMe.jpg";
import hotelPosImage from "@/assets/projects/resturant.png";
import workoraImage from "@/assets/projects/workora.png";
import conveneImage from "@/assets/projects/convene.jpg";
import ticketImage from "@/assets/projects/ticket.jpg";
import websmartImage from "@/assets/websmart.webp";
import consultImage from "@/assets/conseltuncy.webp";
import adminDashboard from "@/assets/adminDashboard.webp";
import alRajaaImage from "@/assets/al-rajaa.webp";

export type ProjectType = "Mobile" | "Web";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  role: string;
  outcome?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  features?: string[];
  challenges?: { challenge: string; approach: string }[];
  results?: string[];
  tech: string[];
  github: string | null;
  live: string | null;
  image: string;
  type: ProjectType;
  year: string;
  featured?: boolean;
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rev-fitness",
    title: "REV Fitness",
    summary:
      "All-in-one fitness mobile app with coaching, nutrition, music integrations, and personalized training flows.",
    overview:
      "REV Fitness is a React Native + Expo product that brings coaching, nutrition, and workout planning into one mobile experience. It includes trainer-connected coaching, personalized suggestions, meal plans, and music integrations with Spotify and Apple Music, backed by Firebase.",
    role: "Built the React Native/Expo client and integrated Firebase plus third-party music and coaching-related product flows for an Upwork engagement.",
    problem:
      "Fitness users often juggle separate apps for workouts, nutrition, coaching, and music.",
    solution:
      "Shipped a unified mobile product with coaching, meal plans, training programs, and music integrations in one React Native/Expo codebase.",
    architecture: [
      "React Native + Expo mobile client",
      "Firebase backend services",
      "Spotify and Apple Music integrations",
      "Coaching and nutrition product modules",
    ],
    features: [
      "Trainer-connected coaching",
      "AI-assisted coaching suggestions",
      "Spotify and Apple Music integration",
      "Nutrition coaching and custom meal plans",
      "Custom training programs and daily challenges",
    ],
    challenges: [
      {
        challenge: "Keep coaching, nutrition, and media features usable inside one mobile product.",
        approach:
          "Structured the app around focused modules in React Native/Expo with Firebase-backed persistence and third-party music integrations.",
      },
    ],
    results: ["Delivered as a production-oriented Upwork fitness product."],
    outcome: "Upwork fitness product built with React Native, Expo, and Firebase.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/biruk-1/REV-Fitness-upwork",
    live: null,
    image: revFitImage,
    type: "Mobile",
    year: "2025",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "clearme",
    title: "ClearMe",
    summary:
      "AI message clarity app that turns messy thoughts into clear social, professional, and personal messages.",
    overview:
      "ClearMe is a React Native + Expo mobile product that helps users rewrite unclear thoughts into polished messages for social posts, apologies, professional communication, dating, and daily practice — with privacy-first messaging.",
    role: "Built the React Native/Expo product experience around AI-assisted message drafting and category-based writing flows.",
    problem:
      "People struggle to turn rough thoughts into clear messages across social, professional, and personal contexts.",
    solution:
      "Created a mobile workflow that guides users through message categories and AI-assisted rewriting while keeping personal texts private.",
    architecture: [
      "React Native + Expo mobile client",
      "Category-based message workflows",
      "AI-assisted content generation",
      "Local/private messaging orientation",
    ],
    features: [
      "AI social media content generation",
      "Apology, professional, and personal message modes",
      "Daily writing practice",
      "History and profile surfaces",
      "Privacy-focused messaging promise",
    ],
    challenges: [
      {
        challenge: "Make AI writing feel useful without making users fear their texts are being stored.",
        approach:
          "Centered the product around private message drafting and clear category-based workflows instead of a generic chat dump.",
      },
    ],
    results: ["Shipped as a focused AI messaging mobile product."],
    outcome: "AI message clarity app built with React Native + Expo.",
    tech: ["React Native", "Expo", "AI"],
    github: "https://github.com/biruk-1/Clear_ME",
    live: null,
    image: clearMeImage,
    type: "Mobile",
    year: "2025",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "bisrat-hotel-pos",
    title: "Bisrat Hotel POS",
    summary:
      "Cloud-based restaurant and hotel POS SaaS for orders, sales, menu items, users, and reporting.",
    overview:
      "A restaurant/hotel POS admin system for managing orders, sales, menu items, users, and analytics. The product focuses on operational dashboards for hospitality teams with order tables, waiter tracking, and sales reporting in Ethiopian Birr.",
    role: "Built the POS admin experience and operational workflows for restaurant/hotel order and sales management.",
    problem:
      "Restaurants and hotels need a clearer way to track orders, waiters, menu items, and sales in one place.",
    solution:
      "Delivered a cloud-style POS admin dashboard with order management, sales tracking, and report-focused views.",
    architecture: [
      "Web admin dashboard",
      "Order and sales management workflows",
      "Menu and user management",
      "Reports and analytics views",
    ],
    features: [
      "Order management with waiter and status tracking",
      "Sales tracking and dashboard metrics",
      "Menu item and user management",
      "Reports and analytics",
    ],
    challenges: [
      {
        challenge: "Make day-to-day restaurant operations scannable for staff and admins.",
        approach:
          "Structured the product around dashboard metrics, filterable order tables, and clear status states.",
      },
    ],
    results: ["Operational POS admin product for restaurant and hotel workflows."],
    outcome: "Restaurant/hotel POS SaaS admin system.",
    tech: ["React", "JavaScript", "Node.js"],
    github: "https://github.com/biruk-1/bisrat-hotel",
    live: null,
    image: hotelPosImage,
    type: "Web",
    year: "2025",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "workora",
    title: "Workora",
    summary:
      "Workspace discovery and booking website for remote workers who need location-based spaces and services.",
    overview:
      "Workora helps people find and book remote workspaces. The product focuses on location listings, workspace booking, and supporting services for people who need flexible places to work.",
    role: "Designed and built the Workora freelance website experience around discovery, listings, and booking messaging.",
    problem:
      "Remote workers need a clearer way to find usable workspaces with amenities and booking options.",
    solution:
      "Built a marketing and product website that presents location listings, booking intent, and workspace services.",
    architecture: [
      "Marketing/product web frontend",
      "Location listing presentation",
      "Workspace booking narrative and service modules",
    ],
    features: [
      "Location-based workspace discovery",
      "Workspace booking flow messaging",
      "Amenity highlights like high-speed WiFi and 24/7 access",
      "Additional workspace services",
    ],
    results: ["Freelance workspace product site for remote booking use cases."],
    outcome: "Remote workspace discovery and booking website.",
    tech: ["React", "JavaScript", "Vite"],
    github: "https://github.com/biruk-1/workora-freelance-website",
    live: null,
    image: workoraImage,
    type: "Web",
    year: "2025",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "convene",
    title: "Convene",
    summary: "Event organizing app with scheduling and notifications, built with React Native and Expo.",
    overview:
      "Convene is a React Native Expo event organizing app focused on helping organizers manage events, scheduling, and related notification flows.",
    role: "Built the Expo React Native client for event organizing workflows.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "https://github.com/biruk-1/Convene/tree/master",
    live: null,
    image: conveneImage,
    type: "Mobile",
    year: "2024",
    caseStudy: true,
    features: ["Event organizing", "Scheduling", "Notifications"],
  },
  {
    slug: "ticket-app",
    title: "Ticket App",
    summary: "React Native app for event organizers to digitalize ticket sales and attendee tracking.",
    overview:
      "A ticket app for event organizers to digitize booking and attendee tracking for events.",
    role: "Built the React Native ticket and attendee experience.",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/biruk-1/my-ticket-app",
    live: null,
    image: ticketImage,
    type: "Mobile",
    year: "2024",
    caseStudy: true,
    features: ["Ticket selling", "Attendee tracking", "Event booking"],
  },
  {
    slug: "kiburan-rwanda",
    title: "Kiburan Rwanda",
    summary:
      "Public web product for Kiburan Trading — TypeScript/React company site in production.",
    overview:
      "A production marketing and company site for Kiburan Trading, built as a typed React/Vite application and deployed on Vercel.",
    role: "Built and shipped the public TypeScript/React frontend and production deploy.",
    tech: ["TypeScript", "React", "Vite"],
    github: "https://github.com/biruk-1/kiburan-ruwanda-v3",
    live: "https://kiburan-ruwanda-v3.vercel.app",
    image: websmartImage,
    type: "Web",
    year: "2025",
    caseStudy: true,
    outcome: "Live production company website.",
    results: ["Live production deploy used as the company website."],
  },
  {
    slug: "live-betting-platform",
    title: "Live Betting & Football Platform",
    summary:
      "Full-stack realtime betting and live football product with JWT auth and WebSockets.",
    overview:
      "A full-stack betting and live football platform with authenticated sessions, WebSocket updates, and MongoDB-backed data for concurrent users.",
    role: "Built JWT auth, WebSocket communication, and query work for concurrent live usage.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com/biruk-1/up-work-betting-website",
    live: null,
    image: adminDashboard,
    type: "Web",
    year: "2025",
    caseStudy: true,
    outcome: "Built for 500+ concurrent users under live match load.",
    results: [
      "Built for 500+ concurrent users under live match load.",
      "MongoDB query work reduced API latency by 40%.",
    ],
  },
  {
    slug: "study-abroad-dashboard",
    title: "Study Abroad Dashboard",
    summary:
      "Operations dashboard for counselors managing study-abroad applications and status workflows.",
    overview:
      "A typed Next.js + Node operations dashboard for counselor workflows around study-abroad applications.",
    role: "Built the typed Next.js frontend and Node-backed workflow surface.",
    tech: ["Next.js", "Node.js", "TypeScript"],
    github: "https://github.com/biruk-1/study-abroad-dashboard",
    live: null,
    image: consultImage,
    type: "Web",
    year: "2025",
    caseStudy: true,
  },
  {
    slug: "al-rajaa-recruitment",
    title: "Al-rajaa Recruitment",
    summary: "Recruitment agency site with admin features.",
    overview:
      "A recruitment agency web product with public pages and admin features using React, Firebase, and Express.",
    role: "Built the React frontend with Firebase/Express-backed admin capabilities.",
    tech: ["React", "Firebase", "Express"],
    github: "https://github.com/biruk-1/Al-rajaa-Workers",
    live: "https://al-rajaa-workers.vercel.app/",
    image: alRajaaImage,
    type: "Web",
    year: "2024",
    caseStudy: true,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = () => projects.filter((project) => project.featured);

export const secondaryProjects = () => projects.filter((project) => !project.featured);
