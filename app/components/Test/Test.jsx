import React, { PureComponent } from 'react'
import { func, node } from 'prop-types'
import noop from 'noop3'
import bem from 'bem-cn'

const b = bem('test')

import './Test.css'

export default class Test extends PureComponent {
	static propTypes = {
		children: node,
		onClick: func,
	}

	static defaultProps = {
		children: 'Test',
		onClick: noop,
	}

	render() {
		const { children } = this.props

		return (
          <div className={b}>{children}</div>
		)
	}
}

