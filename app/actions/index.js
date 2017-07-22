import {
	SELECT_INGREDIENTS,
	CHANGE_CALORIES_VALUE,
} from '../constants/actions'

export const selectIngredients = ingredients => ({
	type: SELECT_INGREDIENTS,
	payload: {
		ingredients,
	}
})

export const changeCaloriesValue = value => ({
	type: CHANGE_CALORIES_VALUE,
	payload: {
		value,
	},
})
