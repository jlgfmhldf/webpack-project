import { connect } from 'react-redux'
import App from './App'

import {
	selectIngredients,
	changeCaloriesValue,
	updateSmoothiesList,
	findIngredient,
	hideSnackBarAction,
} from '../../actions/'

const mapStateToProps = state => ({
	selectedIngredients: state.selectedIngredients,
	smoothies: state.smoothies,
	calories: state.calories,
	ingredients: state.ingredients,
	isShowSnackbar: state.snackbar.show,
	snackbarText: state.snackbar.text,
})

const mapDispatchToProps = dispatch => ({
	selectIngredients: values => dispatch(selectIngredients(values)),
	changeCaloriesValue: value => dispatch(changeCaloriesValue(value)),
	updateSmoothiesList: (ingredients, calories) => dispatch(updateSmoothiesList(ingredients, calories)),
	findIngredient: value => dispatch(findIngredient(value)),
	hideSnackBar: () => dispatch(hideSnackBarAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

