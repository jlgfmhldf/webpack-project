import React, { PureComponent } from 'react'
import {
	string,
	number,
	bool,
	array,
	func,
	node,
} from 'prop-types'
import Spinner from "react-md-spinner"
import noop from 'noop3'

import s from './Loading.css'

export default class Loading extends PureComponent {
	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		// const {  } = this.props

		return (
			<div className={ s.Loading }>
				<div className={s.text}>
					Загрузка...
				</div>
				<div className={s.spinner}>
					<Spinner />
				</div>
			</div>
		)
	}
}
