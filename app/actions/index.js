import {
	SELECT_INGREDIENTS
} from '../constants/actions'

export const selectIngredients = ingredients => ({
	type: SELECT_INGREDIENTS,
	payload: {
		ingredients,
	}
})
