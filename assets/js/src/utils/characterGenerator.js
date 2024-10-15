import { fetchCharacterData } from '../service/characterService.js';

export async function* fetchCharactersGenerator(rangeStart, rangeEnd) {
    for (let id = rangeStart; id <= rangeEnd; id++) {
        const character = await fetchCharacterData(id);
        yield character;
    }
}
