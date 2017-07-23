import {
	SELECT_INGREDIENTS,
	FIND_INGREDIENT,
	CHANGE_CALORIES_VALUE,
	UPDATE_SMOOTHIES_LIST,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR,
	LOAD_SMOOTHIES_LIST,
	LOAD_SMOOTHIES_LIST_SUCCESS,
	LOAD_SMOOTHIES_LIST_ERROR,
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

//TODO
export const showShackBarAction = text => ({
	type: SHOW_SNACKBAR,
	payload: {
		text,
	}
})

export const hideSnackBarAction = () => ({
	type: HIDE_SNACKBAR,
})

const requestLoadSmoothiesList = () => ({
	type: LOAD_SMOOTHIES_LIST,
})

const successLoadSmoothiesList = list => ({
	type: LOAD_SMOOTHIES_LIST_SUCCESS,
	payload: {
		list,
	}
})

const errorLoadSmoothiesList = error => ({
	type: LOAD_SMOOTHIES_LIST_ERROR,
	payload: {
		error,
	}
})

export const loadSmoothiesList = () => ({ dispatch }) => {
	dispatch(requestLoadSmoothiesList())

	fetch('../../data/list.json')
		.then(list => dispatch(successLoadSmoothiesList(list)))
		.catch(error => dispatch(errorLoadSmoothiesList(error)))
}
