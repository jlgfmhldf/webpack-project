import React, { PureComponent } from 'react'
import {
	string,
	number,
	bool,
	array,
	func,
	node,
} from 'prop-types'
import noop from 'noop3'
import SmoothiesCard from '../SmoothiesCard'

import s from './SmoothiesList.css'

export default class SmoothiesList extends PureComponent {
	static propTypes = {
		list: array,
	}

	static defaultProps = {
		list: [],
	}

	renderItem = ({
		title,
		nutrition_value: {
			carbohydrates,
			proteins,
			fats,
		}
	}, key) => {
		const description = `Белки: ${proteins} / Жиры: ${fats} / Углеводы: ${carbohydrates}`
		return <div
			className={s.item}
			key={key}
		>
			<SmoothiesCard
				title={title}
				subtitle={description}
				image={`https://placeimg.com/800/450/nature?${key}`} //TODO
			/>
		</div>
	}

	render() {
		const {
			list,
		} = this.props

		return (
			<div className={ s.SmoothiesList }>
				{list.map(this.renderItem)}
			</div>
		)
	}
}
