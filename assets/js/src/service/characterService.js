import Character from '../models/Character.js'; // Asegúrate de que la ruta sea correcta

export async function fetchCharacterData(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        if (!response.ok) throw new Error(`Error fetching character ${id}`);
        const data = await response.json();
        return new Character(data.id, data.name, data.height, data.mass);
    } catch (error) {
        console.error(error);
        throw error; // Lanza el error para que el llamador pueda manejarlo
    }
}

