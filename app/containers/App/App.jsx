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
import SmoothiesCard from '../../components/SmoothiesCard'
import IngredientsSelect from '../../components/IngredientsSelect'
import SmoothiesList from '../../components/SmoothiesList'
import s from './App.css'

export default class App extends PureComponent {
	static propTypes = {
		selectIngredients: func,
		list: array,
		ingredients: array,
		selectedIngredients: array,
	}

	static defaultProps = {
		selectIngredients: noop,
		ingredients: [],
		list: [],
		selectedIngredients: [],
	}

	render() {
		const {
			ingredients,
			list,
			selectedIngredients,
			selectIngredients,
		} = this.props

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
							/>
						</div>
						<h2>
							Результаты поиска / Все смузи:

						</h2>
						<SmoothiesList list={list} />
					</Panel>
				</Layout>
			</div>
		)
	}
}
