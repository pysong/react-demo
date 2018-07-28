import React from 'react'
import {NavLink} from 'react-router-dom'

const activeStyle = {color: 'green', fontWeight: 'bold'}

class Navigator extends React.Component {
    constructor (props) {
        super(props)
        this.states = {
            current: ''
        }
    }
    render () {
        const items = this.props.items
        const NavItems = items.map(i => (
            <NavLink to={i.path} key={i.key} activeStyle={activeStyle}>{i.key}</NavLink>
        ))
        return (
            <div className='navigate'>
                {NavItems}
            </div>
        )
    }
}

export default Navigator
