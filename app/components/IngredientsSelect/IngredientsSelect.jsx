import React, { PureComponent } from 'react'
import {
	array,
	func,
} from 'prop-types'
import noop from 'noop3'
import {
	Autocomplete,
} from 'react-toolbox'

import s from './IngredientsSelect.css'

export default class IngredientsSelect extends PureComponent {
	static propTypes = {
		value: array,
		list: array,
		onSearch: func,
	}

	static defaultProps = {
		list: [],
		onSearch: noop,
	}

	render() {
		const {
			value,
			list,
			onSearch,
		} = this.props

		return (
			<div className={s.IngredientsSelect}>
				<Autocomplete
					value={value}
					source={list}
					type='search'
					name='IngredientsSearch'
					label='Найти ингридиент'
					hint='Введите название продукта'
					onChange={onSearch}
				/>
			</div>
		)
	}
}
