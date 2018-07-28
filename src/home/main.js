// import {Component, createElement} from 'react'

// import * from 'react'
import {Component, createElement as h} from 'react'

import {Row} from './units'

import './style.less'

export default class Profile extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className='post-list'>
                {
                    this.props.items.map((item, idx) => {
                        return <Row img={item.img} content={item.content} key={idx}/>
                    })
                }
            </div>
        )
    }
}
