// Tipos para experiencias
export interface TechRef {
    name: string;
    icon: string;
}

export interface Metric {
    label: string;
    value: string;
}

export interface ColoredPoint {
    text: string;
    color: string; // hex o css color
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    durationDate: string;
    icon: string;
    companyUrl: string | null;
    description: string | null;
    points: string[];
    pointsColored?: ColoredPoint[];
    techs: TechRef[];
    images?: string[];
    metrics?: Metric[];
}

interface Project {
    id: string;                    // Identificador único (kebab-case)
    title: string;                 // Título del proyecto
    description: string;           // Descripción breve
    finishDate: string;            // Formato: MM/YYYY o "ACT" si está activo
    status: 'done' | 'wip' | 'paused' | 'mvp'; // Estado del proyecto
    role: string;                  // Rol que desempeñaste
    icon: string;                  // Logo/icono del proyecto
    liveUrl: string | null;        // URL del proyecto en vivo
    repoUrl: string | null;        // URL del repositorio
    imagesUrl: string | null;      // URL externa de galería (Imgur, etc.)
    features: string[];            // Características destacadas (máx 3)
    metrics: Array<{               // Métricas/resultados (máx 3)
        label: string;
        value: string;
    }>;
    tags: string[];                // Tags temáticos (máx 6)
    techs: Array<{                 // Stack tecnológico
        name: string;
        icon: string;
    }>;
    images: string[];              // Screenshots locales para galería
}

// Importar el JSON directamente (para uso en el servidor)
import experiencesData from '../data/experience.json';
import projectsData from '../data/projects.json';

// ===== Proyectos: utilidades (lado servidor) =====
export function getAllProjects(): Project[] {
    return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
    const list = getAllProjects();
    return list.find(proj => proj.id === id);
}


// ===== Experiencias: utilidades (lado servidor) =====
export function getAllExperiences(): Experience[] {
    return experiencesData as Experience[];
}

export function getExperienceById(id: string): Experience | undefined {
    const list = getAllExperiences();
    return list.find(exp => exp.id === id);
}

// ===== Experiencias: utilidades (lado cliente) =====
export async function fetchExperiencesFromPublic(): Promise<Experience[]> {
    // Usar API de Astro para servir JSON sin mover archivos
    const res = await fetch('/api/experiences.json');
    if (!res?.ok) {
        throw new Error(`No se pudo cargar experience.json: ${res?.status}`);
    }
    return res.json();
}

export async function fetchExperienceByIdFromPublic(id: string): Promise<Experience | undefined> {
    const list = await fetchExperiencesFromPublic();
    return list.find(exp => exp.id === id);
}