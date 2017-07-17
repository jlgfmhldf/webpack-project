import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Test from '../../components/Test'

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
	render() {
		return (
			<div>
				<Test>
					Hello!!!
				</Test>
			</div>
		)
	}
}
