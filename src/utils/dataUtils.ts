// Tipos para el JSON
interface Person {
    name: string;
    age: number;
    location: string;
}

// Importar el JSON directamente (para uso en el servidor)
import data from '../data/data.json';

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