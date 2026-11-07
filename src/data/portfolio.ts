/** Public profile content supplied by the owner in the redesign MD and current CV.
 * The owner explicitly confirmed that the MD is editorial context to publish.
 * Keep missing links and illustrative implementation examples in portfolio-verification.ts.
 * Source decisions: docs/PORTFOLIO_CONTENT_RESTORATION.md.
 */
import type { ImageMetadata } from 'astro';
import meowlabMark from '../assets/project-marks/meowlab.png';
import capictiveMark from '../assets/project-marks/capictive.png';
import printSystemMark from '../assets/project-marks/print-system.png';
import uniLogo from '../../public/experience-logos/uni.png';
import ucLogo from '../../public/experience-logos/uc.png';
import awsLogo from '../../public/experience-logos/aws-logo.png';

export type ProjectStatus = 'shipped' | 'in-development' | 'prototype' | 'archived';
export interface PortfolioProject {
  slug: string;
  title: string;
  displayTitle?: string;
  subtitle: string;
  summary: string;
  implementation: string;
  status?: ProjectStatus;
  featured: boolean;
  order: number;
  role?: string;
  period?: string;
  tags: string[];
  category?: string;
  outline?: string[];
  revision?: string;
  sourceFiles?: string[];
  coverMark?: ImageMetadata;
  repositoryUrl?: string;
  repositoryLabel?: string;
  websiteUrl?: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  designNotes?: string[];
  recognition?: string;
  codebase?: string;
}

export const profile = {
  name: 'Diogo Abregu',
  title: 'Diogo Abregu — Software Engineering & AI Systems',
  description: 'Diogo Abregu builds software and AI-powered systems focused on agents, backend engineering, integrations, and real-world automation.',
  eyebrow: 'Software Engineering · Artificial Intelligence',
  headline: { lead: 'Building intelligent systems', accent: 'for real-world problems.' },
  archiveIntroduction: 'Systems Engineering student at UNI, Peru. I build software, AI agents, backend systems, and integrations for real business workflows.',
  introduction: "I'm a Systems Engineering student at Universidad Nacional de Ingeniería, Peru, focused on software engineering, AI agents, backend systems, and business automation.",
  about: 'I work at the intersection of software engineering and applied AI: from APIs and data pipelines to agents that connect with tools and business workflows. I care about the architecture behind the interface, the boundaries of each tool, and keeping a system understandable beyond the demo.',
  context: 'Alongside my studies at UNI, I build products and automation for operational needs in Peru. My work spans business software, civic technology, public procurement, and conversational systems — turning complex information and processes into something people can use.',
  email: 'diogo.abregu.g@uni.pe',
  github: 'https://github.com/DiogoFabricioAG',
  linkedin: 'https://www.linkedin.com/in/diogo-abregu-g/',
  resume: '/Diogo%20CV.pdf',
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'C1 · EF SET' },
  ],
};

export const navigation = [
  { label: 'Work', href: '/#proyectos' },
  { label: 'Experience', href: '/#experiencia' },
  { label: 'About', href: '/#sobre-mi' },
  { label: 'Contact', href: '/#contacto' },
];

export const projects: PortfolioProject[] = [
  {
    slug: 'meowlab', title: 'Meowlab',
    coverMark: meowlabMark,
    category: 'Agent systems',
    subtitle: 'AI agents for small-business workflows',
    status: 'in-development',
    role: 'Software & AI development',
    summary: 'Small businesses juggle quotes, invoicing, sales, and stock across disconnected tools. Meowlab brings specialized AI agents into those operational workflows through WhatsApp and connected services, with a first focus on Peruvian MYPES.',
    implementation: 'I am developing agents for quotations and electronic invoicing through Meowlab / FacturaYa. The public runtime includes role-based message routing, voice transcription, and tenant-scoped conversation history.',
    highlights: [
      'Specialized agents for quotations and electronic invoicing through WhatsApp.',
      'Business workflows that connect sales, inventory, and external services.',
      'Explicit responsibilities and coordination between agents, with attention to authorization boundaries.',
    ],
    designNotes: [
      'Platform architecture in development: Next.js, FastAPI, WhatsApp, and Convex/PostgreSQL depending on the module, with VPS and Caddy for service operation.',
      'Reference scenario: Sales Cat ↔ Stock Cat, coordinating sales and inventory responsibilities through business events.',
      'The public repository also contains the Astro landing and a TypeScript WhatsApp runtime; the platform design and the repository reference represent different parts of the work.',
    ],
    outline: ['WhatsApp events', 'Role-based routing', 'Conversation history'],
    tags: ['AI agents', 'WhatsApp', 'Backend', 'Automation'],
    revision: 'd7f1854fe6f4754a8511390016e1869806819275',
    sourceFiles: ['apps/manolo-whatsapp-worker/src/index.ts', 'apps/manolo-whatsapp-worker/src/roles/registry.ts', 'apps/manolo-whatsapp-worker/src/node/server.ts'],
    repositoryUrl: 'https://github.com/DiogoFabricioAG/meowlab',
    featured: true, order: 1,
  },
  {
    slug: 'capictive', title: 'Capictive',
    coverMark: capictiveMark,
    category: 'Civic technology',
    subtitle: 'Civic technology powered by data and AI',
    status: 'shipped',
    role: 'Founder & AI Solutions Engineer',
    period: 'Jan — Apr 2026',
    summary: 'Electoral information is extensive and scattered across public documents, candidate profiles, and interviews. Capictive makes that material easier to access and understand through software, structured data, and conversational experiences.',
    implementation: 'I built the electoral-information platform with Next.js and Cloudflare D1, and developed ingestion pipelines using web scraping, APIs, and Gemini to extract information into structured JSON.',
    highlights: [
      'Collection and processing of electoral documents and candidate information.',
      'Structured extraction to turn long documents into usable application data.',
      'Web and conversational experiences for exploring political and public information.',
    ],
    metrics: [
      { value: '35', label: 'Candidates covered' },
      { value: '~5,000', label: 'Candidate CVs processed' },
      { value: '~10,000', label: 'Users reached' },
    ],
    recognition: 'Semifinalist · Voces Credicorp 2025',
    outline: ['Public information', 'Structured extraction', 'Web experience'],
    tags: ['Next.js', 'Python', 'Gemini', 'Cloudflare D1'],
    revision: 'c3280453829e35e181c02aba43676f2703595bea',
    sourceFiles: ['app/api/chat/route.ts', 'components/features-section.tsx', 'package.json'],
    repositoryUrl: 'https://github.com/capictive',
    repositoryLabel: 'GitHub organization',
    featured: true, order: 2,
  },
  {
    slug: 'print-system', title: 'Kromata System',
    coverMark: printSystemMark,
    category: 'Business software',
    subtitle: 'Conversational access to operational business data',
    role: 'Full-stack development',
    codebase: 'Print System',
    summary: 'Business information kept in spreadsheets is difficult to query and compare. This system centralizes sales, expenses, customers, and suppliers, with an AI-assisted interface for exploring operational data.',
    implementation: 'I built the web application and serverless API around structured business records. The Astro/React frontend connects to a Hono API on Cloudflare Workers with D1 persistence; its conversational interface presents tables and charts.',
    highlights: [
      'Structured records for sales, expenses, customers, and suppliers.',
      'Natural-language exploration of business information and comparisons.',
      'Tables and charts that make query results easier to inspect.',
    ],
    designNotes: [
      'Engineering focus: controlled tool integrations, data-access boundaries, and structured operations rather than a chat interface alone.',
      'The implementation is published under the Print System repository name.',
    ],
    outline: ['Astro + React', 'Hono API', 'D1 storage'],
    tags: ['Astro', 'React', 'Cloudflare Workers', 'D1', 'AI integration'],
    revision: '76858295f27d684a487aeb81fc1669e88d7d4bd0',
    sourceFiles: ['functions/src/index.ts', 'functions/src/db/schema.ts', 'frontend/src/components/chatbot/ChatBotView.tsx'],
    repositoryUrl: 'https://github.com/DiogoFabricioAG/print-system',
    featured: true, order: 3,
  },
];

export const relatedWork = [
  {
    title: 'RADAR',
    subtitle: 'Public procurement intelligence',
    category: 'Procurement / Peru',
    summary: 'A platform that queries SEACE data and uses LLMs and agent workflows to analyze tender documents, extract restrictions and evaluation criteria, and support quotation preparation.',
    detail: 'Monitoring and filtering procurement opportunities, from public information to structured analysis.',
    tags: ['Python', 'FastAPI', 'SEACE', 'LLMs'],
    link: { href: 'https://github.com/DiogoFabricioAG/radar-compras-publicas', label: 'View source code' },
  },
  {
    title: 'CHIMLE',
    subtitle: 'An academic assistant with tool calling',
    category: 'Research collaboration / LACCEI 2026',
    summary: 'I collaborated on a conversational-assistant prototype that uses Gemini and tool calling to query structured academic data. The work was published at LACCEI 2026.',
    detail: 'Research prototype exploring how language models can work with academic tools and data.',
    tags: ['Gemini', 'Tool calling', 'Structured data'],
    link: { href: 'https://proceedings.laccei.org/index.php/laccei/article/view/7068', label: 'Read the LACCEI article' },
  },
];

export const engineeringFocus = [
  { title: 'AI & agentic systems', description: 'LLM integrations, tool calling, structured extraction, and agent workflows. Exploring retrieval and evaluation as part of building dependable systems.', detail: 'OpenAI API · Gemini · Agents · RAG foundations' },
  { title: 'Backend & integrations', description: 'Python and FastAPI services, REST APIs, and webhooks that connect external systems with operational workflows and structured business data.', detail: 'Python · FastAPI · REST APIs · SQL' },
  { title: 'Cloud & infrastructure', description: 'Application deployment on Linux/VPS and serverless infrastructure, with Docker, AWS cloud foundations, and attention to service operation.', detail: 'AWS · Docker · Linux/VPS · Cloudflare D1' },
  { title: 'Product engineering', description: 'Turning operational requirements into full-stack applications, with maintainable architecture, clear interfaces, integrations, and iterative delivery.', detail: 'Next.js · Astro · TypeScript · Git / CI/CD' },
];

export const experience = [
  {
    organization: 'M+S Metodologías + Soluciones', role: 'Junior Consultant',
    kind: 'Consulting', period: 'Jul 2026 — present',
    points: [
      'Developed an end-to-end marketplace with Python/FastAPI, Mercado Pago integration, operational automation, and VPS deployment.',
      'Implemented a multi-agent development workflow with specialized roles, shared documents, and webhooks for task coordination and integrations.',
    ],
  },
  {
    organization: 'Growth Rockstar', role: 'Programming & Tools Intern',
    kind: 'Internship', period: 'Nov 2025 — Apr 2026',
    points: [
      'Developed reporting automation and CRM/data-management tools for internal operations.',
      'Provided technical and functional support for the implementations and their use by the team.',
    ],
  },
  {
    organization: 'Peri Institute', role: 'Process automation',
    kind: 'Project work', period: 'Mar — Dec 2025',
    points: ['Built workflows for sales registration and payment validation.', 'Connected internal applications and reporting using n8n, AppSheet, and Google Apps Script.'],
  },
];

export const education = [
  { institution: 'Universidad Nacional de Ingeniería', program: 'Systems Engineering', period: '2022 — present', detail: 'Undergraduate degree in progress · Top fifth of cohort · Lima, Peru', note: 'Expected graduation · December 2027', logo: uniLogo },
  { institution: 'Pontificia Universidad Católica de Chile', program: 'Student exchange', period: 'Aug — Dec 2025', detail: 'Software architecture, system design, design patterns, and clean code.', logo: ucLogo },
  { institution: 'AWS re/Start', program: 'Cloud foundations training', period: '2026', detail: 'Cloud infrastructure foundations: EC2, S3, IAM, networking, and service operation.', logo: awsLogo },
];

export const certifications = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Sep 2026', url: 'https://www.credly.com/earner/earned/badge/9b20d431-9f23-47d9-9cc0-fa25dde8552c' },
];

export const communities = [
  { organization: 'LEAD UNI', role: 'Academic Excellence Area Director', period: 'Apr 2025 — Feb 2026', description: 'Community leadership and development of the institutional website and a student job board.' },
];
