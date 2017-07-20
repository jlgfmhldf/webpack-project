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
		const ingridients = Object.keys(item.ingridients)

		Array.prototype.push.apply(arrayOfIngridients, ingridients)
	})

	return uniq(arrayOfIngridients)
}

const mapStateToProps = state => ({
	ingredients: getIngredients(list),
	list,
	selectedIngredients: state.selectedIngredients,
	state,
})

const mapDispatchToProps = dispatch => ({
	selectIngredients: values => dispatch(selectIngredients(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

