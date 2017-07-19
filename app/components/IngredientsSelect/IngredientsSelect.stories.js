import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import IngredientsSelect from './'
import list from './list.mock'

const knobs = () => ({
	value: text('Value', ''),
})

storiesOf('IngredientsSelect', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<IngredientsSelect />
	))
	.add('Data', () => (
		<IngredientsSelect
			{...knobs()}
			list={list}
			onSearch={action('search')}
			onSelect={action('select')}
			onShowMore={action('show more')}
		/>
	))
