
import { fetchCharactersGenerator } from './src/utils/characterGenerator.js'


async function displayCharacter(containerId, characterGenerator, range) {
    const container = document.getElementById(containerId);
    try {
        const character = await characterGenerator.next();
        if (!character.done) {
            const cardHTML = createCharacterCard(character.value, range);
            container.innerHTML += cardHTML;
        }
    } catch (error) {
        console.error(error);
        container.innerHTML += `<p>Error loading character data.</p>`;
    }
}


function createCharacterCard(character, range) {
    const iconColorClass = range === "1-5" ? "red" :
                            range === "6-11" ? "success" :
                            range === "12-17" ? "danger" :
                            "";

    return `
        <div class="single-timeline-content">
            <div class="timeline-icon ${iconColorClass}">
                <i class="fas fa-user"></i>
            </div>
            <div class="timeline-text">
                <h6>${character.name}</h6>
                <p>Estatura: ${character.height} cm</p>
                <p>Peso: ${character.mass} kg</p>
            </div>
        </div>
    `;
}


function initializeCharacterFetch() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        const [start, end] = item.getAttribute('data-range').split('-').map(Number);
        const containerId = `range-${start}-${end}`;
        const characterGenerator = fetchCharactersGenerator(start, end);
        const range = item.getAttribute('data-range');

        item.addEventListener('click', async () => {
            await displayCharacter(containerId, characterGenerator, range);
        });
    });
}

// Inicializar la carga de personajes cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initializeCharacterFetch);


// Llama a la función de inicialización al cargar el script




