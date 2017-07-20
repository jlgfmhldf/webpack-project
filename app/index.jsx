import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, renderDevTools } from './utils/devTools'
import reducer from './reducers'
import AppContainer from './containers/App'
import './styles/index.css'

const store = createStore(reducer)

export default class App extends PureComponent {
	render() {
		return <div>
			<Provider store={store}>
				<AppContainer />
			</Provider>
			{renderDevTools(store)}
        </div>
	}
}

render(
    <App />,
    document.getElementById('root')
)
