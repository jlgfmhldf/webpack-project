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

