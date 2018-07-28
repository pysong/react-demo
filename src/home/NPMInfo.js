import {Component, createElement} from 'react'
import {Row} from './units'

import './style.less'

function Node (props) {
    const h = createElement
    const r = []
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            const value = props[key]
            const tp = typeof value
            if (tp === 'string' || tp === 'number') {
                r.push(h('li', {key}, `${key}: ${value}`))
            }
            else if (typeof value === 'object') {
                r.push(h('li', {key}, `${key}:`))
                r.push(Node(value))
            }
        }
    }
    return h('ul', {className: 'list'}, r)
}

export default class Profile extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            version: '',
            author: '',
            description: '',
            dependencies: {}
        }
        this.changeList = this.changeList.bind(this)
        this.getList('smui')
    }
    render () {
        const h = createElement
        const state = this.state
        function PackageInfo () {
            return h(Node, state)
        }
        return (
            <div>
                <label>package: <input type="text" onChange={this.changeList}/></label>
                <div>
                    <PackageInfo/>
                </div>
            </div>
        )
    }
    changeList (e) {
        this.getList(e.target.value)
    }
    getList (pkg) {
        fetch(`https://unpkg.com/${pkg}/package.json`).then(resp => resp.json())
            .then(resp => {
                this.setState(resp)
            })
    }
}