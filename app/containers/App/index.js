import { uniq } from 'ramda'
import { connect } from 'react-redux'
import list from '../../../data/list.json'
import App from './App'

import {
	selectIngredients,
} from '../../actions/'

const getIngredients = () => {
	let arrayOfIngridients = []

	list.forEach(item => {
		const ingridients = item.ingridients

		Array.prototype.push.apply(arrayOfIngridients, ingridients)
	})

	return uniq(arrayOfIngridients).sort(sortByAlphabet)
}

const sortByAlphabet = (a, b) => {
	if(a < b) return -1
	if(a > b) return 1
	return 0
}

const mapStateToProps = state => ({
	ingredients: getIngredients(list),
	list,
	selectedIngredients: state.selectedIngredients,
	allSmoothies: state.allSmoothies,
	findedSmoothies: state.findedSmoothies,
	state,
})

const mapDispatchToProps = dispatch => ({
	selectIngredients: values => dispatch(selectIngredients(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

