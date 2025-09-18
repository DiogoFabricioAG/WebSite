// Tipos para el JSON
interface Person {
    name: string;
    age: number;
    location: string;
}

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

// Importar el JSON directamente (para uso en el servidor)
import data from '../data/data.json';
import experiencesData from '../data/experience.json';

// Funciones utilitarias
export function getAllPeople(): Person[] {
    return data as Person[];
}

export function getPersonByName(name: string): Person | undefined {
    return data.find((person: Person) => person.name === name);
}

export function getPeopleByLocation(location: string): Person[] {
    return data.filter((person: Person) => person.location === location);
}

export function getAverageAge(): number {
    const total = data.reduce((sum: number, person: Person) => sum + person.age, 0);
    return total / data.length;
}

// Para uso en el cliente (browser)
export async function fetchDataFromPublic(): Promise<Person[]> {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Ejemplo de uso
export function logAllPeople(): void {
    const people = getAllPeople();
    console.log('=== Todas las personas ===');
    people.forEach(person => {
        console.log(`${person.name} - ${person.age} años - ${person.location}`);
    });

    console.log(`\nEdad promedio: ${getAverageAge().toFixed(1)} años`);
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