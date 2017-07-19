import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import IngredientsSelect from './'

const list = [
	'Яблого',
	'Груша',
	'Абрикос',
	'Киви',
	'Молоко',
	'Кефир',
	'Соль',
	'Сахар',
]

storiesOf('IngredientsSelect', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<IngredientsSelect />
	))
	.add('Data', () => (
		<IngredientsSelect
			list={list}
		/>
	))
