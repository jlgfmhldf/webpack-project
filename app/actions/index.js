import {
	SELECT_INGREDIENTS,
	FIND_INGREDIENT,
	CHANGE_CALORIES_VALUE,
	UPDATE_SMOOTHIES_LIST,
} from '../constants/actions'

export const updateSmoothiesList = (ingredients, calories) => ({
	type: UPDATE_SMOOTHIES_LIST,
	payload: {
		ingredients,
		calories,
	}
})

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

export const findIngredient = value => ({
	type: FIND_INGREDIENT,
	payload: {
		value,
	}
})
