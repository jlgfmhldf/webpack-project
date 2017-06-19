import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'
import Test from './Test'

const knobs = () => ({
	children: text('Text', 'Test')
})

storiesOf('Test', module)
    .addDecorator(withKnobs)
    .add('Default', () =>
        <Test
            {...knobs()}
        />
    )


