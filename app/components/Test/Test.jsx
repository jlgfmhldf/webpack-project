import React, { PureComponent } from 'react'
import { node } from 'prop-types'
import bem from 'bem-cn'

const b = bem('test')

import './Test.css'

export default class Test extends PureComponent {
    static propTypes = {
        children: node,
    }

    static defaultProps = {
        children: 'Test'
    }

    render() {
        const { children } = this.props

        return (
          <div className={b}>{children}</div>
        )
      }      
}

