import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button'
import {
	Layout,
	Panel,
	AppBar,
	Checkbox,
	Card,
	CardMedia,
	CardTitle,
	CardText,
	CardActions,
} from 'react-toolbox'
import SmoothiesCard from '../../components/SmoothiesCard'
import list from '../../../data/list.json'

const getIngridients = () => {
	let arrayOfIngridients = []

	list.forEach(item => {
		const ingridients = Object.keys(item.ingridients)

		Array.prototype.push.apply(arrayOfIngridients, ingridients)
	})

	return arrayOfIngridients
}

const renderListOfIngridients = (list, onClick) =>
	list.map((item, key) =>
		<Checkbox
			label={item}
			onChange={onClick}
			key={key}
		/>
	)

const ingridients = getIngridients(list)

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
	render() {
		console.log(this.props)

		return (
			<div>
				<Layout>
					<Panel>
						<AppBar leftIcon='menu' />

						<p>
							Выберите продукты, которые есть у вас в холодильнике:
						</p>
						{renderListOfIngridients(ingridients)}

						<Button label='Далее' raised primary/>
						<h2>
							Результаты поиска:

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
