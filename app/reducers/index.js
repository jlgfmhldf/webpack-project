const defaultState = {
	selectedIngredients: [],
}

import {
	SELECT_INGREDIENTS
} from '../constants/actions'

/* eslint-disable no-unused-vars */
export default function (state = defaultState, { type, payload }) {
	switch (type) {

	case SELECT_INGREDIENTS: {
		return {
			...state,
			selectedIngredients: payload.ingredients,
		}
	}

	default:
		return {
			...state
		}
	}
}
