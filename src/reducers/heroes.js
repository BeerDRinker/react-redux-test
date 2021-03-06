import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/index";
import { createCharacter } from './helpers';


export default function heroes(state = [], action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];
			return heroes;
		case REMOVE_CHARACTER:
			heroes = state.filter(item => item.id !== action.id);
			return heroes;
		default:
			return state;
	}
}
