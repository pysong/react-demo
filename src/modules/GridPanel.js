import React from 'react'
import 'canvas-datagrid'
import CanvasDataGrid from './CanvasGrid'

function getRandomData () {
    return [{
        foo: Math.random(),
        bar: Math.random(),
        baz: Math.random()
    }]
}

export default class GridPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {data: getRandomData()}
    }
    render () {
        return React.createElement(
            'div',
            {
                style: {
                    height: '300px'
                }
            },
            React.createElement(CanvasDataGrid, {
                data: this.state.data
            }),
            React.createElement('button', {
                onClick: (e) => {
                    this.setData(getRandomData())
                }
            }, 'Generate Random Data')
        )
    }
    setData (data) {
        this.setState({data})
    }
}

