import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Test from '../../components/Test'

import s from './App.pcss'

// import {
// } from '../../actions/index'

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	// testAction: () => dispatch(testAction()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {

	render() {
		return (
			<div className={s.App}>
				<Test>
					Webpack Starter
				</Test>
			</div>
		)
	}
}
