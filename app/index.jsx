import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import Test from './components/Test/Test' //TODO

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