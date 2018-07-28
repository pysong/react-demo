import React from 'react'
import {Switch, Route} from 'react-router-dom'

class ContentPanel extends React.Component {
    render () {
        const RouteItems = this.props.items.map(r => (
            <Route {...r}/>
        ))
        return (
            <Switch>
                {RouteItems}
            </Switch>
        )
    }
}

export default ContentPanel
