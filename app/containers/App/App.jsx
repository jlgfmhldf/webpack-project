import React, { PureComponent } from 'react'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { createStore, renderDevTools } from '../../../utils/devTools'
import { Button } from 'react-toolbox/lib/button'

import * as reducers from '../../../reducers/index'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

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
				<Provider store={store}>
					<div>
						<Button label='Hello!!' raised primary/>
					</div>
				</Provider>
				{renderDevTools(store)}
			</div>
		)
	}
}
