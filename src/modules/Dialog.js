import React from 'react'

/**
 * -
 */

export default class Dialog extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: 'title',
            content: 'content'
        }
    }

    render () {
        const state = this.state
        const props = this.props
        return (
            <div className='dialog'>
                <div className='header'>{state.title}</div>
                <div className='content'>
                    {props.children}
                </div>
                <div className='footer'>

                </div>
            </div>

        )
    }

    componentDidMount () {

    }
}
