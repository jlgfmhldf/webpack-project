import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import IngredientsSelect from './'
import list from './list.mock'

const knobs = () => ({
	value: text('Value', ''),
})

const value = [
	'Яблоко',
	'Груша'
]

storiesOf('IngredientsSelect', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<IngredientsSelect />
	))
	.add('Data', () => (
		<IngredientsSelect
			{...knobs()}
			list={list}
			value={value}
			onSearch={action('search')}
			onSelect={action('select')}
			onShowMore={action('show more')}
		/>
	))
