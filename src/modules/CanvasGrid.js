import React from 'react'
import ReactDom from 'react-dom'

/* eslint browser: true, es6: true*/
export default class CanvasDataGrid extends React.Component {
    constructor (props) {
        super(props)
    }
    updateAttributes (nextProps) {
        Object.keys(this.props).forEach(key => {
            if (!nextProps || this.props[key] !== nextProps[key]) {
                if (this.grid.attributes[key] !== undefined) {
                    this.grid.attributes[key] = nextProps ? nextProps[key] : this.props[key]
                }
                else {
                    this.grid[key] = nextProps ? nextProps[key] : this.props[key]
                }
            }
        })
    }
    componentWillReceiveProps (nextProps) {
        this.updateAttributes(nextProps)
    }
    shouldComponentUpdate () {
        return false
    }
    componentWillUnmount () {
        this.grid.dispose()
    }
    componentDidMount () {
        var args = {}
        this.grid = ReactDom.findDOMNode(this)
        this.updateAttributes()
    }
    render () {
        return React.createElement('canvas-datagrid', {})
    }
}
