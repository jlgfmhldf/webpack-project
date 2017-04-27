import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import Test from './components/Test/Test'
// import styles from './styles'

export default class App extends PureComponent {
    render() {
        return <div>
            <Test />
        </div>
    }
}

render(
    <App />,
    document.getElementById('root')
)