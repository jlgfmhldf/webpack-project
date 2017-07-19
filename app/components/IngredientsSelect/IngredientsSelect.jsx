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
import {
	Input,
	Link,
} from 'react-toolbox'

import s from './IngredientsSelect.css'

const renderItem = (name) =>
	<li
		className={s.listItem}
		key={name}
	>
		<Link>
			{name}
		</Link>
	</li>

export default class IngredientsSelect extends PureComponent {
	static propTypes = {
		list: array,
		onSearch: func,
	}

	static defaultProps = {
		list: [],
		onSearch: noop,
	}

	render() {
		const {
			onSearch,
			list,
		} = this.props

		return (
			<div className={s.IngredientsSelect}>
				<div className={s.searchInput}>
					<Input
						type='search'
						name='Ingredientsearch'
						label='Найти ингридиент'
						onSearch={onSearch}
					/>
				</div>
				<ul className={s.list}>
					{list.map(renderItem)}
				</ul>

				IngredientsSelect
			</div>
		)
	}
}
