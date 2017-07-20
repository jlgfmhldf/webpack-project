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
} from 'react-toolbox'
import SmoothiesCard from '../../components/SmoothiesCard'
import IngredientsSelect from '../../components/IngredientsSelect'
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
						<h2>
							Результаты поиска / Все смузи:

						</h2>
						<div style={{ width: '25%'}}>
							<SmoothiesCard
								title='Тест'
								subtitle='Подзаголовок лалала'
								image='https://placeimg.com/800/450/nature'
								description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type `}
							/>
						</div>
					</Panel>
				</Layout>
			</div>
		)
	}
}
