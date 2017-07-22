import allSmoothies from '../../data/list.json'
import {
	SELECT_INGREDIENTS,
	CHANGE_CALORIES_VALUE,
	UPDATE_SMOOTHIES_LIST,
} from '../constants/actions'

function arrayContainsArray (superset, subset) {
	return subset.every(function (value) {
		return (superset.indexOf(value) >= 0)
	})
}

const findSmoothies = (ingredients = []) => {
	let resultArray = []

	allSmoothies.forEach(item => {
		const { ingredients: itemIngredients } = item

		const smoothieContainIngredients = arrayContainsArray(itemIngredients, ingredients)

		if (smoothieContainIngredients) {
			resultArray.push(item)
		}
	})

	return resultArray
}

const filterByCalories = calories =>
	item => item.nutrition_value.calories < calories

const defaultState = {
	selectedIngredients: [],
	smoothies: allSmoothies,
	calories: undefined,
}

/* eslint-disable no-unused-vars */
export default function (state = defaultState, { type, payload }) {
	switch (type) {

	case UPDATE_SMOOTHIES_LIST: {
		const { ingredients, calories } = payload

		if (!ingredients.length) {
			return {
				...state,
				smoothies: allSmoothies,
			}
		}

		let smoothies = findSmoothies(ingredients)

		if (calories) {
			smoothies = smoothies.filter(filterByCalories(calories))
		}

		return {
			...state,
			smoothies,
		}
	}

	case SELECT_INGREDIENTS: {
		const { ingredients } = payload

		return {
			...state,
			selectedIngredients: ingredients,
		}
	}

	case CHANGE_CALORIES_VALUE: {
		return {
			...state,
			calories: payload.value,
		}
	}

	default:
		return {
			...state
		}
	}
}
