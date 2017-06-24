import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button'

const mapStateToProps = state => ({
	test: state.test,
})

const mapDispatchToProps = dispatch => ({

})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
	render() {
		return (
			<div>
				<div>
					<Button label='Hello!!' raised primary/>
				</div>
			</div>
		)
	}
}
