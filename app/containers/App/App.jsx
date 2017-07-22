import React, { PureComponent } from 'react'
import {
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
		smoothies: array,
		ingredients: array,
		selectedIngredients: array,
		selectIngredients: func,
	}

	static defaultProps = {
		ingredients: [],
		smoothies: [],
		selectedIngredients: [],
		selectIngredients: noop,
	}

	render() {
		const {
			ingredients,
			smoothies,
			selectedIngredients,
			selectIngredients,
		} = this.props

		const smoothiesLength = !!smoothies.length
		const selectedIngredientsLength = !!selectedIngredients.length

		console.log(this.props)

		return (
			<div className={s.App}>
				<Layout>
					<Panel>
						<p>
							Выберите продукты, которые есть у вас в холодильнике:
						</p>
						<IngredientsSelect
							value={selectedIngredients}
							list={ingredients}
							onSelect={selectIngredients}
						/>
						<div style={{ width: 300 }}>
							<Input
								defaultValue={250}
								label='Введите желаемую калорийность'
							/>§
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
