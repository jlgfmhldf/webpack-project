import React, { PureComponent } from 'react'
import {
	func,
	array,
} from 'prop-types'
import noop from 'noop3'
import {
	Layout,
	Panel,
	AppBar,
	Button,
	Input,
} from 'react-toolbox'
import IngredientsSelect from '../../components/IngredientsSelect'
import SmoothiesList from '../../components/SmoothiesList'
import s from './App.css'

export default class App extends PureComponent {
	static propTypes = {
		selectIngredients: func,
		allSmoothies: array,
		ingredients: array,
		selectedIngredients: array,
	}

	static defaultProps = {
		selectIngredients: noop,
		ingredients: [],
		allSmoothies: [],
		selectedIngredients: [],
	}

	render() {
		const {
			ingredients,
			allSmoothies,
			findedSmoothies,
			selectedIngredients,
			selectIngredients,
		} = this.props

		const findedSmoothiesLength = !!findedSmoothies.length

		const smoothiesItems = findedSmoothiesLength && findedSmoothies || allSmoothies

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
							/>
						</div>
						<h2>
							{findedSmoothiesLength && 'Результаты поиска'}
							{!findedSmoothiesLength && 'Все смузи'}
						</h2>
						<SmoothiesList list={smoothiesItems} />
					</Panel>
				</Layout>
			</div>
		)
	}
}
