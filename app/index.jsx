import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import Test from './components/Test/Test.jsx' //TODO

export default class App extends PureComponent {
    render() {
        return <div>
            <Test></Test>
        </div>
    }
}

render(
    <App />,
    document.getElementById('root')
)
