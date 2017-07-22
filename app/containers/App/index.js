import { uniq } from 'ramda'
import { connect } from 'react-redux'
import list from '../../../data/list.json'
import getIngredients from '../../helpers/getIngredients'
import App from './App'

import {
	selectIngredients,
	changeCaloriesValue,
	updateSmoothiesList,
	findIngredient,
} from '../../actions/'

// const getIngredients = () => {
// 	let arrayOfIngredients = []
//
// 	list.forEach(({ ingredients }) => {
//
// 		Array.prototype.push.apply(arrayOfIngredients, ingredients)
// 	})
//
// 	return uniq(arrayOfIngredients).sort(sortByAlphabet)
// }

const sortByAlphabet = (a, b) => {
	if(a < b) return -1
	if(a > b) return 1
	return 0
}

const mapStateToProps = state => ({
	ingredients: getIngredients(list),
	selectedIngredients: state.selectedIngredients,
	smoothies: state.smoothies,
	calories: state.calories,
})

const mapDispatchToProps = dispatch => ({
	selectIngredients: values => dispatch(selectIngredients(values)),
	changeCaloriesValue: value => dispatch(changeCaloriesValue(value)),
	updateSmoothiesList: (ingredients, calories) => dispatch(updateSmoothiesList(ingredients, calories)),
	findIngredient: value => dispatch(findIngredient(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

