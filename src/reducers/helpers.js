import characters_json from "../data/characters.json";

export const createCharacter = function(id) {
	let character = characters_json.find(c => c.id === id);
	return character;
}