import React from 'react'
import {withRouter} from 'react-router-dom'

class Box extends React.Component {
    render () {
        const {match} = this.props
        return (<div>{match.path} / {match.params.name}</div>)
    }
}

export default withRouter(Box)
