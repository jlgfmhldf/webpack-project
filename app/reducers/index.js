import allSmoothies from '../../data/list.json'
import {
	SELECT_INGREDIENTS,
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

const defaultState = {
	selectedIngredients: [],
	smoothies: allSmoothies,
}

/* eslint-disable no-unused-vars */
export default function (state = defaultState, { type, payload }) {
	switch (type) {

	case SELECT_INGREDIENTS: {
		const { ingredients } = payload

		return {
			...state,
			selectedIngredients: ingredients,
			smoothies: findSmoothies(ingredients),
		}
	}

	default:
		return {
			...state
		}
	}
}
