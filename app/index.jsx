import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/App'
import './styles/index.css'

export default class App extends PureComponent {
	render() {
		return <div>
            <AppContainer />
        </div>
	}
}

render(
    <App />,
    document.getElementById('root')
)
