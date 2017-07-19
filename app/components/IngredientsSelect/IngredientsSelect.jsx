import React, { PureComponent } from 'react'
import {
	string,
	array,
	func,
} from 'prop-types'
import noop from 'noop3'
import {
	Input,
	Link,
	Button,
} from 'react-toolbox'

import s from './IngredientsSelect.css'

export default class IngredientsSelect extends PureComponent {
	static propTypes = {
		value: string,
		list: array,
		onSearch: func,
		onSelect: func,
		onShowMore: func,
	}

	static defaultProps = {
		list: [],
		onSearch: noop,
		onSelect: noop,
		onShowMore: noop,
	}

	handleSelect = name => () => {
		const { onSelect } = this.props

		onSelect(name)
	}

	renderItem = (name, key) =>
		<li
			className={s.listItem}
			key={key}
		>
			<Link
				onClick={this.handleSelect(name)}
			>
				{name}
			</Link>
		</li>

	render() {
		const {
			value,
			list,
			onSearch,
			onShowMore,
		} = this.props

		return (
			<div className={s.IngredientsSelect}>
				<div className={s.searchInput}>
					<Input
						value={value}
						type='search'
						name='Ingredientsearch'
						label='Найти ингридиент'
						hint='Введите название продукта'
						onChange={onSearch}
					/>
				</div>
				<ul className={s.list}>
					{list.map(this.renderItem)}
				</ul>
				<span className={s.showMore}>
					<Button
						label='Показать больше'
						accent
						onClick={onShowMore}
					/>
				</span>
			</div>
		)
	}
}
