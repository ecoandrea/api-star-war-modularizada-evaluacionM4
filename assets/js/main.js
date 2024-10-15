
import { fetchCharactersGenerator } from './src/utils/characterGenerator.js'

function createCharacterCard(character) {
    return `
        <div class="single-timeline-content">
            <div class="timeline-icon">
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

async function displayCharacter(containerId, characterGenerator) {
    const container = document.getElementById(containerId);
    try {
        const character = await characterGenerator.next();
        if (!character.done) {
            const cardHTML = createCharacterCard(character.value);
            container.innerHTML += cardHTML;
        }
    } catch (error) {
        console.error(error);
        container.innerHTML += `<p>Error loading character data.</p>`;
    }
}

function initializeCharacterFetch() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        console.log("lluegue")
        const [start, end] = item.getAttribute('data-range').split('-').map(Number);

        const containerId = `range-${start}-${end}`;
        const characterGenerator = fetchCharactersGenerator(start, end);

        item.addEventListener('click', async () => {
            await displayCharacter(containerId, characterGenerator);
        });
    });
}

// Llama a la función de inicialización al cargar el script
initializeCharacterFetch();




