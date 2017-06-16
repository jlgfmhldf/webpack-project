import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs } from '@storybook/addon-knobs'
import Test from './Test'

storiesOf('Test', module)
    .add('Default', () =>
        <Test />
    )
