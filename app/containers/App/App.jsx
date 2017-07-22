import React, { PureComponent } from 'react'
import {
	number,
	func,
	array,
} from 'prop-types'
import noop from 'noop3'
import {
	Layout,
	Panel,
	Input,
} from 'react-toolbox'
import IngredientsSelect from '../../components/IngredientsSelect'
import SmoothiesList from '../../components/SmoothiesList'
import s from './App.css'

export default class App extends PureComponent {
	static propTypes = {
		calories: number,
		smoothies: array,
		ingredients: array,
		selectedIngredients: array,
		selectIngredients: func,
		changeCaloriesValue: func,
		updateSmoothiesList: func,
		findIngredient: func,
	}

	static defaultProps = {
		ingredients: [],
		smoothies: [],
		selectedIngredients: [],
		selectIngredients: noop,
		changeCaloriesValue: noop,
		updateSmoothiesList: noop,
		findIngredient: noop,
	}

	handleSelectIngredients = ingredients => {
		const {
			calories,
			updateSmoothiesList,
			selectIngredients,
		} = this.props

		selectIngredients(ingredients)
		updateSmoothiesList(ingredients, calories)
	}

	handleChangeCaloriesValue = calories => {
		const {
			selectedIngredients,
			updateSmoothiesList,
			changeCaloriesValue,
		} = this.props

		changeCaloriesValue(calories)
		updateSmoothiesList(selectedIngredients, calories)
	}

	render() {
		const {
			calories,
			ingredients,
			smoothies,
			selectedIngredients,
			changeCaloriesValue,
			findIngredient,
		} = this.props

		const smoothiesLength = !!smoothies.length
		const selectedIngredientsLength = !!selectedIngredients.length

		return (
			<div className={s.App}>
				<Layout>
					<Panel>
						<h1 className={s.h1}>MAKE YOUR SMOOTHIE</h1>
						<p>
							Выберите продукты, которые есть у вас в холодильнике:
						</p>
						<IngredientsSelect
							value={selectedIngredients}
							list={ingredients}
							onSelect={this.handleSelectIngredients}
						/>
						<div style={{ width: 300 }}>
							<Input
								type='number'
								value={calories}
								label='Введите желаемую калорийность'
								maxLength={3}
								onChange={this.handleChangeCaloriesValue}
								onInput={findIngredient}
							/>
						</div>
						<h2>
							{smoothiesLength && selectedIngredientsLength && 'Результаты поиска'}
							{smoothiesLength && !selectedIngredientsLength && 'Все смузи'}
							{!smoothiesLength && selectedIngredientsLength && 'Ничего не найдено'}
						</h2>
						<SmoothiesList list={smoothies} />
					</Panel>
				</Layout>
			</div>
		)
	}
}
